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
      <div class="mt-3 mb-6">
        <v-progress-linear
          color="green lighten-1"
          buffer-value="25"
          stream
        />
      </div>
      <v-row
        justify="center"
        no-gutters
        class="prompt__header mt-12 mb-3"
      >
        <v-col
          cols="10"
          class="text-center"
        >
          You've automatically applied!
        </v-col>
      </v-row>
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
      <v-row
        no-gutters
      >
        <v-col class="text-center mt-6 mb-12">
          <v-btn
            x-large
            disabled
            depressed
          >
            Application In Review
          </v-btn>
        </v-col>
      </v-row>
      <v-row no-gutters>
        <v-col
          cols="12"
          lg="6"
          class="text-center align-center mb-6"
        >
          <v-progress-circular

            :size="250"
            :width="20"
            :value="completionPercent"
            :color="getColor(completionPercent)"
            align="center"
            class="pitch_view__teamtitle4 text-center "
          >
            {{ completionPercent }}%
          </v-progress-circular>

          <div class="pitch_view__teamtitle2 text-center mt-4">
            Application <br> Strength
          </div>
        </v-col>
        <v-col
          cols="12"
          lg="6"
          class="text-left"
        >
          <v-row 
            no-gutters
            justify="center"
            class="mb-6"
          >
            <ModuleStatus :sequence="valueMap" />
          </v-row>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "@/store";
import { StudentForm, Project } from "@/store/Database/types/types";
import { TimeLog } from "@/store/Database/types/utilities";
import {AutoAppKeys, AutoAppValue, assignValidator, assignWeights, getCompletion} from './utils'
import ModuleStatus from "./components/ModuleStatus.vue"
@Component<AutoApp>({
  async beforeRouteEnter(to, from, next) {
      next()
  },
  async created(){
    let doc = await FbStore.firestore
      .collection("StudentForm")
      .doc(FbStore.userUid)
      .get();
      console.log(doc.data())
      try{
        this.studentForm = doc.data<StudentForm>();
        }
        catch(err){
          console.log(err)
        }
  },
  components: {
      ModuleStatus
  },
})
export default class AutoApp extends Vue {
  studentForm: StudentForm = {} as StudentForm;
  get valueMap(): Record<AutoAppKeys,AutoAppValue> {
    let valueMap = {} as AutoApp['valueMap']
    let storeValues: Record<AutoAppKeys,Pick<AutoAppValue,'value'>> = {
      "Get Started": { value: !!this.studentForm?.signupForm },
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
  getColor(strength: number) {
    return strength<=65?'red':strength<=85 && strength>65?'yellow':strength>85?'green':'grey'
  }
  get completionPercent(){
    return Math.ceil(getCompletion(this.valueMap)*100)
  }
}
</script>
