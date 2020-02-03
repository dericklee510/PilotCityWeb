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
          EXTERNSHIP DAY AGENDA
          <i
            v-if="citizenType == 'employer'"
            class="far fa-edit edit-icon__externship"
            @click="toggleView"
          />
        </v-row>
        <v-row
          justify="center"
          no-gutters
          class="businessmodelcanvas_view2__description"
        >
          <v-col
            cols="9"
            class="pt-3 pb-3 text-center"
          >
            Mark agenda items as you complete them.
          </v-col>
        </v-row>
        <AgendaView
          v-model="agendaItems"
          class="pc-externship"
        />
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
  
  agendaItems:EventItem[] = FbStore.currentEmployerProgram?.externshipDayAgenda?.events || []
  get isAgendaComplete(){
    return this.agendaItems.map(item => item.completed).every(isTrue => isTrue)
  }
  get citizenType() {
    return FbStore.userCitizenType;
  }
  toggleView(){
    this.$router.push({name: 'emp-externship-agenda-edit'})
  }
}
</script>