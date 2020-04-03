<template>
  <v-row
    justify="center"
    class="mt-12"
  >
    <img
      id="citizenid__autoappicon"
      src="@/assets/autoapp.png"
    >

    <v-col
      id="citizenid__autoappcontaintop"
      cols="8"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto citizenid__title"
      >
        AUTO-APPLICATION
      </v-row>
    </v-col>

    <v-col
      id="citizenid__containbottom"
      cols="8"
    >
      <!-- PROGRAM INFORMATION -->
      <!-- <v-row
            justify="center"
            class="mr-auto ml-auto mt-5 mb-12 studentid__categorytitle"
          >Share your experience, qualify for opportunities and auto-apply for internship</v-row> -->

      <div class="mt-3 mb-6">
        <v-progress-linear
          color="green lighten-1"
          buffer-value="25"
          stream
        />
      </div>

      <!-- <v-col class="text-center studentid__categorytitle mt-12 mb-6">You are automatically applied.</v-col> -->

      <v-row
        justify="center"
        class="prompt__header mt-12 mb-3"
      >
        You've automatically applied!
      </v-row>

      <!-- <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        /> -->

      <v-row
        justify="center"
        no-gutters
        class="prompt__headerdescription2 mb-9"
      >
        <v-col
          class="text-center"
          cols="10"
        >
          In the meantime, edit your application items below for improvements.
        </v-col>
      </v-row>

      <v-col class="text-center mt-6 mb-12">
        <v-btn
          x-large
          disabled
          depressed
        >
          Application In Review
        </v-btn>
      </v-col>

      <!-- <v-col class="text-center studentid__categorytitle mb-12">In the meantime, review items in your application.</v-col> -->

      <v-row>
        <v-col
          cols="6"
          class="text-center align-center"
        >
          <v-progress-circular
            :size="250"
            :width="20"
            :value="value"
            color="red"
            align="center"
            class="pitch_view__teamtitle4 text-center"
          >
            {{ value }}%
          </v-progress-circular>

          <div class="pitch_view__teamtitle2 text-center mt-4">
            Application <br>
            Strength
          </div>
        </v-col>

        <v-col
          cols="6"
          class="text-left"
        >
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Get Started</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Request for Pilot (RFP)</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Introduction Video</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Team</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="yellow mr-3"
            >INCOMPLETE</v-btn><span class="pitch_view__teamtitle3">Training Day</span></span>
          </v-row>

          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Practice Log</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Research</span></span>
          </v-row>

          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="yellow mr-3"
            >INCOMPLETE</v-btn><span class="pitch_view__teamtitle3">Business Model Canvas</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="yellow mr-3"
            >INCOMPLETE</v-btn><span class="pitch_view__teamtitle3">One Sentence Pitch</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="orange mr-3"
            >MISSING</v-btn><span class="pitch_view__teamtitle3">Elevator Pitch</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Hack Day</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Reflection</span></span>
          </v-row>

          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="orange mr-3"
            >MISSING</v-btn><span class="pitch_view__teamtitle3">Design & Prototype Process Log</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Prototype Video</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Presentation Link</span></span>
          </v-row>
          <v-row>
            <span
              class="mt-2 mb-2"
            ><v-btn
              x-small
              depressed
              color="green mr-3"
            >COMPLETE</v-btn><span class="pitch_view__teamtitle3">Demo Day</span></span>
          </v-row>
        </v-col>
      </v-row>

      <!-- <div class="mt-6 mb-3">
      <v-progress-linear
      color="red lighten-2"
      buffer-value="0"
      stream
    ></v-progress-linear></div> -->
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "../../../../store";
import { StudentForm, Project } from "../../../../store/Database/types/types";
import { TimeLog } from "../../../../store/Database/types/utilities";
import {AutoAppKeys, AutoAppValue, assignValidator, assignWeights, getCompletion} from './utils'
@Component<AutoApp>({
  async beforeRouteEnter(to, from, next) {
    let doc = await FbStore.firestore
      .collection("StudentForm")
      .doc(FbStore.userUid)
      .get();
    next(vm => {
      vm.studentForm = doc.data<StudentForm>();
    });
  }
})
export default class AutoApp extends Vue {
  studentForm!: StudentForm;
  get valueMap(): Record<AutoAppKeys,AutoAppValue> {
    let valueMap = {} as AutoApp['valueMap']
    let storeValues: Record<AutoAppKeys,Omit<AutoAppValue,'status'>> = {
      "Get Started": { value: !!this.studentForm.signupForm },
      "Request for Pilot (RFP)": { value: !!FbStore.currentStudentClassroom?.finishedProgramBrief },
      "Introduction Video": { value: !!FbStore.currentStudentClassroom?.finishedIntrovideo },
      "Team": { value: !!FbStore.currentProject },
      "Training Day": { value: !!FbStore.currentProject?.programSequence.train },
      "Practice Log": { value: FbStore.currentProject?.practiceLog[FbStore.userUid!] },
      "Research": { value: !!FbStore.currentProject?.programSequence.caseStudies },
      "Business Model Canvas": { value: FbStore.currentProject! },
      "One Sentence Pitch": { value: FbStore.currentProject?.sentencePitch },
      "Elevator Pitch": { value: FbStore.currentProject?.elevatorPitch },
      "Hack Day": { value: FbStore.currentProject?.hackDayCompletedBy },
      "Reflection": { value: !!FbStore.currentProject?.postHackReflection },
      "Design & Prototype Process Log": { value: FbStore.currentProject?.designLog },
      "Prototype Video": { value: FbStore.currentProject?.demoLink },
      "Presentation Link": { value: FbStore.currentProject?.presentationLink },
      "Demo Day": { value: !!FbStore.currentProject?.programSequence.demoDay }
    };

    Object.keys(storeValues).forEach((key) => {
      valueMap[key as AutoAppKeys] = Object.assign({},storeValues[key as AutoAppKeys],{status:assignValidator(storeValues[key as AutoAppKeys].value)})
    })
    return valueMap
  }
  get completionPercent(){
    return getCompletion(this.valueMap)
  }
}
</script>
