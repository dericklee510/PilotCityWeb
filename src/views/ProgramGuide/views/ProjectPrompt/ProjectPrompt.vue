<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from "../../../../store";
@Component
export default class ProjectPrompt extends Vue {
  problemOrOpportunity?: string = FbStore.currentTeacherProgramData!.problemOrOpportunity || "";
  solution: string = FbStore.currentTeacherProgramData!.solution || "";
  keyMetric: string = FbStore.currentTeacherProgramData!.keyMetric || "";
  productOrService: string = FbStore.currentTeacherProgramData!.productOrService || "";
  promptTemplate?: "tech" | "solution" | "product" | "metric" = FbStore.currentTeacherProgramData!.promptTemplate
  finalPrompt: string = FbStore.currentTeacherProgramData!.finalPrompt || "";
  templateTypes = {
    tech: "TECH-DRIVEN",
    solution: "SOLUTION-DRIVEN",
    product: "PRODUCT-DRIVEN",
    metric: "METRIC-DRIVEN"
  };
  changeTemplate(template: "tech" | "solution" | "product" | "metric") {
    this.promptTemplate = template;
  }
   GeneratePrompt() {
       let generatedPrompt
    if (this.promptTemplate) {

      // create prompt here using guidelines
    }
    //generatePrompt
    this.finalPrompt = generatedPrompt
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