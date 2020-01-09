<template>
  <v-row justify="center">
    <img
      id="agenda__icon"
      class="agenda__image"
      src="@/assets/icons/agenda.png"
    >

    <v-col
      id="agenda__contain"
      cols="7"
    >
      <!-- TITLE -->

      <v-row
        justify="center"
        class="mr-auto ml-auto agenda__title"
      >
        TRAINING DAY AGENDA
      </v-row>

      <!-- BORDERLINE -->

      <v-col
        cols="12"
        class="agenda__borderline"
      />
      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_view2__description"
      >
        Enter your agenda for the event or activity.
      </v-row>

      <!-- DESCRIPTION -->

      <!-- <v-row 
            justify="center" 
            class="mr-auto ml-auto agenda__description">As you practice, use and apply the employer's product or service, log how many minutes you use it each time.
        </v-row> -->



      <!-- AGENDA LOGISTICS

<v-row class="agenda__logistics col-8 mr-auto ml-auto mt-10 pr-auto pl-auto pt-0 pb-0">


        <v-column class="agenda__poop">

            <v-row id="agenda__borderline" class="agenda__logisticslabel pl-4 pt-4 pb-4">DATE:<input placeholder="Enter date here" class="ml-4 agenda__item-input"></v-row>

            <v-row id="agenda__borderline" class="agenda__logisticslabel pl-4 pt-4 pb-4">TIME:<input placeholder="Enter time here" class="ml-4 agenda__item-input"></v-row>

            <v-row class="agenda__logisticslabel pl-4 pb-4 pt-4">LOCATION:<input placeholder="Enter location here" class="ml-4 agenda__item-input"></v-row>
        
        </v-column>

        </v-row> -->

      <!-- AGENDA ITEM -->
      <Agenda v-if="getRole == 'Student'" />
      <!-- require getRole Utility -->
      
      <AgendaView v-else />
      <!-- LOG TIME / COULD DELETE -->

      <!-- <v-row justify="center" class="mr-auto ml-auto mt-10 mb-5"><input class="agenda__input" placeholder="0m"></v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-5 mb-5"><button class="agenda__button">LOG TIME</button></v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-10 agenda__label">LOGGED TIME</v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-2 mb-7 agenda__calculated">1h 30m</v-row> -->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {EventItem} from "@/store/Database/types/utilities"
import { PCmultiinput } from '../../../components/inputs'
const emptyAgenda:Omit<EventItem,'completed'> = {
  name:"",
  duration:"",
  description:""
}
const app = PCmultiinput.createMultiInput(emptyAgenda)
@Component
export default class TrainingAgenda extends Vue{
    
}
</script>