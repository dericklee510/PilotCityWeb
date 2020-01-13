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
                  placeholder="Duration"
                >
              </v-col>
              <v-col>
                <input
                  v-model="item.description"
                  disabled="true"
                  placeholder="Description"
                >
              </v-col>
            </v-col>
          </v-row>
        </v-col>
    
        <v-row
          v-for="(item,index) in agendaItems"
          :key="index"
          class="mt-10 pt-0 pb-0"
        >
          <v-col
            cols="2"
          >
            <input
              type="checkbox"
            >
          </v-col>
    
          <v-col
            cols="8"
            class="agenda_view__item mr-auto ml-auto "
          >
            <v-row id="agenda_view__borderline">
              <input
                v-model="item.name"
                disabled="true"
                placeholder="Item"
                class="agenda_view__item-input__header pt-3 pb-3 pl-4 pr-4"
              >
            </v-row>
            <v-row id="agenda_view__borderline" />
            <v-row>
              <input
                v-model="item.description"
                disabled="true"
                placeholder="Description"
                class="agenda_view__item-input__description pt-3 pb-12 pl-4 pr-4"
              >
            </v-row>
          </v-col>
    
          <v-col cols="2" />
    
          <!-- <v-col cols="2"><i class="mt-2 ml-3 far fa-trash-alt agenda_view__trashicon"></i></v-col> -->
        </v-row>
    
    
    
        <!-- ADD AGENDA ITEM
    
   
    
    
        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <v-btn
            class="agenda_view__button mb-10"
            :disabled="!isAgendaComplete"
          >
            FINISH
          </v-btn>
        </v-col>
    
    
    
    
    
    
    
    
    
    
    
        <!-- LOG TIME / COULD DELETE -->
    
        <!-- <v-row justify="center" class="mr-auto ml-auto mt-10 mb-5"><input class="agenda_view__input" placeholder="0m"></v-row>
    
          <v-row justify="center" class="mr-auto ml-auto mt-5 mb-5"><button class="agenda_view__button">LOG TIME</button></v-row>
    
          <v-row justify="center" class="mr-auto ml-auto mt-10 agenda_view__label">LOGGED TIME</v-row>
    
          <v-row justify="center" class="mr-auto ml-auto mt-2 mb-7 agenda_view__calculated">1h 30m</v-row> -->
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { EventItem } from '@/store/Database/types/utilities'
@Component
export default class ExternshipAgenda extends Vue{
  agendaItems:EventItem[] = [{
  name:"",
  duration: "",
  description:"",
  completed:false
}]
  get isAgendaComplete(){
    return this.agendaItems.map(item => item.completed).every(isTrue => isTrue)
  }
}
</script>