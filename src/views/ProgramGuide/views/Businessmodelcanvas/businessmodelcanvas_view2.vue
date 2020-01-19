<template>
  <v-row justify="center">
    <business-model-canvas-comp
      v-model="canvas"
      :stars="stars"
      readonly
      @starsChanged="onStarsChanged"
    />
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BusinessModelCanvas as BusinessModelCanvasComp } from "./components";
import { BusinessModelCanvas } from "@/store/Database/types/utilities";
@Component({
  components: {
    BusinessModelCanvasComp
  }
})
export default class businessmodelcanvas_view2 extends Vue {
  canvas: BusinessModelCanvas = {
    problem: "My Pitch is this",
    solution: "My Pitch is this",
    innovation: "My Pitch is this",
    customer: "My Pitch is this"
  };
  stars: {
    problem: number;
    solution: number;
    innovation: number;
    customer: number;
  } = {
    problem: 0,
    solution: 3,
    innovation: 0,
    customer: 0
  };
  onStarsChanged(stars:any){
    this.stars=stars
  }
}
</script>