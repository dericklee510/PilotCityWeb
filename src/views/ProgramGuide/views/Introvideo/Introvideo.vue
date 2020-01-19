<template>
  <v-container>
    <v-row justify="center">
      <img
        id="introvideo__icon"
        src="@/assets/watchintrovideo.png"
      >
    
      <v-col
        id="introvideo__contain"
        cols="10"
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
        >
          <video-player
            :options="playerOptions"
            @ended="canBeAcknowldged = true"
          />
        </v-row>
        <v-row
          justify="center"
          class="ml-auto mr-auto introvideo__check"
        >
          <input
            v-model="acknowledged"
            :disabled="!canBeAcknowldged"
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
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import 'video.js/dist/video-js.css'

import { videoPlayer } from 'vue-video-player'

@Component({
  components: {
    videoPlayer
  }
})
export default class Introvideo extends Vue {
  canBeAcknowldged:boolean = false
  acknowledged: boolean = false
  playerOptions = {
    responsive:true,
    language: 'en',
    controlBar:{
      progressControl:false
    },
    sources: [{
      type: "video/mp4",
      // mp4
      src: "http://vjs.zencdn.net/v/oceans.mp4",
      // webm
      // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
    }],
    poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
  }
}
</script>