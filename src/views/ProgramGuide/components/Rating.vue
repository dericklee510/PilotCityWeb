<template>
  <v-container>
    <v-row
      v-for="(team,index) in syncedSnippet"
      :key="index"
      justify="center"
    >
      <v-col
        v-if="preview === undefined"
        class="demovideo_view__externallink"
        cols="1"
      >
        <slot name="link">
          <router-link
            v-if="team.router_params"
            :to="team.router_params"
          >
            <i class="fas fa-external-link-alt" />
          </router-link>
        </slot>
      </v-col>
      <!-- <v-col class="pitch_view__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
      <v-col cols="8">
        <slot name="header">
          <v-row class="pitch_view__teamtitle ml-auto">
            {{ team.name }}
          </v-row>
        </slot>
        <slot name="body">
          <v-row
            
            v-if="preview !== undefined"
            class="pitch_view__teampitch ml-auto"
          >
            {{ team.item_preview }}
          </v-row>
        </slot>
      </v-col>
      <v-col cols="2">
        <v-rating v-model="team.rating" />
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
    id:string
    name:string
    item_preview?:string
    router_params?:RawLocation
    rating:number
}
@Component
export default class Rating extends Vue{
     @Prop()
    value!: team_snippet[]

    @Prop()
    preview?:string

   

    @PropSync("value")
    syncedSnippet!:team_snippet[]

    
}
</script>