<template>
  <v-row justify="center">
    <img
      id="agenda__icon"
      class="agenda__image"
      src="@/assets/icons/agenda.png"
    >

    <v-col
      id="agenda__contain"
      cols="7"
    >
      <!-- TITLE -->

      <v-row
        justify="center"
        class="mr-auto ml-auto agenda__title"
      >
        HACK DAY AGENDA
      </v-row>

      <!-- BORDERLINE -->

      <v-col
        cols="12"
        class="agenda__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_view2__description"
      >
        Enter your agenda for the event or activity.
      </v-row>

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

 


      <!-- LOG TIME / COULD DELETE -->

      <!-- <v-row justify="center" class="mr-auto ml-auto mt-10 mb-5"><input class="agenda__input" placeholder="0m"></v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-5 mb-5"><button class="agenda__button">LOG TIME</button></v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-10 agenda__label">LOGGED TIME</v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-2 mb-7 agenda__calculated">1h 30m</v-row> -->
      <Agenda
        v-model="entries"
        v-stream:update:value="onAgendaChange$"
      />
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Agenda } from '../../components'
import { EventItem } from '@/store/Database/types/utilities'
import { FbStore } from '../../../../store'
import { Watch } from 'vue-property-decorator'
import { Subject, pipe } from 'rxjs'
import {firebase} from "@/firebase/init"
import { pluck, debounceTime } from 'rxjs/operators'
const emptyAgenda:Omit<EventItem,'completed'> = {
  name:"",
  duration:"",
  description:""
}
@Component<HackAgenda>({
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
export default class HackAgenda extends Vue{
 mounted(){
    this.$subscribeTo(this.$observables.agendaEvents,async (events:EventItem[]) => {
      await FbStore.updateCurrentEmployerProgram({
        masterHackDayAgenda:{
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
    entries:EventItem[] = FbStore.currentEmployerProgram?.masterHackDayAgenda?.events || [emptyAgenda]
}
</script>