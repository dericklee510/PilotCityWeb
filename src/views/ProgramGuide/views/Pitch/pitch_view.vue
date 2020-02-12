<template>
  <v-container>
    <v-row justify="center">
      <img
        id="pitch_view__icon"
        src="@/assets/pitch_view.png"
      >
    
      <v-col
        id="pitch_view__contain"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto pitch_view__title"
        >
          VIEW ONE SENTENCE PROJECT PITCHES
        </v-row>
    
        <v-col
          id="pitch_view__borderline"
          cols="12"
        />
    
    
        <v-container>
          <v-row
            class="mt-5"
            justify="center"
            no-gutters
          >
            <v-col
              class="pitch_view__label"
              cols="6"
            >
              Name
            </v-col>
            <v-col
              class="pitch_view__label"
              cols="2"
            >
              Rate
            </v-col>
          </v-row>
        </v-container>
    
        <!-- TEAM -->
    
        <Rating
          v-model="entries"
          preview
          @ratingChange="onRatingChange"
        />
        <Oops v-if="!entries.length" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Component, {mixins} from 'vue-class-component'
import { Rating, team_snippet } from '../../components'
import { FbStore } from '../../../../store';
import {  Project } from '../../../../store/Database/types/types';
import {firebase} from "@/firebase/init"
import { Oops } from "@/views/ProgramGuide/components"
import { getlatestProjectSnippetsMixin } from '../../utilities';

const snippetMixin = getlatestProjectSnippetsMixin({
  item_preview:"sentencePitch",
  rating:"sentencePitchRating"
})

@Component({
  components:{
    Rating, 
    Oops
  }
})
export default class pitch_view extends mixins(snippetMixin){
  onRatingChange({newRating,projectId}:{newRating:number,projectId:string}){
   FbStore.firestore.collection("Project").doc(projectId).update<Project>({
      [`sentencePitchRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]:newRating,
      lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
}
</script>