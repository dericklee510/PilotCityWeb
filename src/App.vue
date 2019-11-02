<template>
  <div>
    <link
      href="https://fonts.googleapis.com/css?family=Raleway&display=swap"
      rel="stylesheet"
    >
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>


<script lang="ts">
import "@/assets/SCSS/main.scss"
import Vue from "vue"
import Component from "vue-class-component"

const DEFAULT_LAYOUT = `default`
@Component
export default class App extends Vue {
    get layout(){
        return (this.$route.meta.layout?this.$route.meta.layout:DEFAULT_LAYOUT) + `-layout`
    }
}
</script>
