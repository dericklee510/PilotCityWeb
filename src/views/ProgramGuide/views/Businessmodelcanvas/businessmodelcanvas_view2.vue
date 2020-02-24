<template>
  <v-row justify="center">
    <business-model-canvas-comp
      :value="syncedCanvas"
      :stars="stars"
      :readonly="true"
      @starsChanged="onStarsChanged"
    />
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BusinessModelCanvas as BusinessModelCanvasComp } from "./components";
import { BusinessModelCanvas } from "@/store/Database/types/utilities";
import { Prop } from 'vue-property-decorator';
import {TeamInfo} from './components'
import { FbStore } from '../../../../store';
import { Project } from '../../../../store/Database/types/types';
import {firebase} from "@/firebase/init"
@Component({
  components: {
    BusinessModelCanvasComp
  }
})
export default class businessmodelcanvas_view2 extends Vue {
  @Prop()
  canvas!: TeamInfo
  
  
  get syncCanvas():TeamInfo{
    return this.canvas
  }
  get syncedCanvas():BusinessModelCanvas{
    return {
      problem:this.canvas.problem || "",
      solution:this.canvas.solution || "",
      innovation:this.canvas.innovation || "",
      customer:this.canvas.customer || ""
    }
  }
  get stars(){
    if(FbStore.userCitizenType === "employer")
      return {
      problem:this.canvas.problemRatingE || 0,
      solution:this.canvas.solutionRatingE || 0,
      innovation:this.canvas.innovationRatingE || 0,
      customer:this.canvas.customerRatingE || 0
    }
    else
      return {
        problem:this.canvas.problemRatingT || 0,
      solution:this.canvas.solutionRatingT || 0,
      innovation:this.canvas.innovationRatingT || 0,
      customer:this.canvas.customerRatingT || 0
    }
  }
  async onStarsChanged({newRating,canvasField}:{ newRating:number,
    canvasField: "problem" | "solution" | "innovation" | "customer"}){
await FbStore.firestore.collection("Project").doc(this.canvas.projectId).update<Project>({
      [`${canvasField}Rating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]:newRating,
      lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
}
</script>