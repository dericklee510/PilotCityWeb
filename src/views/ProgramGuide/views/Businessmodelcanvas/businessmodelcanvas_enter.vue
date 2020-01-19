<template>
  <v-row justify="center">
    <img
      id="businessmodelcanvas_enter__icon"
      src="@/assets/businessmodelcanvas_enter.png"
    >

    <v-col
      id="businessmodelcanvas_enter__contain"
      cols="10"
    >
      <!-- <v-row><i clas s="fas fa-chevron-left" id="businessmodelcanvas_enter__backbuttonicon"><button class="businessmodelcanvas_enter__backbutton">Back</button></i></v-row> -->

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_enter__title"
      >
        BUSINESS MODEL CANVAS
      </v-row>

      <v-col
        id="businessmodelcanvas_enter__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_enter__description"
      >
        Every idea has a model on the business side. Create and refine gameplan by developing your business model canvas.
      </v-row>
      <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 businessmodelcanvas_enter__description__label">Elevator Pitch</v-row> -->
      <business-model-canvas-comp
        v-model="canvas"
      /> 
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {BusinessModelCanvas as BusinessModelCanvasComp} from "./components"
import { BusinessModelCanvas } from '@/store/Database/types/utilities'
@Component({
  components:{
    ValidationProvider,
    ValidationObserver,
    BusinessModelCanvasComp
  }
})
export default class businessmodelcanvas_enter extends Vue{
  canvas: BusinessModelCanvas = {
    problem: "My Pitch is this",
    solution: "My Pitch is this",
    innovation: "My Pitch is this",
    customer: "My Pitch is this"
  };
}
</script>