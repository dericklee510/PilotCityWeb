<template>
  <v-container>
    <v-row justify="center">
      <img
        id="agenda__icon"
        class="agenda__image"
        src="@/assets/icons/agenda.png"
      >
    
      <v-col
        id="agenda__contain"
        cols="10"
      >
        Enter your agenda for the event or activity.
      </v-col>


      <!-- DESCRIPTION -->

      <!-- <v-row 
            justify="center" 
            class="mr-auto ml-auto agenda__description">As you practice, use and apply the employer's product or service, log how many minutes you use it each time.
        </v-row> -->



      <!-- AGENDA LOGISTICS

<v-row class="agenda__logistics col-8 mr-auto ml-auto mt-10 pr-auto pl-auto pt-0 pb-0">


        <v-column class="agenda__poop">

            <v-row id="agenda__borderline" class="agenda__logisticslabel pl-4 pt-4 pb-4">DATE:<input placeholder="Enter date here" class="ml-4 agenda__item-input"></v-row>

            <v-row id="agenda__borderline" class="agenda__logisticslabel pl-4 pt-4 pb-4">TIME:<input placeholder="Enter time here" class="ml-4 agenda__item-input"></v-row>

            <v-row class="agenda__logisticslabel pl-4 pb-4 pt-4">LOCATION:<input placeholder="Enter location here" class="ml-4 agenda__item-input"></v-row>
        
        </v-column>

        </v-row> -->

      <!-- AGENDA ITEM -->

      <Agenda
        v-model="entries"
        v-stream:update:value="onAgendaChange$"
      />
    </v-row>
  </v-container>
</template>


<script lang="ts">

import Vue from 'vue'
import Component from 'vue-class-component'
import { PCmultiinput } from '@/components/inputs'
import {EventItem} from "@/store/Database/types/utilities"
import {Agenda} from "@/views/ProgramGuide/components/"
import { FbStore } from '../../../../store'
import { Subject, pipe } from 'rxjs'
import { pluck, debounceTime } from 'rxjs/operators'
import {firebase} from "@/firebase/init"
const emptyAgenda:EventItem = {
  name:"",
  duration:"",
  description:"",


}

@Component<ExternshipAgendaEdit>({
  domStreams:['onAgendaChange$'],
  subscriptions(){
    return {
      agendaEvents: this.onAgendaChange$.pipe(
        debounceTime(300),
       pluck<{event:{name:string,msg:EventItem[]},data:undefined},EventItem[]>("event","msg")
      )
    }
  },
  components:{
    Agenda
  }
})
export default class ExternshipAgendaEdit extends Vue{
  mounted(){
    this.$subscribeTo(this.$observables.agendaEvents,async (events:EventItem[]) => {
      if(FbStore.userCitizenType === "employer")
      await FbStore.updateCurrentEmployerProgram({
        externshipDayAgenda:{
          events:events.filter(obj => Object.keys(obj).length !== 0),
          lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
        }
      })
    })
  }
  created(){
    // set ref to update based on user type
  }
  onAgendaChange$!:Subject<{event:{name:string,msg:EventItem[]},data:undefined}>;
  ref!:firebase.firestore.DocumentReference
    entries:EventItem[] = FbStore.currentEmployerProgram?.externshipDayAgenda?.events || [emptyAgenda]
}
</script>