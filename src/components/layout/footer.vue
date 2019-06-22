<template>
  <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
        <v-layout
          align-start
          justify-center
          column
        >
          <strong class="subheading">Get connected with us on social networks!</strong>
          <p class="caption">
            ©2019 PilotCity Inc LLC, All Right Reserved
          </p>
        </v-layout>

        <v-spacer />

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
    </v-card>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
@Component
export default class footer extends Vue {
    icons: string[] = [
        "fab fa-instagram", 
        "fab fa-facebook", 
        "fab fa-twitter"
    ];
}
</script>

<style>
</style>
