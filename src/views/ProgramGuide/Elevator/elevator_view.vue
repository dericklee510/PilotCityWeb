<template>
  <v-row justify="center">
    <img
      id="elevator_view__icon"
      src="@/assets/elevator_view.png"
    >

    <v-col
      id="elevator_view__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto elevator_view__title"
      >
        VIEW ONE SENTENCE PROJECT PITCHES
      </v-row>

      <v-col
        id="elevator_view__borderline"
        cols="12"
      />


      <v-row
        class="mt-5"
        justify="center"
      >
        <v-col
          class="elevator_view__label"
          cols="1"
        />
        <v-col
          class="elevator_view__label"
          cols="7"
        >
          Name
        </v-col>
        <v-col
          class="elevator_view__label"
          cols="2"
        >
          Rate
        </v-col>
      </v-row>

      <!-- TEAM -->

      <v-row justify="center">
        <v-col
          class=""
          cols="1"
        >
          <button class="elevator_view__viewbutton">
            VIEW
          </button>
        </v-col>

        <v-col
          class="elevator_view__teamtitle"
          cols="7"
        >
          Autonomous Campus Shuttle
        </v-col>

        <v-col cols="2">
          <i class="fas fa-star elevator_view__rated" />
          <i class="fas fa-star elevator_view__rated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
        </v-col>
      </v-row>

      <!-- TEAM -->

      <v-row justify="center">
        <v-col
          class=""
          cols="1"
        >
          <button class="elevator_view__viewbutton">
            VIEW
          </button>
        </v-col>

        <v-col
          class="elevator_view__teamtitle"
          cols="7"
        >
          Autonomous Home the Homeless
        </v-col>

        <v-col cols="2">
          <i class="fas fa-star elevator_view__rated" />
          <i class="fas fa-star elevator_view__rated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
        </v-col>
      </v-row>


      <!-- TEAM -->

      <v-row justify="center">
        <v-col
          class=""
          cols="1"
        >
          <button class="elevator_view__viewbutton">
            VIEW
          </button>
        </v-col>

        <v-col
          class="elevator_view__teamtitle"
          cols="7"
        >
          Bart Fare Evasion Detection
        </v-col>

        <v-col cols="2">
          <i class="fas fa-star elevator_view__rated" />
          <i class="fas fa-star elevator_view__rated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
        </v-col>
      </v-row>

      <!-- TEAM -->

      <v-row justify="center">
        <v-col
          class=""
          cols="1"
        >
          <button class="elevator_view__viewbutton">
            VIEW
          </button>
        </v-col>

        <v-col
          class="elevator_view__teamtitle"
          cols="7"
        >
          Clean Water Assessment for Cities
        </v-col>

        <v-col cols="2">
          <i class="fas fa-star elevator_view__rated" />
          <i class="fas fa-star elevator_view__rated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
        </v-col>
      </v-row>


      <!-- TEAM -->

      <v-row justify="center">
        <v-col
          class=""
          cols="1"
        >
          <button class="elevator_view__viewbutton">
            VIEW
          </button>
        </v-col>

        <v-col
          class="elevator_view__teamtitle"
          cols="7"
        >
          Data Analysis for the Alameda Library
        </v-col>

        <v-col cols="2">
          <i class="fas fa-star elevator_view__rated" />
          <i class="fas fa-star elevator_view__rated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
          <i class="far fa-star elevator_view__unrated" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class elevator_view extends Vue{
    
}
</script>