<template>
  <v-row justify="center">
    <img
      id="demovideo_view__icon"
      src="@/assets/demovideo_view.png"
    >

    <v-col
      id="demovideo_view__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto demovideo_view__title"
      >
        VIEW 1-MINUTE PROTOTYPE DEMONSTRATION VIDEOS
      </v-row>

      <v-col
        id="demovideo_view__borderline"
        cols="12"
      />


      <v-row
        class="mt-5"
        justify="center"
      >
        <v-col
          class="demovideo_view__label"
          cols="1"
        />
        <v-col
          class="demovideo_view__label"
          cols="6"
        >
          Name
        </v-col>
        <v-col
          class="demovideo_view__label"
          cols="3"
        >
          Rate
        </v-col>
      </v-row>

      <!-- TEAM -->

      <Rating
        v-model="entries"
        @ratingChange="onRatingChange"
      />

     
      <!-- TEAM -->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Rating } from '../../components'
import { team_snippet } from '../../components/Rating.vue'
import { FbStore } from '../../../../store';
import { doc } from 'rxfire/firestore';
import { Classroom, Project } from '../../../../store/Database/types/types';
import { spliceOrPush } from '../../../../utilities/array';
import { Subscription } from 'rxjs';
import {firebase} from "@/firebase/init"
Rating
@Component({
  components:{
    Rating
  }
})
export default class demovideo_view extends Vue{
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
                  (({projectId,sentencePitch,teamName,demoLink, ...rest}) => ({projectId,item_preview:sentencePitch || "",name:teamName,href:demoLink, rating:(rest[`demoRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]||0)}))(projectData),
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
      [`demoRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]:newRating,
      lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  entries: team_snippet[] = [];
  projectSubscribers: {
    [classroomId: string]: Subscription[];
  } = {};
}
</script>