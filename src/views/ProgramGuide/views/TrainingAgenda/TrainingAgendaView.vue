<template>
  <AgendaView
    v-model="agendaItems"
    class="pc-project"
    @finish="[onFinish, $emit('nextNode')]"
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
  onFinish(){
    FbStore.updateCurrentProject({
      [`programSequence.${'train'}`]:firebase.firestore.FieldValue.serverTimestamp()
      
    })
  }
}
</script>