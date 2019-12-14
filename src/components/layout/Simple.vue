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
import DefaultHeader from '@/components/layout/header/Simple.vue'
import DefaultFooter from '@/components/layout/footer/Simple.vue'
@Component({
    components: {
        PCfooter: DefaultFooter,
        PCHeader: DefaultHeader
    }
})
export default class Simple extends Vue { }
</script>
