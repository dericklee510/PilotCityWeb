<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <img
        id="rfp__icon"
        src="@/assets/pitch_enter.png"
      >

      <v-col
        id="rfp__contain"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto rfp__title"
        >
          PROJECT PROMPT GENERATOR
        </v-row>

        <v-col
          id="rfp__borderline"
          cols="12"
        />

        <v-row
          justify="center"
          class="mr-auto ml-auto rfp__description mb-10"
        >
          Generate project prompts that best represent employer requirements and your course curriculum by tweaking key information in the mission.
        </v-row>

        <v-row
          justify="center"
          class="rfp__header"
        >
          Step 1
        </v-row>

        <v-row
          justify="center"
          class="rfp__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          class="rfp__headerdescription mb-12"
        >
          Enter the parameters of the employer's project
        </v-row>

        <v-row>
          <v-col
            align="right"
            cols="4"
            class="rfp__generatetitle"
          >
            Problem or Opportunity
          </v-col>
          <v-col cols="7">
            <input
              v-model="problemOrOpportunity"
              class="rfp__generateinput"
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col
            align="right"
            cols="4"
            class="rfp__generatetitle"
          >
            Solution
          </v-col>
          <v-col cols="7">
            <input
              v-model="solution"
              class="rfp__generateinput"
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col
            align="right"
            cols="4"
            class="rfp__generatetitle"
          >
            Key Metric
          </v-col>
          <v-col cols="7">
            <input
              v-model="keyMetric"
              class="rfp__generateinput"
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col
            align="right"
            cols="4"
            class="rfp__generatetitle"
          >
            Product or Service
          </v-col>
          <v-col cols="7">
            <input
              v-model="productOrService"
              class="rfp__generateinput"
            >
          </v-col>
        </v-row>

        <v-row
          justify="center"
          class="rfp__header mt-12"
        >
          Step 2
        </v-row>
        <v-row
          justify="center"
          class="rfp__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          class="rfp__headerdescription mb-12"
        >
          Choose an option you'd like to edit and finalize
        </v-row>

        <v-col>
          <v-row
            class="mt-5 mb-5"
            justify="center"
          >
            <span class="rfp__generatedtitle--color1">TECH-DRIVEN</span><span
              class="ml-3 rfp__choosebutton"
              @click="changeTemplate('tech')"
            >Choose</span>
          </v-row>
          <v-row
            class="rfp__generated mt-5 mb-12"
            justify="center"
          >
            {{ promptTech }}
          </v-row>

          <v-row
            class="mt-5 mb-5"
            justify="center"
          >
            <span class="rfp__generatedtitle--color2">SOLUTION-DRIVEN</span><span
              class="ml-3 rfp__choosebutton"
              @click="changeTemplate('solution')"
            >Choose</span>
          </v-row>
          <v-row
            class="rfp__generated mt-5 mb-12"
            justify="center"
          >
            {{ promptSolution }}
          </v-row>

          <v-row
            class="mt-5 mb-5"
            justify="center"
          >
            <span class="rfp__generatedtitle--color3">PROBLEM-DRIVEN</span><span
              class="ml-3 rfp__choosebutton"
              @click="changeTemplate('problem')"
            >Choose</span>
          </v-row>
          <v-row
            class="rfp__generated mt-5 mb-12"
            justify="center"
          >
            {{ promptProblem }}
          </v-row>

          <v-row
            class="mt-5 mb-5"
            justify="center"
          >
            <span class="rfp__generatedtitle--color4">METRIC-DRIVEN</span><span
              class="ml-3 rfp__choosebutton"
              @click="changeTemplate('metric')"
            >Choose</span>
          </v-row>
          <v-row
            class="rfp__generated mt-5 mb-12"
            justify="center"
          >
            {{ promptMetric }}
          </v-row>
        </v-col>

        <v-row
          justify="center"
          class="rfp__header mt-8"
        >
          Step 3
        </v-row>
        <v-row
          justify="center"
          class="rfp__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          class="rfp__headerdescription mb-12"
        >
          Fine-tune and finalize your project prompt with employer
        </v-row>

        <v-row justify="center">
          <textarea
            v-model="finalPrompt"
            class="rfp__finalize"
          />
        </v-row>



        <v-row
          class="mt-10 mb-10"
          justify="center"
        >
          <v-btn
            large
            class="rfp__button"
            @click="submit"
          >
            Save
          </v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "../../../../store";
import { ValidationObserver, ValidationProvider } from 'vee-validate';

@Component({
  components:{
    ValidationObserver,
    ValidationProvider
  }
})
export default class ProjectPrompt extends Vue {
  finalPrompt: string = FbStore.currentTeacherProgramData!.finalPrompt || "";
  keyMetric: string = FbStore.currentTeacherProgramData!.keyMetric || "";
  problemOrOpportunity?: string = FbStore.currentTeacherProgramData!.problemOrOpportunity || "";
  productOrService: string = FbStore.currentTeacherProgramData!.productOrService || "";
  promptTemplate: "tech" | "solution" | "problem" | "metric" = FbStore.currentTeacherProgramData!.promptTemplate || "tech"
  solution: string = FbStore.currentTeacherProgramData!.solution || "";
  changeTemplate(template: "tech" | "solution" | "problem" | "metric") {
    this.promptTemplate = template;
    this.generatePrompt()
    this.$forceUpdate()
  }
  get promptTech(){
    return `Use ${this.productOrService} to conceptualize, design or prototype
${this.solution} that solves ${this.problemOrOpportunity} to reach ${this.keyMetric}`
  }
get promptSolution(){
  return `Conceptualize, design or prototype ${this.solution} using ${this.productOrService} that solves ${this.problemOrOpportunity} to reach ${this.keyMetric}`
}
get promptProblem(){
  return `Utilizing ${this.productOrService}, solve or explore
${this.problemOrOpportunity} by conceptualizing, designing or prototyping
${this.solution} that reaches ${this.keyMetric}`
}
get promptMetric(){
  return `Utilizing ${this.productOrService}, reach ${this.keyMetric} by
conceptualizing, designing or prototyping ${this.solution} that addresses
${this.problemOrOpportunity}`
}
  generatePrompt() {
    switch (this.promptTemplate) {
      case "tech":
        this.finalPrompt = this.promptTech
        break;
      case "solution":
        this.finalPrompt = this.promptSolution
        break;
      case "problem":
        this.finalPrompt = this.promptProblem
        break;
      case "metric":
        this.finalPrompt = this.promptMetric
        break;

    }

  }
  submit() {
    let {
      problemOrOpportunity,
      solution,
      keyMetric,
      productOrService,
      promptTemplate,
      finalPrompt
    } = this;
    FbStore.updateCurrentTeacherProgramData({
      problemOrOpportunity,
      solution,
      keyMetric,
      productOrService,
      promptTemplate,
      finalPrompt
    });
  }
}
</script>