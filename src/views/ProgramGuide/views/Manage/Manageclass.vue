<template>
  <v-col class="manageclass__container">
    <v-col
      class="manageclass__topbuttons"
      style="padding-left: 17.5%;"
    >
      <button class="manageclass__topbutton">
        CLASSES
      </button>

      <button class="manageclass__topbutton">
        STUDENTS
      </button>

      <button class="manageclass__topbutton">
        TEAMS
      </button>
    </v-col>

    <v-col class="manageclass__titlemain">
      <span class="manageclass__title">Manage Classes</span>
      <v-row
        no-gutters
        class="manageclass__headtitle"
        style="padding-left: 17.5%;"
      >
        <v-col
          cols="12"
          class="manageclass__classtitle"
        >
          Class Name
        </v-col>
        <!-- <v-spacer /> -->
      </v-row>
      <ManageClassHelper
     
     
        :generate-first-classroom="generateClassroom"
      />
    </v-col>
  </v-col>
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