<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        class="manageclass__container"
        cols="8"
      >
        <v-tabs no-gutters>
          <v-tab
            style="cursor: pointer"
            @click="$router.push({name: 'teach-externship-manage-class'})"
          >
            CLASSES
          </v-tab>

          <v-tab
            style="cursor: normal"
            @click="$router.push({name: 'teach-externship-manage-teams'})"
          >
            TEAMS
          </v-tab>

          <v-tab
            style="cursor: pointer"
            @click="$router.push({name: 'teach-externship-manage-students'})"
          >
            STUDENTS
          </v-tab>
        </v-tabs>






        <v-row no-gutters>
          <v-col
            cols="12"
            class="manageteam__title"
          >
            <span>Manage Classes

            </span>
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
            <span>Class Name

              <!-- TOOLTIP TEMPLATE -->
              <v-tooltip
                top
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    v-on="on"
                  >
                    <v-icon
                      small
                      class="pb-1"
                      color="grey lighten-1"
                    >info</v-icon>
                  </v-btn>
                </template>
                <span>Format your class name to include the period and class name</span>
              </v-tooltip>
            <!-- TOOLTIP TEMPLATE END -->


            </span>
          </v-col>
          <v-spacer />
          <v-col
            cols="12"
            lg="3"
            xl="2"
            class="manageclass__sharecode-label d-none d-lg-block"
            style="padding-left: 67px"
          >
            <span class>Share Code

              <!-- TOOLTIP TEMPLATE -->
              <v-tooltip
                top
              >
                <template v-slot:activator="{ on }">
                  <v-btn
                    icon
                    v-on="on"
                  >
                    <v-icon
                      small
                      class="pb-1"
                      color="grey lighten-1"
                    >info</v-icon>
                  </v-btn>
                </template>
                <span>Share this program code with your students to onboard</span>
              </v-tooltip>
            <!-- TOOLTIP TEMPLATE END -->


            </span>
          </v-col>
          <v-col cols="1" />
        </v-row>
        <ManageClassHelper :generate-first-classroom="generateClassroom" />
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
  domStreams: ["onClassChange$"]
})
export default class ManageClass extends Vue {
  generateClassroom = !FbStore.currentTeacherProgramData!.classroomIds?.length;
}
</script>