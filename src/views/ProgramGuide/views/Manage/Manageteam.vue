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
            <span>Manage Teams</span>
          </v-col>
        </v-row>

        <v-row
          class="manageteam__labels"
          no-gutters
        >
          <v-col
            cols="12"
            lg="5"
            xl="6"
          >
            <span>Team Name

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
                <span>Rename or delete student project teams</span>
              </v-tooltip>
            <!-- TOOLTIP TEMPLATE END -->


            </span>
          </v-col>
        </v-row>
        <multi-input
          v-model="entries"
          v-slot="{ }"
        >
          <v-row
            v-for="(entry,index) in entries"
            :key="entry.id"
            no-gutters
            class="manageteam__class-input"
          >
            <v-col
              cols="12"
              lg="5"
              xl="6"
              class="manageteam__input"
            >
              <input
                v-model="teamNames[index]"
                :placeholder="entry.teamName"
              >
            </v-col>

            <template v-if="entry.teamUid">
              <v-col
                cols="6"
                lg="2"
                class="manageteam__button-wrapper first"
              >
                <PCLoader v-slot="{loading,setLoader}">
                  <v-btn
                    class="manageteam__button"
                    outlined
                    height="55.88px"
                    :loading="loading"
                    depressed
                    text
                    @click="setLoader(() =>renameTeam(entry,index))"
                  >
                    RENAME
                  </v-btn>
                </PCLoader>
              </v-col>
              <v-col
                cols="6"
                lg="2"
                class="manageteam__button-wrapper"
              >
                <PCLoader v-slot="{loading,setLoader}">
                  <v-btn
                    class="manageteam__button"
                    outlined
                    height="55.88px"
                    :loading="loading"
                    depressed
                    text
                    @click="setLoader(()=>deleteTeam(entry))"
                  >
                    DELETE
                  </v-btn>
                </PCLoader>
              </v-col>
            </template>
            <template v-else>
              <v-col cols="2">
                <h4>Generating...</h4>
                <v-progress-circular
                  indeterminate
                  color="primary"
                />
              </v-col>
            </template>
          </v-row>

          <v-row no-gutters>
            <v-col
              cols="12"
              class="manageteam__title"
            >
              <span>Create Teams</span>
            </v-col>
          </v-row>
          <v-row
            class="manageteam__labels"
            no-gutters
          >
            <v-col
              cols="12"
              lg="5"
              xl="6"
            >
              <span>Team Name</span>
            </v-col>
          </v-row>

          <ValidationObserver v-slot="{invalid, reset}">
            <v-row
              no-gutters
              class="mt-4 mb-12"
            >
              <v-col
                cols="12"
                lg="5"
                xl="6"
                class="manageteam__input pa-0"
              >
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required"
                >
                  <v-text-field
                    v-model="currentName"
                    text
                    depressed
                    height="55.87px"
                    :error-messages="errors"
                    placeholder="Team Name"
                  />
                </ValidationProvider>
              </v-col>
              <v-col
                cols="12"
                lg="5"
                xl="3"
                class="manageteam__input pa-0"
              >
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required"
                >
                  <PCselect
                    v-model="selectedClassroom"
                    style="height: inherit !important;"
                    :error-messages="errors"
                    placeholder="Class Name"
                    :document-refs="CurrentClassroomsRefs"
                    live-text="className"
                    live-value="classroomId"
                  />
                </ValidationProvider>
              </v-col>
              <v-col
                cols="12"
                lg="2"
                xl="3"
                class="manageteam__button-wrapper pa-0"
              >
                <PCLoader v-slot="{loading, setLoader}">
                  <v-btn
                    :loading="loading"
                    :disabled="loading || invalid"
                    height="100%"
                    text
                    depressed
                    outlined
                    class="manageteam__button mt-4"
                    @click="setLoader(()=>{
                      reset()
                      createNewTeam()
                    })"
                  >
                    CREATE
                  </v-btn>
                </PCLoader>
              </v-col>
            </v-row>
          </ValidationObserver>
        </multi-input>
        <v-col />
      </v-col>
    </v-row>
  </v-container>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ManageClass from "../Manageclass/Manageclass.vue";
import { PCmultiinput, PCselect } from "@/components/inputs";
import { PCLoader } from "@/components/utilities";
import { findIndex, includes } from "lodash";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { Subscription } from "rxjs";
import { spliceOrPush } from "@/utilities/array";
interface Team {
  classroomId: string;
  teamName: string;
  teamUid: string;
  createdbyTeacher: boolean;
  students: string[];
}
const app = PCmultiinput.createMultiInput<Team>();
@Component({
  components: {
    PCLoader,
    ValidationObserver,
    ValidationProvider,
    multiInput: app,
    PCselect
  }
})
export default class ManageTeam extends Vue {
  mounted() {
    FbStore.currentTeacherProgramData!.classroomIds.forEach(classroomId => {
      this.$subscribeTo(
        doc(FbStore.firestore.collection("Classroom").doc(classroomId)),
        classSnapshot => {
          let projectIds = classSnapshot.data<Classroom>().projectIds;
          if (this.projectSubscribers[classSnapshot.id])
            this.projectSubscribers[classSnapshot.id].forEach(subscriber =>
              subscriber.unsubscribe()
            );

          this.entries
            .filter(entry => entry.classroomId == classroomId)
            .map(entry => entry.teamUid)
            .forEach(existingId => {
              if (!includes(projectIds, existingId)) {
                this.entries.splice(
                  findIndex(this.entries, { teamUid: existingId }),
                  1
                );
              }
            });
          this.projectSubscribers[classSnapshot.id] = [];
          projectIds.forEach(projectId => {
            let projectObserver = doc(
              FbStore.firestore.collection("Project").doc(projectId)
            );
            this.projectSubscribers[classSnapshot.id].push(
              projectObserver.subscribe(projectSnapshot => {
                let projectData = projectSnapshot.data<Project>();
                spliceOrPush(
                  this.entries,
                  {
                    classroomId: classSnapshot.id,
                    teamName: projectData.teamName,
                    teamUid: projectId,
                    createdbyTeacher: projectData.createdByTeacher,
                    students: projectData.teamMembersIds
                  },
                  "teamUid"
                );
              })
            );
          });
        }
      );
    });
  }
  entries: Team[] = [];
  projectSubscribers: {
    [classroomId: string]: Subscription[];
  } = {};
  currentName: string = "";
  teamNames: string[] = [""];
  selectedClassroom: string = "";
  get CurrentClassroomsRefs() {
    return FbStore.currentTeacherProgramData!.classroomIds.map(id =>
      FbStore.firestore.collection("Classroom").doc(id)
    );
  }

  async renameTeam(entry: Team, index: number) {
    await FbStore.renameProject({
      newProjectName: this.teamNames[index],
      projectId: entry.teamUid!
    });
    this.teamNames[index] = "";
    this.teamNames = this.teamNames.slice(0);
  }
  async deleteTeam(entry: Team) {
    await FbStore.deleteProject(entry.teamUid);
  }
  createNewTeam() {
    FbStore.createProject({
      teamName: this.currentName,
      classroomId: this.selectedClassroom
    });
  }
  // async newEntry() {
  //   this.entries.push(this.allocateEntry({
  //     teamName: this.currentName,
  //     id: this.entries.length ? this.entries.slice(-1)[0].id + 1 : 0
  //   }));
  //   this.currentName = ""
  //   let index = this.entries.length - 1;
  //   this.entries[index].teamUid = await this.createNewTeam()
  // }
}
</script>