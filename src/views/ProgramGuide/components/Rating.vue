<template>
  <v-container fluid>

    <v-row
      v-if="team.item_preview"
      v-for="(team,index) in syncedSnippet"
      :key="index"
      justify="center"

      class="pt-3 pb-3"
      no-gutters
    >


      <slot name="link">
        <v-col v-if="preview === undefined" class cols="1" md="1" >
          <router-link v-if="team.router_params" :to="team.router_params">
            <v-btn dark depressed x-small>Link</v-btn>
          </router-link>
          <a v-else-if="team.href" :href="team.href" target="_blank">
            <v-btn dark depressed x-small>Link</v-btn>
          </a>
        </v-col>
      </slot>




      <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->

      <!-- TEAM NAME -->

      <v-col cols="12" md="7" sm="5">
        <slot name="header">
          <span class="pitch_view__teamtitle">{{ team.name }}</span>
        </slot>

        <br />

        <slot name="body">
          <span v-if="preview !== undefined" class="pitch_view__teampitch">{{ team.item_preview }}</span>
        </slot>
      </v-col>

      <!-- SPACER -->

      <!-- <v-col cols="1"></v-col> -->

      <!-- RATING -->

      <v-col cols="12" md="2" class="pc-rating">
        <v-rating
          v-model="team.rating"
          dense
          size="20px"
          @input="ratingChange($event,team.projectId)"
        />
      </v-col>



    </v-row>




  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import "reflect-metadata";
import Component from "vue-class-component";
import { Prop, PropSync, Watch } from "vue-property-decorator";
import { RawLocation } from "vue-router";
export interface team_snippet {
  projectId: string;
  name: string;
  item_preview?: string;
  router_params?: RawLocation;
  href?: string;
  rating: number;
}
@Component
export default class Rating extends Vue {
  @Prop()
  value!: team_snippet[];

  @Prop()
  preview?: string;
  ratingChange(newRating: number, projectId: string) {
    this.$emit("ratingChange", { newRating, projectId });
  }

  @PropSync("value")
  syncedSnippet!: team_snippet[];
}
</script>