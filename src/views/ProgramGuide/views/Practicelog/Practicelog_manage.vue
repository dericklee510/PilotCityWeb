<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
      class="practicelog-container"
    >
      <img
        id="practicelog-manage__icon"
        class="practicelog_manage__image"
        src="@/assets/practicelog_manage.png"
      >
    
      <v-col
        class="practicelog-manage__contain"
        cols="8"
      >
        <v-row
          no-gutters
          justify="center"
          class="practicelog-manage__title"
        >
          MANAGE PRACTICE LOGS
        </v-row>
        <v-row
          justify="center"
          class="practicelog-manage__label mt-12 mb-6"
        >
          <v-col
            cols="4"
            md="3"
            lg="2"
            xl="1"
          >
            Time
          </v-col>
          <v-col
            cols="7"
            md="4"
            lg="3"
            xl="2"
            class="pl-0"
          >
            Name
          </v-col>
          <!-- <v-col class="practicelog_manage__label" cols="3"></v-col> -->
        </v-row>
    
        <!-- LOGGER -->
    
        <v-row
          v-for="(timeLogs,studentId) in practiceLogs"
          :key="studentId"
          justify="center"
          class="practicelog-manage__logged"
        >
          <!-- <v-col class="practicelog_manage__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
          <v-col
            class="practicelog-manage__log-header"
            cols="4"
            md="3"
            lg="2"
            xl="1"
          >
            {{ `${reduceEntry(timeLogs)}m` }}
          </v-col>
          <v-col
            cols="7"
            md="4"
            lg="3"
            xl="2"
            style="padding: 0"
          >
            <v-col class="practicelog-manage__log-header">
              {{ nameHash[studentId].name }}
            </v-col>
            <pc-timelog
              :key="studentId+key"
              v-model="practiceLogs[studentId]"
              v-slot="{entries}"
            >
              <v-col
                v-for="(entry,index) in entries"
                :key="entry.id"
                style="padding: 0"
              >
                <span>
                  <button
                    class="practicelog_manage__rejectbutton"
                    @click="rejectEntry(studentId,index)"
                  >
                    Reject
                  </button><span class="practicelog_manage__singlelog">
                    {{ `${entry.minutes}m` }}
                  </span>
                </span>
              </v-col>
            </pc-timelog>
          </v-col>
        </v-row>
          
        <!-- LOGGER -->
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { TimeLog } from '@/store/Database/types/utilities'
import { PCmultiinput } from '@/components/inputs'
import {firebase} from "@/firebase/init"
import { FbStore } from '../../../../store'
import { Subscription } from 'rxjs'
import { Classroom, Project } from '../../../../store/Database/types/types'
import { doc } from 'rxfire/firestore'
export const pcTimelog = PCmultiinput.createMultiInput<TimeLog>({
  minutes:0,
  lastUpdate: firebase.firestore.Timestamp.fromDate(new Date())
})
@Component({
  components:{
    pcTimelog
  }
})
export default class logtime extends Vue{
  key = 0
  mounted(){
    FbStore.currentTeacherProgramData!.classroomIds.forEach(async classroomId => {
     let classroomData = (await FbStore.firestore.collection("Classroom").doc(classroomId).get()).data<Classroom>()
     classroomData.projectIds.forEach(projectId => {
       this.$subscribeTo(doc(FbStore.firestore.collection("Project").doc(projectId)), projectSnapshot => {
         let projectData = projectSnapshot.data<Project>()
         Object.keys(projectData.practiceLog).forEach(async studentId => {
           this.nameHash[studentId] = {name:await FbStore.getStudentName({studentUid:studentId}), projectId}
           this.practiceLogs[studentId] = projectData.practiceLog[studentId]
           this.$forceUpdate()
           this.key++
         })
       })
     })
    })
  }
    practiceLogs:Record<string,TimeLog[]> = {
      // 'someuid':[{
      //   minutes:45,
      //   lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(12))
      // },
      // {
      //   minutes:13,
      //   lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(42))
      // },
      // {
      //   minutes:10,
      //   lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(14))
      // }],
      // "otheruid":[{
      //   minutes:20,
      //   lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(23))
      // }]
    }
    nameHash:Record<string,{name:string,projectId:string}> ={
      // 'someuid': {name:"Antonio Laza"},
      // otheruid: {name:"Carly Hudson"}
    }
    rejectEntry(studentId:string,index:number){
      FbStore.firestore.collection("Project").doc(this.nameHash[studentId].projectId).update<Project>({
        [`practiceLog.${studentId}`]: this.practiceLogs[studentId].splice(index,1)
      })
      this.$forceUpdate()
    }
    reduceEntry(entries:TimeLog[]):number {
      return entries.reduce((sum,entry) => sum += entry.minutes,0)
    }
}
</script>