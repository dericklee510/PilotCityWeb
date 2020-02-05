<template>
  <agenda-view
    v-model="agendaItems"
    @finish="[onFinish, $emit('nextNode')]"
  />
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AgendaView } from "../../components";
import { FbStore } from '../../../../store';
import {firebase} from '@/firebase/init';
@Component({
  components: {
    AgendaView
  }
})
export default class agenda extends Vue {
  onFinish(){
    FbStore.updateCurrentProject({
      [`programSequence.${'hackDay'}`]:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
  get agendaItems(){
    return FbStore.currentTeacherProgramData?.hackDayAgenda?.events || FbStore.currentEmployerProgram?.masterHackDayAgenda?.events
  }
}
</script>