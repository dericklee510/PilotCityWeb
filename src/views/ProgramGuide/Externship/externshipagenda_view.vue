<template>
  <v-row justify="center">
    <img
      id="agenda_view__icon"
      class="agenda_view__image"
      src="@/assets/agenda.png"
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
        EXTERNSHIP DAY AGENDA
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

      <!-- DESCRIPTION -->

      <!-- <v-row 
            justify="center" 
            class="mr-auto ml-auto agenda_view__description">As you practice, use and apply the employer's product or service, log how many minutes you use it each time.
        </v-row> -->



      <!-- AGENDA LOGISTICS

<v-row class="agenda_view__logistics col-8 mr-auto ml-auto mt-10 pr-auto pl-auto pt-0 pb-0">


        <v-column class="agenda_view__poop">

            <v-row id="agenda_view__borderline" class="agenda_view__logisticslabel pl-4 pt-4 pb-4">DATE:<input placeholder="Enter date here" class="ml-4 agenda_view__item-input"></v-row>

            <v-row id="agenda_view__borderline" class="agenda_view__logisticslabel pl-4 pt-4 pb-4">TIME:<input placeholder="Enter time here" class="ml-4 agenda_view__item-input"></v-row>

            <v-row class="agenda_view__logisticslabel pl-4 pb-4 pt-4">LOCATION:<input placeholder="Enter location here" class="ml-4 agenda_view__item-input"></v-row>
        
        </v-column>

        </v-row> -->


      <!-- AGENDA ITEM -->

      <v-row class="mt-10 pt-0 pb-0">
        <v-col
          id="agenda_view__checkbox"
          cols="2"
        >
          <input type="checkbox">
        </v-col>

        <v-col
          cols="8"
          class="agenda_view__item mr-auto ml-auto "
        >
          <v-row id="agenda_view__borderline">
            <input
              disabled="true"
              placeholder="Item"
              class="agenda_view__item-input__header pt-3 pb-3 pl-4 pr-4"
            >
          </v-row>
          <v-row id="agenda_view__borderline">
            <input
              disabled="true"
              placeholder="Duration"
              class="agenda_view__item-input__duration pt-2 pb-2 pl-4 pr-4"
            >
          </v-row>
          <v-row>
            <input
              disabled="true"
              placeholder="Description"
              class="agenda_view__item-input__description pt-3 pb-12 pl-4 pr-4"
            >
          </v-row>
        </v-col>

        <v-col cols="2" />

        <!-- <v-col cols="2"><i class="mt-2 ml-3 far fa-trash-alt agenda_view__trashicon"></i></v-col> -->
      </v-row>





      <!-- AGENDA ITEM -->

      <v-row class="mt-10 pt-0 pb-0">
        <v-col
          id="agenda_view__checkbox"
          cols="2"
        >
          <input type="checkbox">
        </v-col>

        <v-col
          cols="8"
          class="agenda_view__item mr-auto ml-auto "
        >
          <v-row id="agenda_view__borderline">
            <input
              disabled="true"
              placeholder="Item"
              class="agenda_view__item-input__header pt-3 pb-3 pl-4 pr-4"
            >
          </v-row>
          <v-row id="agenda_view__borderline">
            <input
              disabled="true"
              placeholder="Duration"
              class="agenda_view__item-input__duration pt-2 pb-2 pl-4 pr-4"
            >
          </v-row>
          <v-row>
            <input
              disabled="true"
              placeholder="Description"
              class="agenda_view__item-input__description pt-3 pb-12 pl-4 pr-4"
            >
          </v-row>
        </v-col>

        <v-col cols="2" />

        <!-- <v-col cols="2"><i class="mt-2 ml-3 far fa-trash-alt agenda_view__trashicon"></i></v-col> -->
      </v-row>


      <!-- AGENDA ITEM -->

      <v-row class="mt-10 pt-0 pb-0">
        <v-col
          id="agenda_view__checkbox"
          cols="2"
        >
          <input type="checkbox">
        </v-col>

        <v-col
          cols="8"
          class="agenda_view__item mr-auto ml-auto "
        >
          <v-row id="agenda_view__borderline">
            <input
              disabled="true"
              placeholder="Item"
              class="agenda_view__item-input__header pt-3 pb-3 pl-4 pr-4"
            >
          </v-row>
          <v-row id="agenda_view__borderline">
            <input
              disabled="true"
              placeholder="Duration"
              class="agenda_view__item-input__duration pt-2 pb-2 pl-4 pr-4"
            >
          </v-row>
          <v-row>
            <input
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

<v-row class="mt-10 pt-0 pb-0">        

    <v-col class="agenda_view__item-box" cols="2"></v-col>

    <v-col cols="8" class="agenda_view__item-add mr-auto ml-auto mb-12">+

        <v-row></v-row>

    </v-col>

    <v-col cols="2"></v-col>


</v-row> -->


      <v-col
        class="mr-auto ml-auto"
        cols="5"
      >
        <button class="agenda_view__button mb-10">
          FINISH
        </button>
      </v-col>











      <!-- LOG TIME / COULD DELETE -->

      <!-- <v-row justify="center" class="mr-auto ml-auto mt-10 mb-5"><input class="agenda_view__input" placeholder="0m"></v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-5 mb-5"><button class="agenda_view__button">LOG TIME</button></v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-10 agenda_view__label">LOGGED TIME</v-row>

        <v-row justify="center" class="mr-auto ml-auto mt-2 mb-7 agenda_view__calculated">1h 30m</v-row> -->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class agenda extends Vue{
    
}
</script>