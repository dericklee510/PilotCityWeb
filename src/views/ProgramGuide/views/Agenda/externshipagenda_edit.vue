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
        EXTERNSHIP DAY AGENDA
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

      <Agenda v-model="entries" />
    </v-col>
  </v-row>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { PCmultiinput } from '@/components/inputs'
import {EventItem} from "@/store/Database/types/utilities"
import {Agenda} from "@/views/ProgramGuide/components/"
const emptyAgenda:Omit<EventItem,'completed'> = {
  name:"",
  duration:"",
  description:""
}

@Component({
  components:{
    Agenda
  }
})
export default class ExternshipAgendaEdit extends Vue{
    entries:Omit<EventItem,'completed'>[] = [emptyAgenda]
}
</script>