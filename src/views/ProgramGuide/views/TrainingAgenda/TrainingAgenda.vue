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
        cols="8"
      >
        <!-- TITLE -->
    
        <v-row
          justify="center"
          class="mr-auto ml-auto agenda__title"
        >
          TRAINING DAY AGENDA
          <i
            class="far fa-edit edit-icon__project"
            @click="toggleView"
          />
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
          Enter agenda for Training Day.
        </v-row>
        <Agenda
          v-model="agendaItems"
          v-stream:update:value="onAgendaChange$"
        />
      </v-col>
    </v-row>
  </v-container>
</template>




<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {EventItem} from "@/store/Database/types/utilities"
import {Agenda} from "@/views/ProgramGuide/components/"
import { FbStore } from '../../../../store'
import { Subject, pipe } from 'rxjs'
import { pluck, debounceTime } from 'rxjs/operators'
import {firebase} from "@/firebase/init"
const emptyAgenda:Omit<EventItem,'completed'> = {
  name:"",
  duration:"",
  description:""
}

@Component<TrainingDayEdit>({
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
export default class TrainingDayEdit extends Vue{
  toggleView(){
    this.$router.push({name: 'teach-project-training'})
  }
  mounted(){
    this.$subscribeTo(this.$observables.agendaEvents,async (events:EventItem[]) => {
      await FbStore.updateCurrentTeacherProgramData({
        trainingDayAgenda:{
          events:events.filter(obj => Object.keys(obj).length !== 0),
          lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
        }
      })
    })
  }
   onAgendaChange$!:Subject<{event:{name:string,msg:EventItem[]},data:undefined}>;
  ref!:firebase.firestore.DocumentReference
    agendaItems:EventItem[] = FbStore.currentTeacherProgramData?.trainingDayAgenda?.events || [emptyAgenda]
}
</script>