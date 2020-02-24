<template>
  <NextNode
    v-slot="{setNext}"
    @CallbackComplete="$emit('nextNode')"
  > 
    <AgendaView
      v-model="agendaItems"
      :completed="completed"
      @finish="setNext(onFinish)"
    />
  </NextNode>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AgendaView } from "../../components";
import { FbStore } from '../../../../store';
import {firebase} from '@/firebase/init';
import { NextNode } from "@/views/ProgramGuide/components"
@Component({
  components: {
    AgendaView,
    NextNode
  }
})
export default class agenda extends Vue {
   get completed(){
    return FbStore.currentProject?.programSequence.hackDay
  }
  async onFinish(){
    await FbStore.updateCurrentProject({
      [`programSequence.${'hackDay'}`]:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  agendaItems = FbStore.currentTeacherProgramData?.hackDayAgenda?.events || FbStore.currentEmployerProgram?.masterHackDayAgenda?.events || []
}
</script>