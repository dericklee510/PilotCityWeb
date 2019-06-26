<template>
  <v-footer class="footer__main"
    dark
    height="auto"
  >
    <v-card
      class="flex footer_card"
      flat
      tile
    >
      <v-card-title class="white black--text footer_card__title">
        <v-layout
          align-start
          justify-center
          column
          class="footer_card__text"
        >
          <strong class="subheading">PilotCity Inc</strong>
          <p class="caption">
            ©2019 PilotCity Inc LLC, All Right Reserved
          </p>
        </v-layout>

        <v-spacer />

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-3 black--text footer_card__icon"
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
export default class FooterMain extends Vue {
    icons: string[] = [
        "fab fa-instagram", 
        "fab fa-facebook", 
        "fab fa-twitter"
    ];
}
</script>

<style lang="scss">
.footer_main {
  &.footer_card {
    &.footer_card__title{
      color: gray;
      &.footer_card__text {
        
      }
      &.footer_card__icon {

      }
    }
  }
}
</style>
