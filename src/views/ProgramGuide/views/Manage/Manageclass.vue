<template>
  <div>
    <span class="manageclass__topbutton">
      <button class="manageclass__classesbutton">CLASSES</button>

      <button class="manageclass__studentsbutton">STUDENTS</button>

      <button class="manageclass__teambutton">TEAMS</button>
    </span>

    <v-row class="manageclass__titlemain">
      <span class="manageclass__title">Manage Classes</span>

      <v-row class="manageclass__headtitle">
        <span>
          <span class="manageclass__classtitle">Class Name</span>
          <span class="manageclass__codetitle">Share code</span>
        </span>
      </v-row>
    </v-row>
    <ManageClassHelper
     
     
      :generate-first-classroom="generateClassroom"
    />
  </div>
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