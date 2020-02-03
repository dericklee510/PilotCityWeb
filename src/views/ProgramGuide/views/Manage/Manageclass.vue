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
          <v-col
            cols="4"
            sm="3"
            lg="2"
            class="manageclass__nav--active"
            style="cursor: normal"
          >
            CLASSES
          </v-col>
          <v-col
            cols="4"
            sm="3"
            lg="2"
            style="cursor: pointer"
            @click="$router.push({name: 'teach-externship-manage-students'})"
          >
            STUDENTS
          </v-col>
          <v-col
            cols="4"
            sm="3"
            lg="2"
            style="cursor: pointer"
            @click="$router.push({name: 'teach-externship-manage-teams'})"
          >
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
            lg="4"
            xl="5"
          >
            <span>Class Name</span>
          </v-col>
          <v-spacer />
          <v-col
            cols="12"
            lg="3"
            xl="2"
            class="manageclass__sharecode-label d-none d-lg-block "
            
            style="padding-left: 67px"
          >
            <span class> Share Code</span>
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
@Component<ManageClass>({
  components: {
    ManageClassHelper
  },
  domStreams: ["onClassChange$"],

})
export default class ManageClass extends Vue {
    generateClassroom = !FbStore.currentTeacherProgramData!.classroomIds?.length
}
</script>