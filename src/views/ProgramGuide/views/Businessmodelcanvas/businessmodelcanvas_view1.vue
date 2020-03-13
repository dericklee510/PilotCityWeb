

<template>
  <v-row
    justify="center"
    no-gutters
  >
    <v-col
      cols="12"
      class="pb-9"
    >
      <v-row
        class="programguide__labels"
        align="center"
        justify="center"
        no-gutters
      >
        <v-col
          cols="1"
          md="1"
          class="d-none d-lg-inline-block"
        />
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



      <v-row
        v-for="team in entries"
        :key="team.projectId"
        class="programguide__content"
        align="center"
        no-gutters
        justify="center"
      >
        <!-- insert v-for here -->

        <v-col
          cols="1"
          md="1"
          @click="$emit('changePage',team)"
        >
          <v-btn
            dark
            depressed
            x-small
          >
            View
          </v-btn>
        </v-col>
        <v-col
          cols="12"
          md="7"
          sm="5"
          class="programguide__header"
        >
          <span>{{ team.teamName }}</span>
        </v-col>
        <v-col
          cols="12"
          md="2"
          class="pc-rating"
        >
          <v-rating
            v-model="team.averageRating"
            color="yellow darken-3"
            size="20px"
            dense
            readonly
          />
        </v-col>
      </v-row>


      <Oops v-if="!entries.length" />
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BusinessModelCanvas as BusinessModelCanvasComp } from "./components";
import { BusinessModelCanvas } from "@/store/Database/types/utilities";
import { spliceOrPush } from "../../../../utilities/array";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Subscription } from "rxjs";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { TeamInfo } from "./components";
import { Watch } from "vue-property-decorator";
import { Oops } from "../../components";
@Component({
  components: {
    Oops,
    BusinessModelCanvasComp
  }
})
export default class businessmodelcanvas_view1 extends Vue {
  async mounted() {
    if (FbStore.userCitizenType === "teacher")
      await FbStore.currentTeacherProgramData!.classroomIds.forEach(
        classroomId => {
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
                      {
                        ...projectData,
                        averageRating: this.getAverageRating(projectData)
                      },
                      "projectId"
                    );
                  })
                );
              });
            }
          );
        }
      );
    else if (FbStore.userCitizenType === "employer") this.onProgramIdsChange();
  }
  entries: TeamInfo[] = [];
  getAverageRating(project: Project & Record<string, any>) {
    let total = ["problem", "customer", "solution", "innovation"].reduce(
      (total, currentProp, currentIndex, array) => {
        return (total +=
          project[
            `${currentProp}Rating${FbStore.userCitizenType!.charAt(
              0
            ).toUpperCase()}`
          ] || 0);
      },
      0
    );
    return total / 4;
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
                {
                  ...projectData,
                  averageRating: this.getAverageRating(projectData)
                },
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
  projectSubscribers: {
    [classroomId: string]: Subscription[];
  } = {};
}
</script>