<template>
  <agenda-view
    v-model="agendaItems"
    @finish="[onSubmit, $emit('nextNode')]"
  />
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AgendaView } from "../../components";
import { FbStore } from '../../../../store';
import {firebase} from '@/firebase/init'
@Component({
  components: {
    AgendaView
  }
})
export default class DemoAgendaView extends Vue {
  agendaItems = FbStore.currentEmployerProgram?.demoDayAgenda?.events || []
  onSubmit(){
      FbStore.updateCurrentProject({
         [`programSequence.${'demoDay'}`]:firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
}
</script>