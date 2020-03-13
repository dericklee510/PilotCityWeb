<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <img
        id="prompt__icon"
        src="@/assets/pitch_enter.png"
      >

      <v-col
        id="prompt__contain"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto prompt__title"
        >
          PROJECT PROMPT GENERATOR



          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/how-do-i-decide-on-my-project-for-students"
                target="_blank"
                icon
                v-on="on"
              >
                <v-icon
                  class="pb-3"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>How do I decide on my project for students? Click to learn more.</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-col
          id="prompt__borderline"
          cols="12"
        />

        <v-row
          justify="center"
          no-gutters
          class="prompt__description mb-10"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            Generate project prompts that best represent employer requirements and your course curriculum by tweaking key information in the mission.
          </v-col>
        </v-row>

        <v-row
          justify="center"
          class="prompt__header"
        >
          Step 1
        </v-row>

        <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          no-gutters
          class="prompt__headerdescription mb-12"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            Enter the parameters of the employer's project
          </v-col>
        </v-row>

        <v-row>
          <v-col
            align="right"
            cols="4"
            class="prompt__generatetitle"
          >
            Problem or Opportunity
          </v-col>
          <v-col cols="7">
            <input
              v-model="problemOrOpportunity"
              placeholder="the manual assessment of road conditions"
              class="prompt__generateinput"
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col
            align="right"
            cols="4"
            class="prompt__generatetitle"
          >
            Solution
          </v-col>
          <v-col cols="7">
            <input
              v-model="solution"
              placeholder="an autonomous solution"
              class="prompt__generateinput"
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col
            align="right"
            cols="4"
            class="prompt__generatetitle"
          >
            Key Metric
          </v-col>
          <v-col cols="7">
            <input
              v-model="keyMetric"
              placeholder="savings in city engineers' time and tax-payer dollars"
              class="prompt__generateinput"
            >
          </v-col>
        </v-row>
        <v-row>
          <v-col
            align="right"
            cols="4"
            class="prompt__generatetitle"
          >
            Product or Service
          </v-col>
          <v-col cols="7">
            <input
              v-model="productOrService"
              placeholder="programmable drones"
              class="prompt__generateinput"
            >
          </v-col>
        </v-row>

        <v-row
          justify="center"
          class="prompt__header mt-12"
        >
          Step 2
        </v-row>
        <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          no-gutters
          class="prompt__headerdescription mb-12"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            Choose an option you'd like to edit and finalize
          </v-col>
        </v-row>

        <v-col>
          <v-row
            class="mt-5 mb-5"
            justify="center"
          >
            <span class="prompt__generatedtitle--color1">TECH-DRIVEN</span>
            <span
              class="ml-3 prompt__choosebutton"
              @click="changeTemplate('tech')"
            >Choose</span>
          </v-row>
          <v-row
            class="prompt__generated mt-5 mb-12"
            justify="center"
          >
            {{ promptTech }}
          </v-row>

          <v-row
            class="mt-5 mb-5"
            justify="center"
          >
            <span class="prompt__generatedtitle--color2">SOLUTION-DRIVEN</span>
            <span
              class="ml-3 prompt__choosebutton"
              @click="changeTemplate('solution')"
            >Choose</span>
          </v-row>
          <v-row
            class="prompt__generated mt-5 mb-12"
            justify="center"
          >
            {{ promptSolution }}
          </v-row>

          <v-row
            class="mt-5 mb-5"
            justify="center"
          >
            <span class="prompt__generatedtitle--color3">PROBLEM-DRIVEN</span>
            <span
              class="ml-3 prompt__choosebutton"
              @click="changeTemplate('problem')"
            >Choose</span>
          </v-row>
          <v-row
            class="prompt__generated mt-5 mb-12"
            justify="center"
          >
            {{ promptProblem }}
          </v-row>

          <v-row
            class="mt-5 mb-5"
            justify="center"
          >
            <span class="prompt__generatedtitle--color4">METRIC-DRIVEN</span>
            <span
              class="ml-3 prompt__choosebutton"
              @click="changeTemplate('metric')"
            >Choose</span>
          </v-row>
          <v-row
            class="prompt__generated mt-5 mb-12"
            justify="center"
          >
            {{ promptMetric }}
          </v-row>
        </v-col>

        <v-row
          justify="center"
          class="prompt__header mt-8"
        >
          Step 3
        </v-row>
        <v-row
          justify="center"
          class="prompt__divider ml-auto mr-auto mt-5 mb-5"
        />

        <v-row
          justify="center"
          no-gutters
          class="prompt__headerdescription mb-12"
        >
          <v-col
            class="text-center"
            cols="9"
          >
            Fine-tune and finalize your project prompt with employer
          </v-col>
        </v-row>

        <v-row
          justify="center"
          no-gutters
        >
          <v-col cols="9">
            <textarea
              v-model="finalPrompt"
              class="prompt__finalize"
            />
          </v-col>
        </v-row>

        <v-row
          class="mt-10 mb-10"
          no-gutters
          justify="center"
        >
          <v-col cols="4">
            <NextNode
              v-slot="{setNext}"
              @CallbackComplete="$emit('nextNode')"
            >
              <v-btn
                id="editcasestudies__button"
                class="mb-10 mt-8"
                text
                solo
                depressed
                outlined
                height="73.5px"
                @click="setNext(submit)"
              >
                NEXT
              </v-btn>
            </NextNode>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "../../../../store";
