<template>
  <v-row justify="center">
    <img
      id="logtime__icon"
      class="logtime__image"
      src="@/assets/log.png"
    >

    <v-col
      id="logtime__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto logtime__title"
      >
        PRACTICE LOG
      </v-row>

      <v-col
        cols="12"
        class="logtime__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto logtime__description"
      >
        As you practice, use and apply the employer's product or service, log how many minutes you use it each time.
      </v-row>



      <v-row
        justify="center"
        class="mr-auto ml-auto mt-10 mb-5"
      >
        <input
          class="logtime__input"
          placeholder="0m"
        >
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mt-5 mb-5"
      >
        <button class="logtime__button">
          LOG TIME
        </button>
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mt-10 logtime__label"
      >
        LOGGED TIME
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mt-2 mb-7 logtime__calculated"
      >
        1h 30m
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class logtime extends Vue{
    
}
</script>