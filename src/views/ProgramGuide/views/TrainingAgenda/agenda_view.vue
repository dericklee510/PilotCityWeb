<template>
  <v-container class="agenda-view">
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="agenda-view__container"
        cols="10"
      >
        <img
          class="pc-vh-center agenda-view__icon"
          src="@/assets/icons/agenda.png"
        >
        <!-- TITLE -->
    
        <v-row 
          justify="center"
          class="agenda-view__title"
          no-gutters
        >
          TRAINING DAY AGENDA
        </v-row>
    
        <v-row
          justify="center"
          class="mr-auto ml-auto businessmodelcanvas_view2__description"
        >
          Mark agenda items as you complete them.
        </v-row>
        <AgendaView
          v-model="agendaItems"
          @finish="onFinish"
        />
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {AgendaView} from "@/views/ProgramGuide/components/"
import { FbStore } from '../../../../store';
import {firebase} from '@/firebase/init'
@Component({
  components: {
    AgendaView
  }
})
export default class TrainingDayAgendaView extends Vue{
  agendaItems = FbStore.currentTeacherProgramData!.trainingDayAgenda?.events || []
  onFinish(){
    FbStore.updateCurrentProject({
      [`programSequence.${'train'}`]:firebase.firestore.FieldValue.serverTimestamp()
      
    })
  }
}
</script>