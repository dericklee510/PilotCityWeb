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
import { Watch } from "vue-property-decorator";
import { Oops } from "@/views/ProgramGuide/components";
interface PitchInfo {
  projectId: string;
  item_preview: string;
  name: string;
  rating: number;
}
@Component({
  components: {
    Rating,
    Oops
  }
})
export default class pitch_view extends Vue {
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
                    (({ projectId, sentencePitch, teamName, ...rest }) => ({
                      projectId,
                      item_preview: sentencePitch || "",
                      name: teamName,
                      rating:
                        rest[
                          `sentencePitchRating${FbStore.userCitizenType!.charAt(
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
    else if (FbStore.userCitizenType === "employer") this.onProgramIdsChange();
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
        [`sentencePitchRating${FbStore.userCitizenType!.charAt(
          0
        ).toUpperCase()}`]: newRating,
        lastUpdate: firebase.firestore.FieldValue.serverTimestamp()
      });
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
                (({ projectId, sentencePitch, teamName, ...rest }) => ({
                  projectId,
                  item_preview: sentencePitch || "",
                  name: teamName,
                  rating:
                    rest[
                      `sentencePitchRating${FbStore.userCitizenType!.charAt(
                        0
                      ).toUpperCase()}`
                    ] || 0
                }))(projectData),
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