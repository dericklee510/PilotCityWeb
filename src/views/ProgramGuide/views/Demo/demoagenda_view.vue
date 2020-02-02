<template>
  <v-container class="agenda-view">
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="agenda-view__container"
        cols="8"
      >
        <img
          class="pc-vh-center agenda-view__icon"
          src="@/assets/icons/agenda.png"
        >
        <v-row
          justify="center"
          class="agenda-view__title"
          no-gutters
        >
          DEMO DAY AGENDA
          <i
            v-if="citizenType=='Teacher'|| citizenType=='Employer'"
            class="far fa-edit edit-icon__project"
            @click="toggleView"
          />
        </v-row>
        <v-row
          justify="center"
          class="mr-auto ml-auto businessmodelcanvas_view2__description"
        >
          Enter your agenda for the event or activity.
        </v-row>
        <agenda-view
          v-model="agendaItems"
          @finish="onSubmit"
        />
      </v-col>
    </v-row>
  </v-container>
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
  get citizenType(): string {
    return localStorage.citizenType;
  }
  toggleView(){
    if(localStorage.citizenType == 'Employer')
      this.$router.push({name: 'emp-project-demoagenda-edit'})
    if(localStorage.citizenType == 'Teacher')
      this.$router.push({name: 'teach-project-demoagenda-edit'})
  }
  onSubmit(){
      FbStore.updateCurrentProject({
         [`programSequence.${'demoDay'}`]:firebase.firestore.FieldValue.serverTimestamp(),
      })
    }
}
</script>