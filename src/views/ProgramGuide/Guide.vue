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
      <Nav v-model="currentModule" />
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
          @click="navBackward"
        >
          <Unlock />
        </v-col>
        <v-col cols="12">
          <router-view />
        </v-col>
        <v-col
          cols="1"
          class="guide__locks guide__locks--right"
          @click="navForward"
        >
          <Unlock />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Watch } from "vue-property-decorator";
import { STUDENTMODULES, EMPLOYERMODULES, TEACHERMODULES } from "./views";
import { Nav, Lock, Unlock } from "./components";
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
import { Observable, empty, Subscription } from "rxjs";
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
    if(FbStore.userCitizenType === "teacher"){
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
  },
  components: {
    Nav,
    Lock,
    Unlock
  }
})
export default class Guide extends Vue {
  public sequenceHash: Record<string, Record<string, string[]>> = {
    Teacher: TEACHERMODULES,
    Employer: EMPLOYERMODULES,
    Student: STUDENTMODULES
  };
  public xcurrentModule: string = "";
  // routeMap!: LinkedList<ProgramNode>;
  currentNode!: ProgramNode;
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
  get sequence() {
    return this.sequenceHash[this.citizenType];
  }
  get nextModule() {
    if (this.currentNode) return this.currentNode.next;
    else return null;
  }
  get prevModule() {
    if (this.currentNode) return this.currentNode.prev;
    else return null;
  }
  get currentModule() {
    return this.currentNode;
  }

  public navForward() {
    // this.routeMap.head
    // console.log(mod)
    // let currentRoute= this.$route.name as string;
    // let length = mod.length;
    // console.log(currentRoute,length)
    // if(mod.includes(currentRoute) && mod[length-1] != currentRoute)
    //   this.$router.push({ name: mod[mod.indexOf(currentRoute)+1] })
    // if(mod[length-1] == currentRoute)
    //   this.$router.push({name: this.sequence[this.nextModule][0]})
    let next = this.currentNode.next;
    if (next && next.value.isUnlocked()) {
      this.currentNode = next;
      this.$router.push({ name: next.value.routeName });
    }
  }
  public navBackward() {
    let prev = this.currentNode.prev;
    if (prev) {
      this.currentNode = prev;
      this.$router.push({ name: prev.value.routeName });
    }
  }
  get routeMap(){
    return new RouteList(FbStore.currentUserProfile!.citizenType!).linkedList
  }
  public created() {
    // psuedo-code [could probably turn this into a util function]
    /* 
      if(user.fb.getLastProgress)
        this.currentModule = user.fb.getLastProgress.Name //this should take them to their latest unlock

        BIND THIS TO `XCURRENTMODULE`
    */
    let name = this.$route.name as string;
    this.currentNode =
      this.routeMap.toArray().find(node => node.value.routeName === name) ||
      this.routeMap.head;
  }
}
</script>