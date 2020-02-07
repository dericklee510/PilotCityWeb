<template>
  <Agenda
    v-model="entries"
    v-stream:update:value="onAgendaChange$"
    @toggleView="$emit('toggleView')"
  />
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
import { pluck, debounceTime, skip } from 'rxjs/operators'
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
        skip(1),
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
        this.$emit('updateSavedDate', firebase.firestore.Timestamp.now())
    })
  }
 
  onAgendaChange$!:Subject<{event:{name:string,msg:EventItem[]},data:undefined}>;
  ref!:firebase.firestore.DocumentReference
    entries:EventItem[] = FbStore.currentTeacherProgramData?.hackDayAgenda?.events || FbStore.currentEmployerProgram?.masterHackDayAgenda?.events || [emptyAgenda]

}
</script>