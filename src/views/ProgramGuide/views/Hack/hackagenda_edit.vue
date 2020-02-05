<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
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
          HACK DAY AGENDA
          <i
            v-if="citizenType=='teacher'|| citizenType=='employer'"
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
          Enter your agenda for the event or activity.
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
  get citizenType() {
    return FbStore.userCitizenType;
  }
  toggleView(){
    if(this.citizenType == 'employer')
      this.$router.push({name: 'emp-project-hack'})
    if(this.citizenType == 'teacher')
      this.$router.push({name: 'teach-project-hack'})
  }
 mounted(){
    this.$subscribeTo(this.$observables.agendaEvents,async (events:EventItem[]) => {
      this.$emit('saving',true)
      if(FbStore.userCitizenType === "employer")
      await FbStore.updateCurrentEmployerProgram({
        masterHackDayAgenda:{
          events:events.filter(obj => Object.keys(obj).length !== 0),
          lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
        }
      })
      else if (FbStore.userCitizenType==="teacher")
        await FbStore.updateCurrentTeacherProgramData({
          hackDayAgenda:{
            events:events.filter(obj => Object.keys(obj).length !== 0),
          lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
          }
        })
        this.$emit('saving',false)
        this.$emit('updateSavedDate', firebase.firestore.Timestamp.now())
    })
  }
 
  onAgendaChange$!:Subject<{event:{name:string,msg:EventItem[]},data:undefined}>;
  ref!:firebase.firestore.DocumentReference
    entries:EventItem[] = FbStore.currentTeacherProgramData?.hackDayAgenda?.events || FbStore.currentEmployerProgram?.masterHackDayAgenda?.events || [emptyAgenda]

}
</script>