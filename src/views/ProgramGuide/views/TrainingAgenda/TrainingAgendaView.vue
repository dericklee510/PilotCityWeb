<template>
  <AgendaView
    v-model="agendaItems"
    class="pc-project"
    @finish="onFinish"
  />
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {AgendaView} from "@/views/ProgramGuide/components/"
import { FbStore } from '../../../../store';
import {firebase} from '@/firebase/init'
import { EventItem } from '../../../../store/Database/types/utilities';
@Component({
  components: {
    AgendaView
  }
})
export default class TrainingDayAgendaView extends Vue{
  agendaItems:EventItem[] = FbStore.currentTeacherProgramData?.trainingDayAgenda?.events || FbStore.currentEmployerProgram!.trainingDayTemplate?.events || []
  async onFinish(){
    if(Object.keys(FbStore.currentProject!.programSequence).length)
    await FbStore.updateCurrentProject({
      [`programSequence.${'train'}`]:firebase.firestore.FieldValue.serverTimestamp()
      
    });else{
    const batch = FbStore.firestore.batch()
     batch.update(FbStore.firestore.collection("Project").doc(FbStore.currentProject!.projectId),({
      programSequence:{train:true}
    }))
    batch.update(FbStore.firestore.collection("Project").doc(FbStore.currentProject!.projectId),({
      programSequence:{train:firebase.firestore.FieldValue.serverTimestamp()}
    }))
    await batch.commit()
    }
    this.$emit('nextNode')  
  }
}
</script>