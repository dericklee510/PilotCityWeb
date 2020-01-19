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
    </v-col>

    <v-row
      v-for="(entry,index) in entries"
      :key="entry.id"
      no-gutters
      class="manageclass__wholeline"
      
      style="padding-left: 17.5%;"
    >
      <v-col
        cols="12"
        md="4"
      >
        <div class="manageclass__classinput">
          <input
            v-model="classNames[index]"
            class="manageclass__classinput--field"
            :placeholder="entry.className"
          >
        </div>
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <button
          class="manageclass__renamebutton"
          @click="renameClass(entry.id,index)"
        >
          RENAME
        </button>
      </v-col>
      <v-col
        cols="12"
        md="2"
      >
        <button
          class="manageclass__deletebutton"
          @click="deleteEntry(entry.id)"
        >
          DELETE
        </button>
      </v-col>
      <v-col
        cols="12"
        md="2"
        xl="1"
        style="padding-bottom: 68.62px;"
      >
        <v-col
          cols="12"
          style="padding: 0"
        >
          Share code
        </v-col>
        <v-col
          cols="12"
          style="padding: 0"
        >
          <v-progress-circular
            v-if="!entry.shareCode"
            indeterminate
            color="primary"
          />
        </v-col>
        <v-col
          style="padding: 0"
          cols="12"
          class="manageclass__sharecode"
        >
          {{ entry.shareCode?entry.shareCode:"GENERATING..." }}
          <button
            v-if="entry.shareCode"
            class="manageclass__icon"
          >
          <!-- <img src="@/assets/link.png"> -->
          </button>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <button
        class="manageclass__createbutton"
        @click="newEntry"
      >
        CREATE
      </button>
    </v-row>
  </v-col>
</template>






<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { PCmultiinput } from "@/components/inputs";
import { findIndex } from "lodash";
interface classObj {
  className: string;
  shareCode?: string;
}
const defaultClassObj: classObj = {
  className: "Class Name 1",
  shareCode: undefined
};
const app = PCmultiinput.createMultiInput(defaultClassObj);
@Component
export default class ManageClass extends app {
  mounted() {
    // When entering this page for the first time. Generate one class and a sharecode
    this.getNewCode(0);
  }
  classNames: string[] = [""];
  renameClass(id: number, index: number) {
    let entryIndex = findIndex(this.entries, { id: id });
    this.entries[entryIndex].className = this.classNames[index];
    this.classNames[index] = "";
  }
  getNewCode(index: number) {
    setTimeout(() => {
      this.entries[index].shareCode = "MCJFUAL68D";
    }, 2000);
  }
  newEntry() {
    // page needs to be "live".
    this.entries.push({
      className: `CLASS NAME ${this.entries.length + 1}`,
      shareCode: undefined,
      id: this.entries.length ? this.entries.slice(-1)[0].id + 1 : 0
    });
    let index = this.entries.length - 1;
    this.getNewCode(index);
    // Create in firebase
    // fetch shareCode
  }
}
</script>