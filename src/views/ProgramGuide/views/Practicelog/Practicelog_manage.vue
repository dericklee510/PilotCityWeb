<template>
  <v-row justify="center">
    <img
      id="practicelog_manage__icon"
      class="practicelog_manage__image"
      src="@/assets/practicelog_manage.png"
    >

    <v-col
      id="practicelog_manage__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto practicelog_manage__title"
      >
        MANAGE PRACTICE LOGS
      </v-row>

      <v-col
        cols="12"
        class="practicelog_manage__borderline"
      />


      <v-row
        class="mt-5"
        justify="center"
      >
        <v-col
          class="practicelog_manage__label"
          cols="2"
        >
          Time
        </v-col>
        <v-col
          class="practicelog_manage__label pl-0"
          cols="6"
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
      >
        <!-- <v-col class="practicelog_manage__externallink" cols="1"><i class="fas fa-external-link-alt"></i></v-col> -->
        <v-col
          class="practicelog_manage__loginfo"
          cols="2"
        >
          {{ reduceEntry(timeLogs) }}
        </v-col>
        <v-col cols="6">
          <v-row class="practicelog_manage__loginfo">
            {{ nameHash[studentId] }}
          </v-row>
          <pc-timelog
            v-model="practiceLogs[studentId]"
            v-slot="{entries,deleteEntry}"
          >
            <v-row
              v-for="entry in entries"
              :key="entry.id"
            >
              <button
                class="practicelog_manage__rejectbutton"
                @click="deleteEntry(entry.id)"
              >
                Reject
              </button><div class="practicelog_manage__singlelog">
                {{ `${entry.minutes}m` }}
              </div>
            </v-row>
          </pc-timelog>
        </v-col>
      </v-row>
        
      <!-- LOGGER -->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { TimeLog } from '@/store/Database/types/utilities'
import { PCmultiinput } from '@/components/inputs'
import {firebase} from "@/firebase/init"
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
    practiceLogs:Record<string,TimeLog[]> = {
      'someuid':[{
        minutes:45,
        lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(12))
      },
      {
        minutes:13,
        lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(42))
      },
      {
        minutes:10,
        lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(14))
      }],
      "otheruid":[{
        minutes:20,
        lastUpdate: firebase.firestore.Timestamp.fromDate(new Date(23))
      }]
    }
    nameHash:Record<string,string> ={
      'someuid': "Antonio Laza",
      otheruid: "Carly Hudson"
    }
    reduceEntry(entries:TimeLog[]):number {
      return entries.reduce((sum,entry) => sum += entry.minutes,0)
    }
}
</script>