<template>
  <div>
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
      <PCLoader v-slot="{loading,setLoader}">
        <button
          class="manageclass__createbutton"
          :loading="loading"
          @click="setLoader(newEntry)"
        >
          CREATE
        </button>
      </PCLoader>
    </v-row>
  </div>
</template>






<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { PCmultiinput } from "@/components/inputs";
import { findIndex } from "lodash";
import { Prop } from 'vue-property-decorator';
import { FbStore } from '../../../../store';
import { Classroom } from '../../../../store/Database/types/types';
import { doc } from 'rxfire/firestore/';
import { PCLoader } from '../../../../components/utilities';
import {firebase} from "@/firebase/init"
interface classObj {
  classroomId:string
  className: string;
  shareCode?: string;
}

const app = PCmultiinput.createMultiInput<classObj>();
@Component({
  components:{
    PCLoader
  }
})
 export default class ManageClassHelper extends app {
  mounted() {
    // When entering this page for the first time. Generate one class and a sharecode
    if(this.generateFirstClassroom){
    this.newEntry()}
    else{
      FbStore.currentTeacherProgramData!.classroomIds.forEach((id) => {
      const classroomDoc = FbStore.firestore.collection("Classroom").doc(id)
      this.$subscribeTo(doc(classroomDoc), this.snapshotUpdate)
    })
    }
    
  }
  @Prop()
  generateFirstClassroom!:boolean
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
  snapshotUpdate(snapshot:firebase.firestore.DocumentSnapshot) {
       let index =  this.entries.findIndex((entry) => entry.classroomId === snapshot.id)
       if(index != -1)
        Object.assign(this.entries[index],snapshot.data())
      else{
        this.entries.push({
          ...snapshot.data(),
           id: this.entries.length ? this.entries.slice(-1)[0].id + 1 : 0
        })}
      }
  async newEntry() {
    // page needs to be "live".
    // this.entries.push({
    //   className: `CLASS NAME ${this.entries.length + 1}`,
    //   shareCode: undefined,
    //   id: this.entries.length ? this.entries.slice(-1)[0].id + 1 : 0
    // });
    let index = this.entries.length - 1;
    let uid = FbStore.firestore.collection("Classroom").doc().id
    const teacherProgramId = FbStore.currentTeacherProgramData!.teacherProgramId
    const employerProgramId = FbStore.currentEmployerProgram!.employerProgramId
    const classroomDoc =  await FbStore.createClassroom({className:`CLASS NAME ${this.entries.length + 1}`,teacherProgramId,employerProgramId})
    this.$subscribeTo(doc(classroomDoc),this.snapshotUpdate)
   
    
    // Create in firebase
    // fetch shareCode
  }
}
</script>