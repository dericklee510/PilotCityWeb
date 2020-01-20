<template>
  <Rating
    v-model="entries"
    v-slot:link
    @ratingChange="onRatingChange"
  >
    <v-col
      cols="1"
      class="businesscanvas__actnbtn"
      @click="$emit('changePage')"
    >
      <div>View</div>
    </v-col>
  </Rating>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Rating } from '../../components'
import { team_snippet } from '../../components/Rating.vue'
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { spliceOrPush } from "../../../../utilities/array";
import { Subscription } from "rxjs";
import { firebase } from "@/firebase/init";
@Component({
  components:{
    Rating
  }
})
export default class elevator_view extends Vue{
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