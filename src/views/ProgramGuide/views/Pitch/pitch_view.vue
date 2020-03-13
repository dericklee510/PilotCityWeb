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
        class="pb-9"
      > 
        <v-row
          justify="center"
          class="mr-auto ml-auto pitch_view__title"
        >
          VIEW ONE SENTENCE PROJECT PITCHES

          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            v-if="citizenType == 'teacher'"
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/formatting-1-sentence-pitch"
                target="_blank"
                icon
                v-on="on"
              >
                <v-icon
                  class="pb-3"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>Wondering how your students format their one sentence project pitch? Click here.</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-row>

        <v-col
          id="pitch_view__borderline"
          cols="12"
        />
        <!-- <v-row justify="center" no-gutters>
    <v-col cols="10" class="pb-9"> -->
        <v-row
          class="programguide__labels"
          justify="center"
          no-gutters
        >
          <!-- <v-col cols="1" md="1" class="d-none d-lg-inline-block" /> -->
          <v-col
            cols="12"
            md="7"
            class="d-none d-lg-inline-block"
          >
            Name
          </v-col>
          <v-col
            cols="12"
            md="2"
            class="d-none d-lg-inline-block"
          >
            Rating
          </v-col>
        </v-row>




        <!-- TEAM -->

        <Rating
          v-model="entries"
          preview
          :required="['item_preview']"
          @ratingChange="onRatingChange"
        />

        
        <Oops v-if="!entries.length" />

        <!-- </v-col>
</v-row> -->
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
  components: {
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

  get citizenType() {
    return FbStore.userCitizenType;
  }

}
</script>