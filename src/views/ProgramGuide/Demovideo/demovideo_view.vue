<template>
  <v-row justify="center">
    <img
      id="demovideo_view__icon"
      src="@/assets/demovideo_view.png"
    >

    <v-col
      id="demovideo_view__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto demovideo_view__title"
      >
        VIEW 1-MINUTE PROTOTYPE DEMONSTRATION VIDEOS
      </v-row>

      <v-col
        id="demovideo_view__borderline"
        cols="12"
      />


      <v-row
        class="mt-5"
        justify="center"
      >
        <v-col
          class="demovideo_view__label"
          cols="1"
        />
        <v-col
          class="demovideo_view__label"
          cols="6"
        >
          Name
        </v-col>
        <v-col
          class="demovideo_view__label"
          cols="3"
        >
          Rate
        </v-col>
      </v-row>

      <!-- TEAM -->

      <Rating v-model="team" />

     
      <!-- TEAM -->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Rating } from '../components'
import { team_snippet } from '../components/Rating.vue'
Rating
@Component({
  components:{
    Rating
  }
})
export default class demovideo_view extends Vue{
    team:team_snippet[] = [{
      id:'0',
      name:"Data Analysis for the Alameda Library",
      rating:2,
      router_params:"idk"
    },
    {
      id:'0',
      name:"Data Analysis for the Alameda Library",
      rating:3,
      router_params:"idk"
    }]
}
</script>