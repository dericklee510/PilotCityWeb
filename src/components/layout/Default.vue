<template>
  <v-app id="pc-app">
    <PCHeader />
    <v-content>
      <router-view />
    </v-content>
    <!-- <footer /> -->
  </v-app>
</template>


<script lang="ts">
import '@/assets/SCSS/main.scss'
import Vue from 'vue'
import Component from 'vue-class-component'
import DefaultHeader from '@/components/layout/header/Default.vue'
import DefaultFooter from '@/components/layout/footer/Default.vue'
@Component({
    components: {
        PCFooter: DefaultFooter,
        PCHeader: DefaultHeader
    }
})
export default class Default extends Vue { }
</script>
