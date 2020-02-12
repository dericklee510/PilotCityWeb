<template>
  <v-container fluid>
    <v-row
      v-for="(team,index) in syncedSnippet"
      :key="index"
      justify="center"
      :align="preview===undefined?'center':'start'"
      class="pt-3 pb-3"
      no-gutters
    >
      <slot
        :snippet="team"
        name="link"
      >
        <v-col
          v-if="preview === undefined"
          class="demovideo_view__externallink"
          cols="1"
        >
          <router-link
            v-if="team.router_params"
            :to="team.router_params"
          >
            <i class="fas fa-external-link-alt" />
          </router-link>
          <a
            v-else-if="team.href"
            :href="team.href"
            target="_blank"
          >
            <i class="fas fa-external-link-alt" />
          </a>
        </v-col>
      </slot>
      <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
      <v-col cols="6">
        <slot name="header">
          <span class="pitch_view__teamtitle">
            {{ team.name }}
          </span>
        </slot>
        <slot
          :item_preview="team.item_preview"
          name="body"
        >
          <span
            
            v-if="preview !== undefined"
            class="pitch_view__teampitch"
          >
            {{ team.item_preview }}
          </span>
        </slot>
      </v-col>
      <v-col
        cols="2"
        class="pc-rating"
      >
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
import Vue from 'vue'
import "reflect-metadata"
import Component from 'vue-class-component'
import { Prop, PropSync, Watch } from 'vue-property-decorator'
import { RawLocation } from 'vue-router'
export interface team_snippet {
    projectId:string
    name:string
    item_preview?:string
    router_params?:RawLocation
    href?:string
    rating:number
}
@Component
export default class Rating extends Vue{
     @Prop()
    value!: team_snippet[]

    @Prop()
    preview?:string
    ratingChange(newRating:number,projectId:string){
      this.$emit("ratingChange",{newRating,projectId})
    }
   

    @PropSync("value")
    syncedSnippet!:team_snippet[]

    
}
</script>