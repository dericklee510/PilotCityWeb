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
      this.$emit('saving',true)
      if(FbStore.userCitizenType === "employer")
      await FbStore.updateCurrentEmployerProgram({
        externshipDayAgenda:{
          events:events.filter(obj => Object.keys(obj).length !== 0),
          lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
        }
      })
      this.$emit('saving',false)
      this.$emit('updateSavedDate', firebase.firestore.Timestamp.now())
    })
  }
  toggleView(){
    this.$router.push({name: 'emp-externship-agenda'})
  }
  created(){
    // set ref to update based on user type
  }
  onAgendaChange$!:Subject<{event:{name:string,msg:EventItem[]},data:undefined}>;
  ref!:firebase.firestore.DocumentReference
    entries:EventItem[] = FbStore.currentEmployerProgram?.externshipDayAgenda?.events || [emptyAgenda]
}
</script>