<template>
  <v-app>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
    <FooterMain/>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import FooterMain from "./components/layout/footer.vue";
@Component({
  components: {
    FooterMain
  }
})
export default class App extends Vue {}
</script>

<style>
</style>
