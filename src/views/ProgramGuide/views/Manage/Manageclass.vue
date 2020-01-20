<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        class="manageclass__container"
        cols="10"
      >
        <v-row
          class="manageclass__nav text-center"
          no-gutters
        >
          <v-col cols="4" sm="3" lg="2">
            CLASSES
          </v-col>
          <v-col cols="4" sm="3" lg="2" >
            STUDENTS
          </v-col>
          <v-col cols="4" sm="3" lg="2">
            TEAMS
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col
            cols="12"
            class="manageclass__title"
          >
            <span>Manage Classes</span>
          </v-col>
        </v-row>
        <v-row
          class="manageclass__labels"
          no-gutters
        >
          <v-col
            cols="12"
            lg="5"
            xl="6"
          >
            <span>Class Name</span>
          </v-col>
          <v-spacer />
          <v-col
            cols="2"
            xl="1"
            class="manageclass__sharecode-label d-none d-lg-block "
          >
            <span> Share Code</span>
          </v-col>
          <v-col cols="1" />
        </v-row>
        <ManageClassHelper
          :generate-first-classroom="generateClassroom"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ManageClassHelper from "./ManageclassHelper.vue";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore/dist/firestore";
import { from, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Classroom } from "../../../../store/Database/types/types";
@Component({
  components: {
    ManageClassHelper
  },
  domStreams: ["onClassChange$"],

})
export default class ManageClass extends Vue {
    generateClassroom = !FbStore.currentTeacherProgramData!.classroomIds?.length
}
</script>