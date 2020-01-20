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
        <v-row
          justify="center"
          class="agenda-view__title"
          no-gutters
        >
          EXTERNSHIP DAY AGENDA
        </v-row>
        <v-row
          justify="center"
          class="mr-auto ml-auto businessmodelcanvas_view2__description"
        >
          Mark agenda items as you complete them.
        </v-row>
        <AgendaView v-model="agendaItems" />
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { EventItem } from '@/store/Database/types/utilities'
import { FbStore } from '@/store'
import { AgendaView } from '../../components'
@Component({
components:{
AgendaView

}
})
export default class ExternshipAgenda extends Vue{
  created(){
    // const agendaItems
  }
  
  agendaItems:EventItem[] = FbStore.currentEmployerProgram?.externshipDayAgenda?.events! || []
  get isAgendaComplete(){
    return this.agendaItems.map(item => item.completed).every(isTrue => isTrue)
  }
}
</script>