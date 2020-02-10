<template>
  <NextNode
    v-slot="{setNext}"
    @CallbackComplete="$emit('nextNode')"
  > 
    <AgendaView
      v-model="agendaItems"
      @finish="setNext(onFinish)"
    />
  </NextNode>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {AgendaView} from "@/views/ProgramGuide/components/"
import { FbStore } from '../../../../store';
import {firebase} from '@/firebase/init'
import { EventItem } from '../../../../store/Database/types/utilities';
import { NextNode } from "@/views/ProgramGuide/components"
@Component({
  components: {
    AgendaView,
    NextNode
  }
})
export default class TrainingDayAgendaView extends Vue{
  agendaItems:EventItem[] = FbStore.currentTeacherProgramData?.trainingDayAgenda?.events || FbStore.currentEmployerProgram!.trainingDayTemplate?.events || []
  async onFinish(){
    if(FbStore.currentProject!.programSequence && Object.keys(FbStore.currentProject!.programSequence).length)
    await FbStore.updateCurrentProject({
      [`programSequence.${'train'}`]:firebase.firestore.FieldValue.serverTimestamp()
      
    });else{
    const ref = FbStore.firestore.collection("Project").doc(FbStore.currentProject!.projectId)
     await ref.update(({
      programSequence:{train:true}
    }))
    await ref.update(({
      programSequence:{train:firebase.firestore.FieldValue.serverTimestamp()}
    }))
    }
    this.$emit('nextNode')  
  }
}
</script>