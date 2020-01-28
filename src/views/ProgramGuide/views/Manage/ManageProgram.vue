<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="manageprogram__header mt-10">Manage Program</div>

        <v-row class="mb-10 mt-12" no-gutters>
          <v-col cols="4" class="manageprogram__title">Experience</v-col>
          <v-col class="manageprogram__title">Unlock</v-col>
          <v-col class="manageprogram__title">Trigger</v-col>
          <v-col class="manageprogram__title">Status</v-col>
        </v-row>

        <!-- LAUNCH DAY -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">1</div>
              <div class="pt-2">Launch Day</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn
              class="manageprogram__unlockbydate mt-0 mb-0 ml-0 mr-0"
              depressed
              disabled
            >By Date</v-btn>
          </v-col>

          <v-col class="mb-3">
            <v-menu
              class="manageprogram__datepicker"
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="manageprogram__datepicker mt-0 pt-0"
                  v-model="dateFormatted"
                  label="Select Date"
                  persistent-hint
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col>
            <i class="fas fa-unlock manageprogram__unlock ml-4"></i>
          </v-col>
        </v-row>

        <!-- TRAINING -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">2</div>
              <div class="pt-2">Training</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="green" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-unlock manageprogram__unlock ml-4"></i>
          </v-col>
        </v-row>

        <!-- PRACTICE & RESEARCH -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">3</div>
              <div class="pt-2">Practice & Research</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="green" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-unlock manageprogram__unlock ml-4"></i>
          </v-col>
        </v-row>

        <!-- IDEATE -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">4</div>
              <div class="pt-2">Ideate</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="red" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- HACK DAY -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">5</div>
              <div class="pt-2">Hack Day</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn
              class="manageprogram__unlockbydate mt-0 mb-0 ml-0 mr-0"
              depressed
              disabled
            >By Date</v-btn>
          </v-col>

          <v-col class="mb-3">
            <v-menu
              class="manageprogram__datepicker"
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="manageprogram__datepicker mt-0 pt-0"
                  v-model="dateFormatted"
                  label="Select Date"
                  persistent-hint
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- REFLECTION -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">6</div>
              <div class="pt-2">Reflection</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="red" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- DESIGN & PROTOTYPE -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">7</div>
              <div class="pt-2">Design & Prototype</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>Manually</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-8">
            <v-btn class="manageprogram__unlockbutton" depressed>Unlock</v-btn>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- PACKAGE -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">8</div>
              <div class="pt-2">Package</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="red" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- DEMO DAY -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">9</div>
              <div class="pt-2">Demo Day</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn
              class="manageprogram__unlockbydate mt-0 mb-0 ml-0 mr-0"
              depressed
              disabled
            >By Date</v-btn>
          </v-col>

          <v-col class="mb-3">
            <v-menu
              class="manageprogram__datepicker"
              ref="menu1"
              v-model="menu1"
              :close-on-content-click="false"
              transition="scale-transition"
              offset-y
              full-width
              max-width="290px"
              min-width="290px"
            >
              <template v-slot:activator="{ on }">
                <v-text-field
                  class="manageprogram__datepicker mt-0 pt-0"
                  v-model="dateFormatted"
                  label="Select Date"
                  persistent-hint
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                ></v-text-field>
              </template>
              <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
            </v-menu>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- EXIT SURVEY -->

        <v-row no-gutters>
          <v-col cols="4" class="manageprogram__experience mt-0 mb-0">
            <v-row no-gutters>
              <div class="manageprogram__numbering mt-0 mb-0">10</div>
              <div class="pt-2">Exit Survey</div>
            </v-row>
          </v-col>

          <v-col>
            <v-btn class="manageprogram__unlockbydate mt-0 mb-0" depressed disabled>By Completion</v-btn>
          </v-col>
          <v-col class="manageprogram__datepicker mb-12 mt-3">
            <v-progress-linear v-model="power" color="red" height="9" reactive></v-progress-linear>
          </v-col>

          <v-col>
            <i class="fas fa-lock manageprogram__lock ml-4"></i>
          </v-col>
        </v-row>

        <!-- Save Button -->
        <v-row no-gutters class="mt-12 mb-12">
          <button class="manageprogram__savebutton">Save</button>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component";
import { TeacherProgramData, Classroom, Project, studentClassroom } from '../../../../store/Database/types/types';
import { FbStore } from '../../../../store';
import { BehaviorSubject, of, combineLatest, Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';
import { doc } from 'rxfire/firestore/dist/firestore';
import { flatten,get, Many} from 'lodash'
import undefined from 'firebase/empty-import';
type trigger = undefined | Date | boolean;
@Component<ManageProgram>({
  subscriptions() {
    this.classroomIdsSubject$ = new BehaviorSubject(FbStore.currentTeacherProgramData!.classroomIds)
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
  latestClassroomData$!: Observable<(Classroom & Record<string, any>)[]>
  latestProjectData!: (Project)[]
  latestStudentClassroomData!: (studentClassroom)[]
  routeHash = {
    [`launch day`]: "programBrief",
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
  getAverage<TObject extends object, TKey extends keyof TObject>(arr:TObject[],field:TKey | [TKey] | Many<string | number | symbol> ){
      let total = arr.reduce((sum, entry)=> {
          return sum += get(entry,field,undefined)?1:0
      },0)
      return total/arr.length
  }
  onUpdateTrigger(route: keyof TeacherProgramData.programSequence, triggerType: trigger) {
    FbStore.updateCurrentTeacherProgramData({
      [`programSequence.${route}`]: triggerType
    })
  }
  getCompletion(route: keyof TeacherProgramData.programSequence) {

  }
//   parseType(trigger: trigger) {
//     switch (trigger) {
//       case undefined:
//         return {
//           unlock: "By Completion",

//         }
//         break;

//       default:
//         break;
//     }
//   }
}
</script>