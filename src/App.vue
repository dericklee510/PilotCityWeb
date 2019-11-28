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
import { AuthStore } from '@/store'

const DEFAULT_LAYOUT = `default`
const NORMAL_LAYOUT = `new`
@Component
export default class App extends Vue {
    get layout(){
        if(!AuthStore.user)
            return (this.$route.meta.layout?this.$route.meta.layout:NORMAL_LAYOUT) + `-layout`
        else
            return (this.$route.meta.layout?this.$route.meta.layout:DEFAULT_LAYOUT) + `-layout`
    }
}
</script>
