<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-row
        v-for="(entry,index) in entries"
        :key="entry.id"
        no-gutters
        class="manageclass__class-input"
      >
        <v-col
          cols="12"
          lg="4"
          xl="5"
          class="manageclass__input"
        >
          <input
            v-model="classNames[index]"
            
            :placeholder="entry.className"
          >
        </v-col>
        <v-col
          cols="6"
          lg="2"
          class="manageclass__button-wrapper first"
        >
          <PCLoader v-slot="{loading, setLoader}">
            <v-btn
              class="manageclass__button"
              :loading="loading"
              outlined
              depressed
              height="100%"
              @click="setLoader(renameClass(entry.id,index))"
            >
              RENAME
            </v-btn>
          </PCLoader>
        </v-col>
        <v-col
          cols="6"
          lg="2"
          class="manageclass__button-wrapper"
        >
          <PCLoader v-slot="{loading, setLoader}">
            <v-btn
              class="manageclass__button"
              outlined
              depressed
              height="100%"
              :loading="loading"
              @click="setLoader(removeEntry(entry.id))"
            >
              DELETE
            </v-btn>
          </PCLoader>
        </v-col>
        <v-col
          cols="12"
          lg="3"
          xl="2"
        >
          <v-progress-circular
            v-if="!entry.shareCode"
            indeterminate
            color="primary"
          />
          <span>
            <span class="manageclass__sharecode__label ma-0 pa-0 d-lg-none">Share Code: </span>
            <span class="manageclass__sharecode">{{ entry.shareCode?entry.shareCode:"GENERATING..." }}</span>
          </span>
          <button
            v-if="entry.shareCode"
            class="manageclass__icon"
          />
        </v-col>
      </v-row>
    </v-col>
    <v-col
      cols="12"
      lg="2"
      class=" manageclass__create-button"
    >
      <PCLoader v-slot="{loading,setLoader}">
        <v-btn
          class="manageclass__button"
          :loading="loading"
          outlined
          depressed
          width="100%"
          height="100%"
          @click="setLoader(newEntry)"
        >
          CREATE 
        </v-btn>
      </PCLoader>
    </v-col>
  </v-row>
</template>






<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { PCmultiinput } from "@/components/inputs";
import { findIndex } from "lodash";
import { Prop } from "vue-property-decorator";
import { FbStore } from "../../../../store";
import { Classroom, GeneralUser } from "../../../../store/Database/types/types";
import { doc } from "rxfire/firestore/";
import { PCLoader } from "../../../../components/utilities";
import { firebase } from "@/firebase/init";
interface classObj {
  classroomId: string;
  className: string;
  shareCode?: string;
}

const app = PCmultiinput.createMultiInput<classObj>();
@Component({
  components: {
    PCLoader
  }
})
export default class ManageClassHelper extends app {
  mounted() {
    // When entering this page for the first time. Generate one class and a sharecode
    if (this.generateFirstClassroom) {
      this.newEntry();
    } else {
      FbStore.currentTeacherProgramData!.classroomIds.forEach(id => {
        const classroomDoc = FbStore.firestore.collection("Classroom").doc(id);
        this.$subscribeTo(doc(classroomDoc), this.snapshotUpdate);
      });
    }
  }
  @Prop()
  generateFirstClassroom!: boolean;
  classNames: string[] = [""];
  async renameClass(id: number, index: number) {
    let entryIndex = findIndex(this.entries, { id: id });
    FbStore.firestore
      .collection("Classroom")
      .doc(this.entries[entryIndex].classroomId)
      .update({
        className: this.classNames[index]
      });
    this.entries[entryIndex].className = this.classNames[index];
    this.classNames[index] = "";
  }
  async removeEntry(id: number) {
    let entryIndex = findIndex(this.entries, { id: id });
    
    await FbStore.deleteClassroom(this.entries[entryIndex].classroomId);
    this.deleteEntry(id);
  }
  snapshotUpdate(snapshot: firebase.firestore.DocumentSnapshot) {
    let index = this.entries.findIndex(
      entry => entry.classroomId === snapshot.id
    );
    if (index != -1) Object.assign(this.entries[index], snapshot.data());
    else {
      this.entries.push({
        ...snapshot.data(),
        id: this.entries.length ? this.entries.slice(-1)[0].id + 1 : 0
      });
    }
    this.$forceUpdate()
  }
  async newEntry() {
    let index = this.entries.length - 1;
    let uid = FbStore.firestore.collection("Classroom").doc().id;
    const teacherProgramId = FbStore.currentTeacherProgramData!
      .teacherProgramId;
    const employerProgramId = FbStore.currentEmployerProgram!.employerProgramId;
    const classroomDoc = await FbStore.createClassroom({
      className: `CLASS NAME ${this.entries.length + 1}`,
      teacherProgramId,
      employerProgramId
    });
    this.$subscribeTo(doc(classroomDoc), this.snapshotUpdate);

    // Create in firebase
    // fetch shareCode
  }
}
</script>