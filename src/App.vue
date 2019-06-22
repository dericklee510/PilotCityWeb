<template>
  <v-app>
    <v-content>
      <router-view />
    </v-content>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"
import Footer from "./components/layout/footer.vue"
@Component({
    components: {
        Footer
    }
})
export default class App extends Vue {}
</script>

<style>
</style>
