<template>
  <v-row justify="center">
    <img
      id="pitch_view__icon"
      src="@/assets/pitch_view.png"
    >

    <v-col
      id="pitch_view__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto pitch_view__title"
      >
        VIEW ONE SENTENCE PROJECT PITCHES
      </v-row>

      <v-col
        id="pitch_view__borderline"
        cols="12"
      />


      <v-row
        class="mt-5"
        justify="center"
      >
        <!-- <v-col class="pitch_view__label" cols="1"></v-col> -->
        <v-col
          class="pitch_view__label"
          cols="8"
        >
          Name
        </v-col>
        <v-col
          class="pitch_view__label"
          cols="2"
        >
          Rate
        </v-col>
      </v-row>

      <!-- TEAM -->

      <v-row
        v-for="(team,index) in teams"
        :key="index"
        justify="center"
      >
        <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
        <v-col cols="8">
          <v-row class="pitch_view__teamtitle ml-auto">
            {{ team.name }}
          </v-row>
          <v-row class="pitch_view__teampitch ml-auto">
            {{ team.pitch }}
          </v-row>
        </v-col>
        <v-col cols="2">
          <v-rating v-model="team.rating" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class pitch_view extends Vue{
    teams:{
      name:string
      pitch:string
      rating:number
    }[] = [
      {
        name:"Data Analysis for the Alameda Library",
        pitch:" An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
        rating:0
      },
      {
        name:"Data Analysis for the Alameda Library",
        pitch:" An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
        rating:0
      }
    ]
}
</script>