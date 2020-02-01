<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "../../../../store";
@Component
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
  }
  generatePrompt() {
    switch (this.promptTemplate) {
      case "tech":
        this.finalPrompt = `Use ${this.productOrService} to conceptualize, design or prototype
${this.solution} that solves ${this.problemOrOpportunity} to reach ${this.keyMetric}`;
        break;
      case "solution":
        this.finalPrompt = `Conceptualize, design or prototype ${this.solution} using ${this.productOrService} that solves ${this.problemOrOpportunity} to reach ${this.keyMetric}`;
        break;
      case "problem":
        this.finalPrompt = `Utilizing ${this.productOrService}, solve or explore
${this.problemOrOpportunity} by conceptualizing, designing or prototyping
${this.solution} that reaches ${this.keyMetric}`;
        break;
      case "metric":
        this.finalPrompt = `Utilizing ${this.productOrService}, reach ${this.keyMetric} by
conceptualizing, designing or prototyping ${this.solution} that addresses
${this.problemOrOpportunity}`;
        break;
    }
  }
  submit() {
    let {
      solution,
      keyMetric,
      productOrService,
      promptTemplate,
      finalPrompt
    } = this;
    FbStore.updateCurrentTeacherProgramData({
      solution,
      keyMetric,
      productOrService,
      promptTemplate,
      finalPrompt
    });
  }
}
</script>