<template>
  <v-app>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
      rel="stylesheet"
    >
    <HeaderMain />
    <v-content>
      <router-view />
    </v-content>
    <FooterMain />
  </v-app>
</template>


<script lang="ts">
import Vue from "vue"
import "@/assets/scss/main.scss"
import HeaderMain from "@/components/layout/header/header.vue"
import Component from "vue-class-component"
import FooterMain from "./components/layout/footer.vue"
@Component({
    components: {
        FooterMain,
        HeaderMain
    }
})
export default class App extends Vue { }
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  height: 100%; /* needed for container min-height */
  font-family: Raleway;
}
</style>
