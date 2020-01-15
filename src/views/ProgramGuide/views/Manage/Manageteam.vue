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
          @click="renameTeam(entry.id,index)"
        >
          RENAME
        </button>
        <button
          class="manageteam__deletebutton"
          @click="deleteEntry(entry.id)"
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
              newEntry()
            })"
          >
            CREATE
          </v-btn>
        </PCLoader>
     
        

      <!-- </span> -->
      </v-row>
    </ValidationObserver>
  </v-container>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import ManageClass from "../Manageclass/Manageclass.vue";
import { PCmultiinput } from "@/components/inputs";
import { PCLoader } from "@/components/utilities";
import { findIndex } from "lodash";
import { ValidationObserver, ValidationProvider } from 'vee-validate';
class Team {
  teamName: string = `TEAM NAME 1`;
  teamUid: string | undefined = undefined;
  createdbyTeacher: boolean = true;
  students: string[] = [];
  constructor(
    teamName?: string,
    teamUid?: string | undefined,
    createdbyTeacher?: boolean,
    students?: string[]
  ) {}
}
const app = PCmultiinput.createMultiInput(new Team());
@Component({
  components: {
    PCLoader,
    ValidationObserver,
    ValidationProvider
  }
})
export default class ManageTeam extends app {
  currentName:string = ""
  teamNames:string[] = [""]
  async created(){
    this.entries[0].teamUid = await this.createNewTeam()
  }
  renameTeam(id: number, index: number) {
    let entryIndex = findIndex(this.entries, { id: id });
    this.entries[entryIndex].teamName = this.teamNames[index];
    this.teamNames[index] = "";
  }
   createNewTeam(){
     return new Promise<string>((resolve,reject)=>{
      setTimeout(()=>{
        //create class on backend
        resolve("someuid") // resolve uid
      },2000)
    })
  }
  async newEntry() {
    this.entries.push(this.allocateEntry({
      teamName: this.currentName,
      id: this.entries.length ? this.entries.slice(-1)[0].id + 1 : 0
    }));
    this.currentName = ""
    let index = this.entries.length - 1;
    this.entries[index].teamUid = await this.createNewTeam()
  }
}
</script>