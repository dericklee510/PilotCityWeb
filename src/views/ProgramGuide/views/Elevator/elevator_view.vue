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
import Component from "vue-class-component";
import { Rating } from "../../components";
import { team_snippet } from "../../components/Rating.vue";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore/";
import { combineLatest, from } from "rxjs";
import { map, switchMap, tap } from "rxjs/operators";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { flatten, get, Many } from "lodash";
@Component<elevator_view>({
  components: {
    Rating
  },
  subscriptions(){
    return {
      latestProjectData:combineLatest(
      FbStore.currentTeacherProgramData!.classroomIds.map(classroomId =>
        doc(FbStore.firestore.collection("Classroom").doc(classroomId))
      )
    ).pipe(
      map(classroomDocArr =>
        flatten(
          classroomDocArr.map(classroomDoc =>
            classroomDoc
              .data<Classroom>()
              .projectIds.map(projectId =>
                doc(FbStore.firestore.collection("Project").doc(projectId))
              )
          )
        )
      ),
      switchMap(projectDocs => combineLatest<firebase.firestore.DocumentSnapshot[]>(...projectDocs)),
      map(projectdocs => projectdocs.map(projectdoc => projectdoc.data<Project>())),
    )
    }
  }
})
export default class elevator_view extends Vue {
  latestProjectData?:(Project & Record<string, any>)[] = []
  get entries():team_snippet[]{
    if(this.latestProjectData)
    return this.latestProjectData.map(project => ({
      projectId:project.projectId,
      item_preview:project.sentencePitch || "",
      name:project.teamName,
      rating:project[`elevatorPitchRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`] || 0
    }))
    else
    return []
  }
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