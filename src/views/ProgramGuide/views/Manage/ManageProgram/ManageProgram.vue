<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        cols="8"
      >
        <div class="manageprogram__header mt-10">
          Manage Program
        </div>

        <v-row
          class="mb-10 mt-12"
          no-gutters
        >
          <v-col
            cols="4"
            class="manageprogram__title"
          >
            Experience

            <!-- TOOLTIP TEMPLATE -->
            <v-tooltip
             
              top
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                >
                  <v-icon
                    small
                    class="pb-1"
                    color="grey lighten-1"
                  >
                    info
                  </v-icon>
                </v-btn>
              </template>
              <span>This is the sequence of your student's program</span>
            </v-tooltip>
            <!-- TOOLTIP TEMPLATE END -->
          </v-col>
          <v-col class="manageprogram__title">
            Unlock

            <!-- TOOLTIP TEMPLATE -->
            <v-tooltip
              top
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                >
                  <v-icon
                    small
                    class="pb-1"
                    color="grey lighten-1"
                  >
                    info
                  </v-icon>
                </v-btn>
              </template>
              <span>This is the unlocking mechanism for your student's program</span>
            </v-tooltip>
            <!-- TOOLTIP TEMPLATE END -->
          </v-col>
          <v-col class="manageprogram__title">
            Trigger

            <!-- TOOLTIP TEMPLATE -->
            <v-tooltip
              top
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  v-on="on"
                >
                  <v-icon
                    small
                    class="pb-1"
                    color="grey lighten-1"
                  >
                    info
                  </v-icon>
                </v-btn>
              </template>
              <span>Monitor completion, set trigger or manually unlock your student's program</span>
            </v-tooltip>
            <!-- TOOLTIP TEMPLATE END -->
          </v-col>
          <v-col
            cols="1"
            class="manageprogram__title pt-1"
          >
            Status
          </v-col>
        </v-row>
        <!-- LAUNCH DAY -->
        <ProgramBlock
          v-for="(sequence,key,index) in routeHash"
          :key="key"
          justify="center"
          :sequence="sequence"
          :name="key"
          :num="index"
          :completion="latestCompletionPercent[key]"
          :unlock-prop="unlockHash[key]"
        />
        <!-- <v-row
          no-gutters
          class="mt-12 mb-12"
        >
          <button class="manageprogram__savebutton">
            Save
          </button>
        </v-row> -->
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import { TeacherProgramData, Classroom, Project, studentClassroom } from '@/store/Database/types/types';
import { FbStore } from '@/store';
import { BehaviorSubject, of, combineLatest, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { doc } from 'rxfire/firestore'
import { flatten,get, Many} from 'lodash'
import ProgramBlock from "./ProgramBlock.vue"
type trigger = undefined | Date | boolean;
@Component<ManageProgram>({
  components:{
    ProgramBlock
  },
  subscriptions() {
    this.latestClassroomData$ = this.classroomIdsSubject$.pipe(
      map((ids) => ids.map(id => doc(FbStore.firestore.collection("Classroom").doc(id)))),
      switchMap(docs => combineLatest(...docs)),
      map((docs: firebase.firestore.DocumentSnapshot[]) => docs.map(doc => doc.data<Classroom>()))
    )
    return {
      latestProjectData: this.latestClassroomData$.pipe(
        map(classDataArr => flatten(classDataArr.map(classData => classData.projectIds.map(projectid => doc(FbStore.firestore.collection("Project").doc(projectid)))))),
        switchMap(projectDocs => combineLatest(...projectDocs)),
        map((projectDocs: firebase.firestore.DocumentSnapshot[]) => projectDocs.map(doc => doc.data<Project>()))
      ),
      latestStudentClassroomData: this.latestClassroomData$.pipe(
        map(classDataArr => flatten(classDataArr.map(classData => classData.studentIds.map(studentid => doc(FbStore.firestore.collection("studentClassroom").doc(classData.classroomId + studentid)))))),
        switchMap(studentClassroomDocs => combineLatest(...studentClassroomDocs)),
        map((studentClassroomSnapshots: firebase.firestore.DocumentSnapshot[]) => studentClassroomSnapshots.map(doc => doc.data<studentClassroom>()))
      )
    }
  }
})
export default class ManageProgram extends Vue {
  classroomIdsSubject$ = new BehaviorSubject(FbStore.currentTeacherProgramData!.classroomIds)
  get classroomIds(){
    this.classroomIdsSubject$.next(FbStore.currentTeacherProgramData!.classroomIds) 
    return FbStore.currentTeacherProgramData!.classroomIds 
  }
  latestClassroomData$!: Observable<(Classroom & Record<string, any>)[]>
  latestProjectData!: (Project)[]
  latestStudentClassroomData!: (studentClassroom)[]
  routeHash = {
    [`launch day`]: "launchDay",
    [`training`]: "train",
    [`practice & research`]: "practice",
    [`ideate`]: "bmc",
    [`hack day`]: "hackDay",
    [`reflection`]: "reflection",
    [`design & prototype`]: "processLog",
    [`package`]: "demoVideo",
    [`demo day`]: "demoDay",
    [`exit survey`]: "exitForm",
  }
  get latestCompletionPercent(): Record<keyof typeof routeHash, number> {
    const { routeHash } = this
    return {
        "launch day":this.getAverage(this.latestStudentClassroomData,"finishedIntrovideo"),
        "training":this.getAverage(this.latestProjectData,"programSequence.train"),
        "practice & research": this.getAverage(this.latestProjectData,"programSequence.caseStudies"),
        "ideate" : this.getAverage(this.latestProjectData,"programSequence.elevatorPitch"),
        "hack day":this.getAverage(this.latestProjectData,"programSequence.hackDay"),
        "reflection":this.getAverage(this.latestProjectData,"programSequence.reflection"),
        "design & prototype":this.getAverage(this.latestProjectData,"programSequence.processLog"),
        "package":this.getAverage(this.latestProjectData,"programSequence.presentation"),
        "demo day":this.getAverage(this.latestProjectData,"programSequence.demoDay"),
        "exit survey":this.getAverage(this.latestProjectData,"programSequence.exitForm")
    }
  }
  unlockHash:Record<string, "By Date"|"Manually"| "By Completion"> = {
    [`launch day`]: "By Date",
    [`training`]: "By Date",
    [`practice & research`]: "By Completion",
    [`ideate`]: "By Completion",
    [`hack day`]: "By Date",
    [`reflection`]: "By Completion",
    [`design & prototype`]: "Manually",
    [`package`]: "By Completion",
    [`demo day`]: "By Date",
    [`exit survey`]: "By Completion",
  }
  getAverage<TObject extends object, TKey extends keyof TObject>(arr:TObject[],field:TKey | [TKey] | Many<string | number | symbol> ){
    if(!arr)
      return 0
      let total = arr.reduce((sum, entry)=> {
          return sum += get(entry,field,undefined)?1:0
      },0)
      return total/arr.length*100
  }
  onUpdateTrigger(route: keyof TeacherProgramData.programSequence, triggerType: trigger) {
    FbStore.updateCurrentTeacherProgramData({
      [`programSequence.${route}`]: triggerType
    })
  }
  getCompletion(route: keyof TeacherProgramData.programSequence) {

  }
}
</script>