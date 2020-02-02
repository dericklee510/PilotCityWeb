<template>
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
          justify="start"
          no-gutters
        >
          <v-col
            class="pitch_view__label"
            cols="1"
          />
          <v-col
            class="pitch_view__label"
            cols="8"
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
import { Watch } from 'vue-property-decorator';
interface PitchInfo{
  projectId:string
  item_preview:string
  name:string
  rating:number
}
@Component({
  components:{
    Rating
  }
})
export default class pitch_view extends Vue{
    mounted() {
       if (FbStore.userCitizenType === "teacher")
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
                  (({projectId,sentencePitch,teamName, ...rest}) => ({projectId,item_preview:sentencePitch || "",name:teamName,rating:(rest[`sentencePitchRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]||0)}))(projectData),
                  "projectId"
                );
              })
            );
          });
        }
      );
    });else if (FbStore.userCitizenType === "employer") this.onProgramIdsChange();
  }
  onRatingChange({newRating,projectId}:{newRating:number,projectId:string}){
   FbStore.firestore.collection("Project").doc(projectId).update<Project>({
      [`sentencePitchRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]:newRating,
      lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  get getProjectIds() {
    return FbStore.currentEmployerProgram!.projectIds || [];
  }
  @Watch("getProgramIds")
  onProgramIdsChange() {
    if (FbStore.userCitizenType === "employer") {
      this.employerSubscribers.forEach(subscriber => subscriber.unsubscribe());
      this.getProjectIds.forEach(projectId => {
        this.employerSubscribers.push(
          doc(FbStore.firestore.collection("Project").doc(projectId)).subscribe(
            projectSnapshot => {
              let projectData = projectSnapshot.data<Project>();
              spliceOrPush(
                  this.entries,
                  (({projectId,sentencePitch,teamName, ...rest}) => ({projectId,item_preview:sentencePitch || "",name:teamName,rating:(rest[`sentencePitchRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]||0)}))(projectData),
                  "projectId"
                );
            }
          )
        );
      });
    }
  }
    beforeDestroy() {
    this.employerSubscribers.forEach(subscriber => subscriber.unsubscribe());
  }
  employerSubscribers: Subscription[] = [];
  entries: PitchInfo[] = [];
  projectSubscribers: {
    [classroomId: string]: Subscription[];
  } = {};
}
</script>