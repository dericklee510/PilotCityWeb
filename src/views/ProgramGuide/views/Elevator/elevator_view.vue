<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <img
        id="elevator_view2__icon"
        src="@/assets/elevator_view.png"
      >
      <v-col
        cols="8"
        class="programguide__container"
      >
        <v-row v-show="page!='view'">
          <i
            id="launcher__backbuttonicon"
            class="fas fa-chevron-left"
          >
            <button
              style="textDecoration: none; cursor: pointer"
              class="launcher__backbutton"
              @click="changePage"
            >Back</button>
          </i>
        </v-row>
        <v-col
          cols="12"
          class="programguide__title mb-7"
        >
          VIEW 60-SECOND ELEVATOR PITCH
        </v-col>
        <v-col justify="center">
          <router-view
            :name="page"
            :entries="entries"
            :pitch="snippet"
            @ratingChange="onRatingChange"
            @changePage="changePage($event)"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue";
import Component, { mixins } from "vue-class-component";
import { Rating, team_snippet } from "../../components";
import { FbStore } from "../../../../store";
import {getlatestProjectSnippetsMixin} from '../../utilities'
import {firebase} from "@/firebase/init"
import { Classroom, Project } from "../../../../store/Database/types/types";
const snippetMixin = getlatestProjectSnippetsMixin({
  item_preview:"elevatorPitch",
  rating:"elevatorPitchRating"
})

@Component({
  components: {
    Rating
  },
})
export default class elevator_view extends mixins(snippetMixin) {
  public page?: string = "view";
  snippet:team_snippet|null = null
  changePage(snippet?:team_snippet) {
    if(snippet)
      this.snippet = snippet
    this.page == "view" ? (this.page = "detail") : (this.page = "view");
  }
  onRatingChange({newRating,projectId}:{newRating:number,projectId:string}){
   FbStore.firestore.collection("Project").doc(projectId).update<Project>({
      [`elevatorPitchRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]:newRating,
      lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
}
</script>