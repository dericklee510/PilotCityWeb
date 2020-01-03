<template>
  <v-row justify="center">
    <img
      id="agenda__icon"
      class="agenda__image"
      src="@/assets/agenda.png"
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

      <v-row
        v-for="entry in entries"
        :key="entry.id"
        class="mt-10 pt-0 pb-0"
      >
        <v-col
          class="agenda__item-box"
          cols="2"
        />

        <v-col
          cols="8"
          class="agenda__item mr-auto ml-auto "
        >
          <v-row id="agenda__borderline">
            <input
              v-model="entry.name"
              placeholder="Item"
              class="agenda__item-input__header pt-3 pb-3 pl-4 pr-4"
            >
          </v-row>
          <v-row id="agenda__borderline">
            <input
              v-model="entry.duration"
              placeholder="Duration"
              class="agenda__item-input__duration pt-2 pb-2 pl-4 pr-4"
            >
          </v-row>
          <v-row>
            <input
              v-model="entry.description"
              placeholder="Description"
              class="agenda__item-input__description pt-3 pb-12 pl-4 pr-4"
            >
          </v-row>
        </v-col>

        <v-col cols="2">
          <i
            v-if="entries.length>1"
            class="mt-2 ml-3 far fa-trash-alt agenda__trashicon"
            @click="deleteEntry(entry.id)"
          />
        </v-col>
      </v-row>

      <!-- ADD AGENDA ITEM -->

      <v-row class="mt-10 pt-0 pb-0">
        <v-col
          class="agenda__item-box"
          cols="2"
        />

        <v-col
          cols="8"
          class="agenda__item-add mr-auto ml-auto mb-12"
          @click="newEntry"
        >
          +

          <v-row />
        </v-col>

        <v-col cols="2" />
      </v-row>
    </v-col>
  </v-row>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { PCmultiinput } from '@/components/inputs'
import {Event} from "@/store/Database/types/utilities"

const emptyAgenda:Omit<Event,'completed'> = {
  name:"",
  duration:"",
  description:""
}
const app = PCmultiinput.createMultiInput(emptyAgenda)
@Component
export default class Agenda extends app{
    
}
</script>