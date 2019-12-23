<template>
  <v-card class="briefcard__container">
    <!-- <img src="" alt="" id="programbrief__cover"> -->
    <v-row>
      <v-col cols="1">
        <div id="briefcard__cover"></div>
      </v-col>
      <v-col>
          <v-col cols="12">
              <h1 class="briefcard__header">REquest for Pilot (RFP)</h1>
              <span><input type="checkbox">I acknowledgeI have fully read and understand the included document</span>
              <button class="text-uppercase">confirm</button>
          </v-col>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"

@Component
export default class BriefCard extends Vue{
    
}
</script>