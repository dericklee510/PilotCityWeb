<template>
  <v-row
    no-gutters
    class="programguide"
  >
    <v-col
      cols="1"
      sm="3"
      lg="2"
      xl="1"
      class="d-sm-block d-none"
    >
      <Nav
        :route-map="routeMap"
      />
    </v-col>
    <v-col
      xl="11"
      sm="9"
      lg="10"
      cols="11"
    >
      <v-row
        no-gutters
        class="guide__viewer-container"
      >
        <v-col
          cols="1"
          class="guide__locks guide__locks--left"
        >
          <Locks
            :orientation="'left'"
            :route-map="routeMap"
          />
        </v-col>
        <v-col cols="12">
          <SnackTime
            v-slot="{updateSavedDate, saving}"
            style="width: 100%; height: 100%"
          >
            <router-view
              @nextNode="$refs.nextLock.navigateNext()"
              @updateSavedDate="updateSavedDate($event)"
              @saving="saving($event)"
            />
          </SnackTime>
        </v-col>
        <v-col
          cols="1"
          class="guide__locks guide__locks--right"
        >
          <Locks
            ref="nextLock"
            :orientation="'right'"
            :route-map="routeMap"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { Nav, Locks, SnackTime } from "./components";
import _ from "lodash";
import { LinkedList, LinkedListItem } from "linked-list-typescript";
import { ProgramNode, RouteList } from "./types";
import { FbStore } from "../../store";
import { doc } from "rxfire/firestore";
import { map, filter, tap, skip } from "rxjs/operators";
import {
  EmployerProgram,
  TeacherProgramData,
  Classroom,
  Project,
  studentClassroom
} from "../../store/Database/types/types";
import { Observable, empty, Subscription, BehaviorSubject } from "rxjs";
@Component<Guide>({
  async beforeRouteEnter(to, from, next) {
    if (localStorage.PILOTCITY_EMPLOYERPROGRAMID)
      await FbStore.initCurrentEmployerProgram(
        localStorage.PILOTCITY_EMPLOYERPROGRAMID
      );
    if (FbStore.currentUserProfile!.citizenType !== "employer")
      await FbStore.initCurrentTeacherProgramData(
        FbStore.currentTeacherProgramUID!
      );
    if (FbStore.userCitizenType === "student") {
      await new Promise(resolve => {
        FbStore.currentUserProfile!.classroomIds.forEach(async id => {
          let classRoomData = (
            await FbStore.firestore
              .collection("Classroom")
              .doc(id)
              .get()
          ).data<Classroom>();
          if (
            classRoomData.employerProgramId ===
            FbStore.currentEmployerProgramUID
          ) {
            await FbStore.initcurrentClassroom(classRoomData);
            await FbStore.initCurrentTeacherProgramData(classRoomData.teacherProgramId)
            resolve();
          }
        });
      });
      await FbStore.initCurrentStudentClassroom(FbStore.currentClassroom!.classroomId+FbStore.currentUserProfile!.userId)
      await new Promise(async resolve => {
       await Promise.all(FbStore.currentUserProfile!.projectIds.map(async id => {
          let projectData = (
            await FbStore.firestore
              .collection("Project")
              .doc(id)
              .get()
          ).data<Project>();
          if (
            projectData.classroomId === FbStore.currentClassroom!.classroomId
          ) {
            await FbStore.initCurrentProject(projectData);
            resolve();
          }
        }))
        resolve();
      });
    }
    next();
  },
  subscriptions() {
    return {
      employerProgramData: doc(
        FbStore.firestore
          .collection("EmployerProgram")
          .doc(FbStore.currentEmployerProgramUID)
      ).pipe(
        skip(1),
        map(snapshot => {return snapshot.data<EmployerProgram>()})
      ),
      classRoomData: FbStore.currentClassroom?.classroomId
        ? doc(
            FbStore.firestore
              .collection("Classroom")
              .doc(FbStore.currentClassroom?.classroomId)
          ).pipe(
            skip(1),
            filter(
              snapshot =>
                snapshot.exists && FbStore.userCitizenType === "student"
            ),
            map(snapshot => snapshot.data())
          )
        : empty(),
      studentClassroomData: FbStore.currentStudentClassroom?.studentClassroomId
      ? doc(
        FbStore.firestore.collection("studentClassroom").doc(FbStore.currentStudentClassroom?.studentClassroomId)
      ).pipe(
        skip(1),
        filter(
          snapshot => snapshot.exists && FbStore.userCitizenType === "student"
        ),
        map(snapshot => snapshot.data())
      ):empty(),
      projectData: FbStore.currentProject?.projectId
        ? doc(
            FbStore.firestore
              .collection("Project")
              .doc(FbStore.currentProject?.projectId)
          ).pipe(
            skip(1),
            filter(
              snapshot =>
                 snapshot.exists && FbStore.userCitizenType === "student"
            ),
            map(snapshot => snapshot.data())
          )
        : empty()
    };
  },
  mounted() {
    this.$subscribeTo(
      this.$observables.employerProgramData,
      (data: EmployerProgram) => {
        FbStore.initCurrentEmployerProgram(data);
      }
    );
    if(FbStore.userCitizenType != "employer"){
      let teacherProgramDataObservable = doc(
        FbStore.firestore
          .collection("TeacherProgramData")
          .doc(FbStore.currentTeacherProgramUID)
      ).pipe(
        skip(1),
        filter(
          snapshot => snapshot.exists && FbStore.userCitizenType != "employer"
        ),
        map(snapshot => snapshot.data<TeacherProgramData>())
      )
    this.$subscribeTo(
      teacherProgramDataObservable,
      (data: TeacherProgramData) => {
        FbStore.initCurrentTeacherProgramData(data);
      }
    );
}
    this.$subscribeTo(this.$observables.classRoomData, (data: Classroom) => {
      FbStore.initcurrentClassroom(data);
    });
    this.$subscribeTo(this.$observables.studentClassroomData, (data:studentClassroom) => {
      FbStore.initCurrentStudentClassroom(data)
    })
    this.projectSubscriber = this.$observables.projectData.subscribe(
      (data: Project) => {
        FbStore.initCurrentProject(data);
      }
    );
    if(this.$route.params.launch === FbStore.userCitizenType)
      this.navigateLast()
  },
  components: {
    Nav,
    Locks,
    SnackTime
  }
})
export default class Guide extends Vue {
  get projectIds() {
    return FbStore.currentUserProfile!.projectIds;
  }
  public projectSubscriber: Subscription|null = null
  @Watch("projectIds")
  async onProjectChange() {
    this.projectSubscriber?.unsubscribe();
    await FbStore.initCurrentProject(null);
    let relevantProject: Project | null = await new Promise(async resolve => {
      await Promise.all(
        FbStore.currentUserProfile!.projectIds.map(async id => {
          let projectData = (
            await FbStore.firestore
              .collection("Project")
              .doc(id)
              .get()
          ).data<Project>();
          if (projectData.classroomId === FbStore.currentClassroom!.classroomId)
            resolve(projectData);
        })
      );
      resolve(null);
    });
    if (relevantProject) {
      await FbStore.initCurrentProject(relevantProject);
      this.projectSubscriber = doc(
        FbStore.firestore.collection("Project").doc(relevantProject.projectId)
      )
        .pipe(
          // skip(1)
          ).subscribe(async snapshot => {
          await FbStore.initCurrentProject(snapshot.data());
        });
    }
  }
  get citizenType(): string {
    return localStorage.citizenType;
  }

  get routeMap(){
    return new RouteList(FbStore.currentUserProfile!.citizenType!).linkedList
  }
  navigateLast(){
    let currentNode = this.routeMap.head
    while(currentNode?.next?.value?.isUnlocked)
      currentNode = currentNode.next
    this.$router.push({name:currentNode.value.routeName})
  }
}
</script>