<template>
  <v-row justify="center">
    <img
      id="elevator_view__icon"
      src="@/assets/elevator_view.png"
    >

    <v-col
      id="elevator_view__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto elevator_view__title"
      >
        VIEW ONE SENTENCE PROJECT PITCHES
      </v-row>

      <v-col
        id="elevator_view__borderline"
        cols="12"
      />

      <v-row
        class="mt-5"
        justify="center"
      >
        <v-col
          class="elevator_view__label"
          cols="1"
        />
        <v-col
          class="elevator_view__label"
          cols="7"
        >
          Name
        </v-col>
        <v-col
          class="elevator_view__label"
          cols="2"
        >
          Rate
        </v-col>
      </v-row>

      <Rating
        v-model="entries"
        v-slot:link
        @ratingChange="onRatingChange"
      >
        <button class="elevator_view__viewbutton">
          VIEW
        </button>
      </Rating>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Rating } from "../../components";
import { team_snippet } from "../../components/Rating.vue";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { spliceOrPush } from "../../../../utilities/array";
import { Subscription } from "rxjs";
import { firebase } from "@/firebase/init";
@Component({
  components: {
    Rating
  }
})
export default class elevator_view extends Vue {
  mounted() {
    FbStore.currentTeacherProgramData!.classroomIds.forEach(classroomId => {
      this.$subscribeTo(
        doc(FbStore.firestore.collection("Classroom").doc(classroomId)),
        classSnapshot => {
          if (this.projectSubscribers[classSnapshot.id])
            this.projectSubscribers[classSnapshot.id].forEach(subscriber =>
              subscriber.unsubscribe()
            );
          else this.projectSubscribers[classSnapshot.id] = [];
          classSnapshot.data<Classroom>().projectIds.forEach(projectId => {
            this.projectSubscribers[classSnapshot.id].push(
              doc(
                FbStore.firestore.collection("Project").doc(projectId)
              ).subscribe(projectSnapshot => {
                let projectData = projectSnapshot.data<Project>();
                spliceOrPush(
                  this.entries,
                  (({ projectId, sentencePitch, teamName, ...rest }) => ({
                    projectId,
                    item_preview: sentencePitch || "",
                    name: teamName,
                    rating:
                      rest[
                        `elevatorPitchRating${FbStore.userCitizenType!.charAt(
                          0
                        ).toUpperCase()}`
                      ] || 0
                  }))(projectData),
                  "projectId"
                );
              })
            );
          });
        }
      );
    });
  }
  // teams: team_snippet[] = [
  //   {
  //     id: "0",
  //     name: "Data Analysis for the Alameda Library",
  //     item_preview:
  //       " An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
  //     rating: 0
  //   },
  //   {
  //     id: "1",
  //     name: "Data Analysis for the Alameda Library",
  //     item_preview:
  //       " An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
  //     rating: 0
  //   }
  // ];
    onRatingChange({newRating,projectId}:{newRating:number,projectId:string}){
   FbStore.firestore.collection("Project").doc(projectId).update<Project>({
      [`elevatorPitchRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]:newRating,
      lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  entries: team_snippet[] = [];
  projectSubscribers: {
    [classroomId: string]: Subscription[];
  } = {};
}
</script>