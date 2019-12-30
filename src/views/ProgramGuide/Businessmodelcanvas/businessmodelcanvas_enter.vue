<template>
  <v-row justify="center">
    <img
      id="businessmodelcanvas_enter__icon"
      src="@/assets/businessmodelcanvas_enter.png"
    >

    <v-col
      id="businessmodelcanvas_enter__contain"
      cols="7"
    >
      <!-- <v-row><i class="fas fa-chevron-left" id="businessmodelcanvas_enter__backbuttonicon"><button class="businessmodelcanvas_enter__backbutton">Back</button></i></v-row> -->

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


      <!-- COMPONENT -->
      <v-row
        justify="center"
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
      >
        <v-col
          cols="8"
          class=""
        >
          Problem
        </v-col>
 
        <v-col cols="4">     
          <v-row class="">
            <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
              Rating
            </div>
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="far fa-star businessmodelcanvas_enter__unratedstar" />
          </v-row>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mb-12"
      >
        <input
          placeholder="My pitch is..."
          class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
        >
      </v-row>


      <!-- COMPONENT -->
      <v-row
        justify="center"
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
      >
        <v-col
          cols="8"
          class=""
        >
          Solution
        </v-col>
 
        <v-col cols="4">     
          <v-row class="">
            <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
              Rating
            </div>
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="far fa-star businessmodelcanvas_enter__unratedstar" />
          </v-row>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mb-12"
      >
        <input
          placeholder="My pitch is..."
          class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
        >
      </v-row>


      <!-- COMPONENT -->
      <v-row
        justify="center"
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
      >
        <v-col
          cols="8"
          class=""
        >
          Innovation
        </v-col>
 
        <v-col cols="4">     
          <v-row class="">
            <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
              Rating
            </div>
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="far fa-star businessmodelcanvas_enter__unratedstar" />
          </v-row>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mb-12"
      >
        <input
          placeholder="My pitch is..."
          class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
        >
      </v-row>

      <!-- COMPONENT -->
      <v-row
        justify="center"
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
      >
        <v-col
          cols="8"
          class=""
        >
          Cost
        </v-col>
 
        <v-col cols="4">     
          <v-row class="">
            <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
              Rating
            </div>
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="fas fa-star businessmodelcanvas_enter__ratedstar" />
            <i class="far fa-star businessmodelcanvas_enter__unratedstar" />
          </v-row>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mb-12"
      >
        <input
          placeholder="My pitch is..."
          class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
        >
      </v-row>



      <v-col
        class="mr-auto ml-auto"
        cols="5"
      >
        <button class="businessmodelcanvas_enter__button mb-10">
          SAVE
        </button>
      </v-col>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class businessmodelcanvas_enter extends Vue{
    
}
</script>