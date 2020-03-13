<template>
  <Agenda
    v-model="agendaItems"
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

@Component<DemoAgendaEdit>({
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
export default class DemoAgendaEdit extends Vue{
  get citizenType() {
    return FbStore.userCitizenType;
  }
  toggleView(){
    if(this.citizenType == 'employer')
      this.$router.push({name: 'emp-project-demoagenda'})
    if(this.citizenType == 'teacher')
      this.$router.push({name: 'teach-project-demoagenda'})
  }
  mounted(){
    this.$subscribeTo(this.$observables.agendaEvents,async (events:EventItem[]) => {
      this.$emit('saving',true)
      await FbStore.updateCurrentEmployerProgram({
        demoDayAgenda:{
          events:events.filter(obj => Object.keys(obj).length !== 0),
          lastUpdate:firebase.firestore.FieldValue.serverTimestamp()
        }
      })
      this.$emit('saving',false)
      this.$emit('updateSavedDate', firebase.firestore.Timestamp.now())
    })
  }
  created(){
    // set ref to update based on user type
  }
  onAgendaChange$!:Subject<{event:{name:string,msg:EventItem[]},data:undefined}>;
  ref!:firebase.firestore.DocumentReference
    agendaItems:EventItem[] = FbStore.currentEmployerProgram?.demoDayAgenda?.events || [emptyAgenda]
}
</script>