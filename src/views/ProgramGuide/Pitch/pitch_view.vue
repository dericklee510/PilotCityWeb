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

      <Rating
        v-model="teams"
      />
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Rating } from '../components'
import { team_snippet } from '../components/Rating.vue'

@Component({
  components:{
    Rating
  }
})
export default class pitch_view extends Vue{
    teams:team_snippet[] = [
      {
        id:"0",
        name:"Data Analysis for the Alameda Library",
        item_preview:" An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
        rating:0
      },
      {
        id:"1",
        name:"Data Analysis for the Alameda Library",
        item_preview:" An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
        rating:0
      }
    ]
}
</script>