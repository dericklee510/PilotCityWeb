<template>
  <v-container>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        class="manageteam__container"
        cols="10"
      >
        <v-row
          class="manageteam__nav text-center"
          no-gutters
        >
          <v-col
            cols="4"
            sm="3"
            lg="2"
          >
            CLASSES
          </v-col>
          <v-col
            cols="4"
            sm="3"
            lg="2"
          >
            STUDENTS
          </v-col>
          <v-col
            cols="4"
            sm="3"
            lg="2"
          >
            TEAMS
          </v-col>
        </v-row>
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
            <span> Team Name </span>
          </v-col>
        </v-row>
        <multi-input
          v-model="entries"
          v-slot="{ }"
        >
          <v-row
            v-for="(entry,index) in entries"
            :key="entry.id"
            class="manageteam__class-input"
          >
            <v-col
              cols="12"
              lg="4"
              xl="5"
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
                <v-btn
                  class="manageteam__button"
                  outlined
                  depressed
                  height="100%"
                  @click="renameTeam(entry,index)"
                >
                  RENAME
                </v-btn>
              </v-col>
              <v-col
                cols="6"
                lg="2"
                class="manageteam__button-wrapper"
              >
                <v-btn
                  class="manageteam__button"
                  outlined
                  depressed
                  height="100%"
                  @click="deleteTeam(entry)"
                >
                  DELETE
                </v-btn>
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
              <span> Team Name </span>
            </v-col>
          </v-row>
          
          <v-row>
            <v-col
              cols="12"
              lg="4"
              xl="5"
              class="manageteam__input problem-child pa-0"
            >
              <ValidationObserver>
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required"
                >
                  <v-text-field
                    v-model="currentName"
                    solo
                    flat
                    depressed
                    height="100%"
                    :error-messages="errors"
                    placeholder="TEAM NAME 3"
                  />
                </ValidationProvider>
              </validationobserver>
            </v-col>
            <v-col
              cols="2"
              class="manageteam__create-button-wrapper"
            >
              <PCLoader v-slot="{loading, setLoader}">
                <v-btn
                  :loading="loading"
                  :disabled="loading || invalid"
                  height="100%"
                  flat
                  depressed
                  outline
                  class="manageteam__create-button"
                  @click="setLoader(()=>{
                    reset()
                    createNewTeam()
                  })"
                >
                  CREATE
                </v-btn>
              </PCLoader>
              </ValidationObserver>
            </v-col>
          </v-row>
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
import { PCmultiinput } from "@/components/inputs";
import { PCLoader } from "@/components/utilities";
import { findIndex } from "lodash";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { Subscription } from 'rxjs';
import {spliceOrPush} from '@/utilities/array'
interface Team {
  teamName: string
  teamUid: string 
  createdbyTeacher: boolean 
  students: string[] 
}

const app = PCmultiinput.createMultiInput<Team>();
@Component({
  components: {
    PCLoader,
    ValidationObserver,
    ValidationProvider,
    multiInput: app
  }
})
export default class ManageTeam extends Vue {
  mounted() {
    FbStore.currentTeacherProgramData!.classroomIds.forEach(classroomId => {
      this.$subscribeTo(
        doc(FbStore.firestore.collection("Classroom").doc(classroomId)),
        classSnapshot => {
          if(this.projectSubscribers[classSnapshot.id])
            this.projectSubscribers[classSnapshot.id].forEach(subscriber => subscriber.unsubscribe())
          else
            this.projectSubscribers[classSnapshot.id] = []
          classSnapshot.data<Classroom>().projectIds.forEach(projectId => {
            this.projectSubscribers[classSnapshot.id].push(doc(FbStore.firestore.collection("Project").doc(projectId)).subscribe(projectSnapshot => {
              let projectData = projectSnapshot.data<Project>()
              spliceOrPush(this.entries,{
                teamName:projectData.teamName,
                teamUid:projectId,
                createdbyTeacher:projectData.createdByTeacher,
                students:projectData.teamMembersIds
              })
            }))
          });
        }
      );
    });
  }
  entries: Team[] = [];
  projectSubscribers:{
    [classroomId:string]:Subscription[]
  }= {

  }
  currentName: string = "";
  teamNames: string[] = [""];
  renameTeam(entry: Team, index: number) {
    FbStore.renameProject({newProjectName:this.teamNames[index], projectId:entry.teamUid!})
    this.teamNames[index] = "";
  }
  deleteTeam(entry:Team){
    FbStore.deleteProject(entry.teamUid)
  }
  createNewTeam() {
    // FbStore.createProject({teamName:this.currentName,class})
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