<template>
  <v-container>
    <v-row class="manageteam__topbutton">
      <button class="manageteam__classesbutton">
        CLASSES
      </button>

      <button class="manageteam__studentsbutton">
        STUDENTS
      </button>

      <button class="manageteam__teambutton">
        TEAMS
      </button>
    </v-row>

    <v-row class="manageteam__titlemain">
      <span class="manageteam__title">Manage Teams</span>
    </v-row>
    <v-row class="manageteam__headtitle">
      <span class="manageteam__teamname">Team Name</span>
    </v-row>

    <multi-input
      v-model="entries"
      v-slot="{ }"
    >
      <v-row
        v-for="(entry,index) in entries"
        :key="entry.id"
        class="manageteam__wholeline"
      >
        <input
          v-model="teamNames[index]"
          class="manageteam__classinput"
          :placeholder="entry.teamName"
        >
        <template v-if="entry.teamUid">
          <button
            class="manageteam__renamebutton"
            @click="renameTeam(entry,index)"
          >
            RENAME
          </button>
          <button
            class="manageteam__deletebutton"
            @click="deleteTeam(entry)"
          >
            DELETE
          </button>
        </template>
        <template v-else>
          <h4>Generating...</h4>
          <v-progress-circular
            indeterminate
            color="primary"
          />
        </template>
      </v-row>

      <v-row class="manageteam__titlemain">
        <span class="manageteam__title1">Create Team</span>

        <v-row class="manageteam__headtitle">
          <span class="manageteam__teamname">Team Name</span>
        </v-row>
      </v-row>
      <ValidationObserver v-slot="{invalid, reset}">
        <v-row>
          <!-- <span class="manageteam__wholeline3"> -->

          <ValidationProvider
            v-slot="{errors}"
            rules="required"
          >
            <v-text-field
              v-model="currentName"
              :error-messages="errors"
              placeholder="TEAM NAME 3"
            />
            <!-- class="manageteam__classinput" -->
          </ValidationProvider>

          <PCLoader v-slot="{loading, setLoader}">
            <v-btn
              :loading="loading"
              :disabled="loading || invalid"
              class="manageteam__createbutton"
              @click="setLoader(()=>{
                reset()
                createNewTeam()
              })"
            >
              CREATE
            </v-btn>
          </PCLoader>

          <!-- </span> -->
        </v-row>
      </ValidationObserver>
    </multi-input>
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