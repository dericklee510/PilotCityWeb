<template>
  <v-container
    class="citizen-id"
    fluid
  >
    <v-container
      fluid 
      style="margin-top: 80px;"
    >
      <v-card class="pc-container">
        <v-row
          class=" citizen-id__header pc-background"
        >
          <v-col cols="12">
            <img
              id="citizen-id__icon"
              src="@/assets/citizen-id.png"
              class="pc-vh-center pc-icon"
            >
          </v-col>


          <v-col
            cols="12"
            class="citizen-id__title"
          >
            <h2 class="text-center">
              CREATE YOUR CITIZEN ID
            </h2>
          </v-col>
        </v-row>



        <router-view />
      </v-card>
    </v-container>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class CitizenID extends Vue {
}
</script>

