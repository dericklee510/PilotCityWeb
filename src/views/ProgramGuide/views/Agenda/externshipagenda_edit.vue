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
        <!-- TITLE -->
    
        <v-row
          justify="center"
          class="mr-auto ml-auto agenda__title"
        >
          EXTERNSHIP DAY AGENDA
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
          Enter agenda for Externship event.
        </v-row>
    
        <Agenda
          v-model="entries"
          v-stream:update:value="onAgendaChange$"
        />
      </v-col>
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