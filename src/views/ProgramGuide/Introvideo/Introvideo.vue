<template>
  <v-row justify="center">
    <img
      id="introvideo__icon"
      src="@/assets/watchintrovideo.png"
    >

    <v-col
      id="introvideo__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto introvideo__watchintro"
      >
        WATCH INTRODUCTION VIDEO
      </v-row>

      <v-col
        id="introvideo__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto introvideo__description"
      >
        Watch the following introduction video by your employer to get warmed up on what we’re doing.
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto introvideo__video"
      />


      <v-row
        justify="center"
        class="ml-auto mr-auto introvideo__check"
      >
        <input
          v-model="acknowledged"
          type="checkbox"
          class="introvideo__checkbox"
        > I have finished watching the video
      </v-row>

      <v-col
        class="mr-auto ml-auto"
        cols="5"
      >
        <v-btn
          class="introvideo__button"
          :disabled="!acknowledged"
        >
          NEXT
        </v-btn>
      </v-col>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Introvideo extends Vue{
    acknowledged:false = false
}
</script>