<template>

  <v-row justify="center" no-gutters>


    <v-col cols="12" class="pb-9">


      <v-row class="programguide__labels" justify="center" no-gutters>
        

            <v-col cols="1" md="1" class="d-none d-lg-inline-block" />
            <v-col cols="12" md="7" class="d-none d-lg-inline-block">Name</v-col>
            <v-col cols="12" md="2" class="d-none d-lg-inline-block">Rating</v-col>


      </v-row>


        <Rating v-model="entries" v-slot:link @ratingChange="onRatingChange">
          <v-col cols="1" md="1" @click="$emit('changePage')">
            <v-btn dark depressed x-small>View</v-btn>
          </v-col>
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
import { Oops } from "@/views/ProgramGuide/components";
@Component({
  components: {
    Rating,
    Oops
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
  onRatingChange({
    newRating,
    projectId
  }: {
    newRating: number;
    projectId: string;
  }) {
    FbStore.firestore
      .collection("Project")
      .doc(projectId)
      .update<Project>({
        [`elevatorPitchRating${FbStore.userCitizenType!.charAt(
          0
        ).toUpperCase()}`]: newRating,
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
  }
  entries: team_snippet[] = [];
  projectSubscribers: {
    [classroomId: string]: Subscription[];
  } = {};
}
</script>