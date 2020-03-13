<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Vuetify</span>
        <span class="font-weight-light">MATERIAL DESIGN</span>
      </v-toolbar-title>
      <v-spacer />
      <v-btn
        text
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue"
import "./components/HelloWorld"
import HelloWorld from  "./components/HelloWorld.vue"
import {Component} from "vue-property-decorator"
@Component ({
    components:{
        HelloWorld
    }
})
export default class App extends Vue{
    data () {
        return {
            //
        }
    }
}
</script>
