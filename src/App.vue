<template>
  <v-app id="pc-app">
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
import "@/assets/SCSS/main.scss"
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
