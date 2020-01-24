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
            ref="player"
            :key="key"
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
            @click="onSubmit"
          >
            NEXT
          </v-btn>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "video.js/dist/video-js.css";
require('videojs-youtube/')
// import { VideoPlayer } from "@/components/VideoPlayer";
import { videoPlayer } from "vue-video-player";
import { FbStore } from "../../../../store";
import {firebase} from "@/firebase/init"
@Component({
  components: {
    videoPlayer
  }
})
export default class Introvideo extends Vue {
  mounted() {
    // this.key++;
    // this.$forceUpdate()
    // console.log(this.$refs.player.player.nativeView)
  }
  key = 0;
  beforeDestroy() {
    
  }
  canBeAcknowldged: boolean = false;
  acknowledged: boolean =  !!FbStore.currentStudentClassroom!.finishedIntrovideo || false;
  onSubmit(){
    FbStore.updateCurrentStudentClassroom({
      finishedIntrovideo:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  playerOptions = {
    responsive: true,
    fluid: true,
    techOrder: ["youtube"],
    language: "en",
    controlBar: {
      progressControl: false
    },
    sources: [
      {
        type: "video/youtube",
        // mp4
        src: FbStore.currentEmployerProgram!.introVideo
        // webm
        // src: "https://cdn.theguardian.tv/webM/2015/07/20/150716YesMen_synd_768k_vp8.webm"
      }
    ]
    // poster: "https://surmon-china.github.io/vue-quill-editor/static/images/surmon-1.jpg",
  };
}
</script>