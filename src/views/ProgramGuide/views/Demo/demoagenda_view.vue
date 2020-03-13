<template>
  <NextNode
    v-slot="{setNext}"
    @CallbackComplete="$emit('nextNode')"
  > 
    <AgendaView
      v-model="agendaItems"
      :completed="completed"
      @finish="setNext(onSubmit)"
    />
  </NextNode>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AgendaView } from "../../components";
import { FbStore } from '../../../../store';
import {firebase} from '@/firebase/init'
import {NextNode} from '@/views/ProgramGuide/components'
@Component({
  components: {
    AgendaView,
    NextNode
  }
})
export default class DemoAgendaView extends Vue {
  agendaItems = FbStore.currentEmployerProgram?.demoDayAgenda?.events || []
  get completed(){
    return FbStore.currentProject?.programSequence.demoDay
  }
  async onSubmit(){
      FbStore.updateCurrentProject({
         [`programSequence.${'demoDay'}`]:firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
}
</script>