

<template>
  <v-row no-gutters>
    <v-col>
      <v-row
        class="programguide__labels"
        no-gutters
      >
        <v-col cols="1" />
        <v-col
          cols="12"
          md="7"
        >
          Name
        </v-col>
        <v-col
          cols="12"
          md="3"
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
      >
        <!-- insert v-for here -->
        <v-col
          cols="1"
          class="businesscanvas__actnbtn"
          @click="$emit('changePage',team)"
        >
          <div>View</div>
        </v-col>
        <v-col
          cols="12"
          md="7"
          class="programguide__header"
        >
          <span>{{ team.teamName }}</span>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-rating />
        </v-col>
      </v-row>
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
import {TeamInfo} from './components'
@Component({
  components: {
    BusinessModelCanvasComp
  }
})
export default class businessmodelcanvas_view2 extends Vue {
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
                  {
                    ...projectData
                  },
                  "projectId"
                );
              })
            );
          });
        }
      );
    });
  }
  entries: TeamInfo[] = [];
  projectSubscribers: {
    [classroomId: string]: Subscription[];
  } = {};
}
</script>