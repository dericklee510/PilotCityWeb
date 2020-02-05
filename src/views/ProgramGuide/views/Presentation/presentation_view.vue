<template>
  <v-container>
    <v-row justify="center">
      <img
        id="presentation_view__icon"
        src="@/assets/presentation_view.png"
      >
    
      <v-col
        id="presentation_view__contain"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto presentation_view__title"
        >
          VIEW STUDENT PRESENTATION LINKS
        </v-row>
    
        <v-col
          id="presentation_view__borderline"
          cols="12"
        />
    
    
        <v-container>
          <v-row
            class="mt-5"
            justify="center"
            no-gutters
          >
            <v-col
              class="presentation_view__label"
              cols="1"
            />
            <v-col
              class="presentation_view__label"
              cols="6"
            >
              Name
            </v-col>
            <v-col
              class="presentation_view__label"
              cols="2"
            >
              Rate
            </v-col>
          </v-row>
        </v-container>
    
        <!-- TEAM -->
    
        <Rating
          v-model="entries"
          @ratingChange="onRatingChange"
        />
        <Oops v-if="!entries.length" />
      </v-col>
    </v-row>
  </v-container>
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
import { Oops } from "@/views/ProgramGuide/components"
@Component({
  components:{
    Rating,
    Oops
  }
})
export default class presentation_view extends Vue{
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
                  (({projectId,sentencePitch,teamName,presentationLink, ...rest}) => ({projectId,item_preview:sentencePitch || "",name:teamName,href:presentationLink, rating:(rest[`presentationRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]||0)}))(projectData),
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
      [`presentationRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]:newRating,
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
                  (({projectId,sentencePitch,teamName,presentationLink, ...rest}) => ({projectId,item_preview:sentencePitch || "",name:teamName,href:presentationLink, rating:(rest[`presentationRating${FbStore.userCitizenType!.charAt(0).toUpperCase()}`]||0)}))(projectData),
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

    entries: team_snippet[] = [];
  projectSubscribers: {
    [classroomId: string]: Subscription[];
  } = {};
}
</script>