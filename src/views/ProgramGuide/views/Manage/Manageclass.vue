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

    <v-row
      v-for="(entry,index) in entries"
      :key="entry.id"
    >
      <span class="manageclass__wholeline">
        <input
          v-model="classNames[index]"
          class="manageclass__classinput"
          :placeholder="entry.className"
        >
        <button
          class="manageclass__renamebutton"
          @click="renameClass(entry.id,index)"
        >RENAME</button>
        <button
          class="manageclass__deletebutton"
          @click="deleteEntry(entry.id)"
        >DELETE</button>
        <v-progress-circular
          v-if="!entry.shareCode"
          indeterminate
          color="primary"
        />
        <span class="manageclass__sharecode">{{ entry.shareCode?entry.shareCode:"GENERATING..." }}</span>
        <button
          v-if="entry.shareCode"
          class="manageclass__icon"
        >
          <!-- <img src="@/assets/link.png"> -->
        </button>
      </span>
    </v-row>

    <v-row>
      <button
        class="manageclass__createbutton"
        @click="newEntry"
      >
        CREATE
      </button>
    </v-row>
  </div>
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