<template>
  <v-row justify="center">
    <img
      id="agenda_view__icon"
      class="agenda_view__image"
      src="@/assets/icons/agenda.png"
    >

    <v-col
      id="agenda_view__contain"
      cols="7"
    >
      <!-- TITLE -->

      <v-row
        justify="center"
        class="mr-auto ml-auto agenda_view__title"
      >
        DEMO DAY AGENDA
      </v-row>

      <!-- BORDERLINE -->

      <v-col
        cols="12"
        class="agenda_view__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_view2__description"
      >
        Enter your agenda for the event or activity.
      </v-row>
      <agenda-view v-model="agendaItems" />
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { AgendaView } from "../../components";
@Component({
  components: {
    AgendaView
  }
})
export default class DemoAgendaView extends Vue {
  agendaItems = [...AgendaView.emptyAgenda,{
    name:"stuff",
    description:"",
    duration:"",
    completed:true
  }
  ,{
    name:"stuff",
    description:"",
    duration:"",
    completed:true
  }];
}
</script>