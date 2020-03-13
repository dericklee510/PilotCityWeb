<template>
  <v-row justify="center">
    <img
      id="prompt_generated____icon"
      src="@/assets/pitch_view.png"
    >

    <v-col
      id="prompt_generated____contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto prompt_generated____title"
      >
        RFP PROMPT GENERATOR
      </v-row>

      <v-col
        id="prompt_generated____borderline"
        cols="12"
      />

      <v-row
        class="mt-5"
        justify="center"
      >
        <!-- <v-col class="prompt_generated____label" cols="1"></v-col> -->
        <v-col
          class="prompt_generated____label"
          cols="8"
        >
          Name
        </v-col>
        <v-col
          class="prompt_generated____label"
          cols="2"
        >
          Rate
        </v-col>
      </v-row>

      <!-- TEAM -->

      <Rating
        v-model="teams"
        preview
      />
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Rating } from "../../components";

@Component({
  components: {
    Rating
  }
})
export default class prompt_generated__ extends Vue {
  teams= [
    {
      id: "0",
      name: "Data Analysis for the Alameda Library",
      item_preview:
        " An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
      rating: 0
    },
    {
      id: "1",
      name: "Data Analysis for the Alameda Library",
      item_preview:
        " An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
      rating: 0
    }
  ];
}
</script>