<template>
  <v-container class="agenda-view">
    <v-row
      justify="center"
      no-gutters
    >
      <v-col
        class="agenda-view__container"
        cols="7"
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
          EXTERNSHIP DAY AGENDA
        </v-row>
    
        <v-row
          justify="center"
          class="mr-auto ml-auto businessmodelcanvas_view2__description"
        >
          Enter your agenda for the event or activity.
        </v-row>
    
        <v-col
          v-for="(item,index) in agendaItems"
          :key="item+index"
        >
          <v-row
            class="agenda-view__checkbox"
            no-gutters
          >
            <v-col
              cols="2"
              class="agenda-view__checkbox-input"
            >
              <input
                :id="'checkbox'+index"
                v-model="item.completed"
                type="checkbox"
              >
            </v-col>
            <v-col
              cols="10"
              class="agenda-view__checkbox-label"
            >
              <v-col>
                <label for="checkbox+index">
                  <input
                    v-model="item.name"
                    class="agenda-view__item"
                    disabled="true"
                    placeholder="Item"
                  >
                </label>
              </v-col>
            </v-col>
          </v-row>
          <v-row no-gutters>
            <v-col cols="2" />
          
            <v-col cols="10">
              <v-col>
                <input
                  v-model="item.duration"
                  disabled="true"
                  class="agenda-view__duration"
                  placeholder="Duration"
                >
              </v-col>
              <v-col>
                <input
                  v-model="item.description"
                  disabled="true"
                  class="agenda-view__description"
                  placeholder="Description"
                >
              </v-col>
            </v-col>
          </v-row>
        </v-col>
        <v-row
          no-gutters
          justify="center"
        >
          <v-col
            cols="6"
            sm="4"
            md="2"
          >
            <v-btn
              class="agenda-view__button mb-10"
              :disabled="!isAgendaComplete"
            >
              FINISH
            </v-btn>
          </v-col>  
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { EventItem } from '@/store/Database/types/utilities'
import { FbStore } from '../../../../store'
@Component
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