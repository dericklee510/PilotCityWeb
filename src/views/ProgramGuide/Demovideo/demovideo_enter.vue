<template>
  <v-row justify="center">
    <img
      id="demovideo_enter__icon"
      src="@/assets/demovideo_enter.png"
    >

    <v-col
      id="demovideo_enter__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto demovideo_enter__title"
      >
        ENTER 1-MINUTE PROTOTYPE DEMONSTRATION VIDEO
      </v-row>

      <v-col
        id="demovideo_enter__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto demovideo_enter__description"
      >
        Record and upload a video demonstration your project. This will give your employer a good understanding of how it works.
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mt-12 mb-12"
      >
        <input
          placeholder="https://"
          class="demovideo_enter__videolink"
        >
      </v-row>


      <v-row
        justify="center"
        class="ml-auto mr-auto demovideo_enter__check"
      >
        <v-col cols="1">
          <input
            type="checkbox"
            class="demovideo_enter__checkbox"
          >
        </v-col><v-col cols="11">
          I acknowledge this link is set for the public to view and video length is within reasonable range.
        </v-col>
      </v-row>

      <v-col
        class="mr-auto ml-auto"
        cols="5"
      >
        <button class="demovideo_enter__button">
          SAVE
        </button>
      </v-col>

      <!-- NO RATING YET -->

      <v-row
        justify="center"
        class="mt-8 demovideo_enter__ratinglabel"
      >
        No rating yet
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <i class="far fa-star demovideo_enter__unratedstar" />
        <i class="far fa-star demovideo_enter__unratedstar" />
        <i class="far fa-star demovideo_enter__unratedstar" />
        <i class="far fa-star demovideo_enter__unratedstar" />
        <i class="far fa-star demovideo_enter__unratedstar" />
      </v-row>

      <!-- RATING -->

      <v-row
        justify="center"
        class="mt-8 demovideo_enter__ratinglabel"
      >
        Rating
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <i class="fas fa-star demovideo_enter__ratedstar" />
        <i class="fas fa-star demovideo_enter__ratedstar" />
        <i class="fas fa-star demovideo_enter__ratedstar" />
        <i class="fas fa-star demovideo_enter__ratedstar" />
        <i class="fas fa-star demovideo_enter__ratedstar" />
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class demovideo_enter extends Vue{
    
}
</script>