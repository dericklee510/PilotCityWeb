<template>
  <v-container fluid>
    <v-row
      v-for="(team,index) in syncedSnippet"
      :key="index"
      justify="center"
      class="pt-3 pb-3"
      no-gutters
    >
      <v-row
        no-gutters
        justify="center"
      >
        <slot
          :snippet="team"
          name="link"
        >
          <v-col
            v-if="preview === undefined"
            class="demovideo_view__externallink"
            cols="1"
            md="1"
          >
            <router-link
              v-if="team.router_params"
              :to="team.router_params"
            >
              <v-btn
                dark
                depressed
                x-small
              >
                Link
              </v-btn>
            </router-link>
            <a
              v-else-if="team.href"
              :href="team.href"
              target="_blank"
            >
              <v-btn
                dark
                depressed
                x-small
              >Link</v-btn>
            </a>
          </v-col>
        </slot>

        <v-col
          cols="12"
          md="7"
          sm="5"
        >
          <slot name="header">
            <span class="pitch_view__teamtitle">{{ team.name }}</span>
          </slot>
          <br>
          <slot
            :item_preview="team.item_preview"
            name="body"
          >
            <span
              v-if="preview !== undefined"
              class="pitch_view__teampitch"
            >{{ team.item_preview }}</span>
          </slot>
        </v-col>

        <!-- SPACER -->

        <!-- <v-col cols="1"></v-col> -->

        <!-- RATING -->

        <v-col
          cols="12"
          md="2"
          class="pc-rating"
        >
          <v-rating
            v-model="team.rating"
            color="yellow darken-3"
            dense
            size="20px"
            @input="ratingChange($event,team.projectId)"
          />
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import "reflect-metadata";
import Component from "vue-class-component";
import { Prop, PropSync, Watch } from "vue-property-decorator";
import { RawLocation } from "vue-router";
import { team_snippet } from ".";

@Component
export default class Rating extends Vue {
  @Prop()
  value!: team_snippet[];

  @Prop()
  preview?: string;
  ratingChange(newRating: number, projectId: string) {
    this.$emit("ratingChange", { newRating, projectId });
  }
  @Prop()
  required!: (keyof team_snippet)[];

  get syncedSnippet(): team_snippet[] {
    return this.value.filter(snip =>
      (this.required
        ? this.required.map(key => snip[key]).every(val => val)
        : true)
    );
  }
}
</script>