import { firebase } from "@/firebase/init";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import NextNode from "../../components/NextNode.vue";

@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    NextNode
  }
})
export default class ProjectPrompt extends Vue {
  finalPrompt: string = FbStore.currentTeacherProgramData!.finalPrompt || "";
  keyMetric: string = FbStore.currentTeacherProgramData!.keyMetric || "";
  problemOrOpportunity?: string =
    FbStore.currentTeacherProgramData!.problemOrOpportunity || "";
  productOrService: string =
    FbStore.currentTeacherProgramData!.productOrService || "";
  promptTemplate: "tech" | "solution" | "problem" | "metric" =
    FbStore.currentTeacherProgramData!.promptTemplate || "tech";
  solution: string = FbStore.currentTeacherProgramData!.solution || "";
  changeTemplate(template: "tech" | "solution" | "problem" | "metric") {
    this.promptTemplate = template;
    this.generatePrompt();
    this.$forceUpdate();
  }
  get promptTech() {
    return `Use ${this.productOrService} to conceptualize, design or prototype
${this.solution} that solves ${this.problemOrOpportunity} to reach ${this.keyMetric}`;
  }
  get promptSolution() {
    return `Conceptualize, design or prototype ${this.solution} using ${this.productOrService} that solves ${this.problemOrOpportunity} to reach ${this.keyMetric}`;
  }
  get promptProblem() {
    return `Utilizing ${this.productOrService}, solve or explore
${this.problemOrOpportunity} by conceptualizing, designing or prototyping
${this.solution} that reaches ${this.keyMetric}`;
  }
  get promptMetric() {
    return `Utilizing ${this.productOrService}, reach ${this.keyMetric} by
conceptualizing, designing or prototyping ${this.solution} that addresses
${this.problemOrOpportunity}`;
  }
  generatePrompt() {
    switch (this.promptTemplate) {
      case "tech":
        this.finalPrompt = this.promptTech;
        break;
      case "solution":
        this.finalPrompt = this.promptSolution;
        break;
      case "problem":
        this.finalPrompt = this.promptProblem;
        break;
      case "metric":
        this.finalPrompt = this.promptMetric;
        break;
    }
  }
  submit() {
    this.$emit("saving", true);
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
    this.$emit("saving", false);
    this.$emit("updateSavedDate", firebase.firestore.Timestamp.now());
  }
}
</script>