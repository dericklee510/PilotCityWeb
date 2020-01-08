<template>
  <v-row justify="center">
    <img
      id="businessmodelcanvas_view2__icon"
      src="@/assets/businessmodelcanvas_view2.png"
    >

    <v-col
      id="businessmodelcanvas_view2__contain"
      cols="7"
    >
      <v-row>
        <i
          id="businessmodelcanvas_view2__backbuttonicon"
          class="fas fa-chevron-left"
        >
          <button class="businessmodelcanvas_view2__backbutton">Back</button>
        </i>
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_view2__title"
      >
        BUSINESS MODEL CANVAS
      </v-row>

      <v-col
        id="businessmodelcanvas_view2__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_view2__description"
      >
        Every idea has a model on the business side. Create and refine gameplan by developing your business model canvas.
      </v-row>

      <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 businessmodelcanvas_view2__description__label">Elevator Pitch</v-row> -->

      <business-model-canvas-comp
        v-model="canvas"
        :stars="stars"
        readonly
        @starsChanged="onStarsChanged"
      />

      <!-- <v-col class="mr-auto ml-auto" cols="5"><button class="businessmodelcanvas_view2__button mb-10">SAVE</button></v-col> -->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BusinessModelCanvas as BusinessModelCanvasComp } from "./components";
import { BusinessModelCanvas } from "../../../store/Database/types/utilities";
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