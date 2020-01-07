<template>
  <v-container>
    <v-row
      v-for="(item,index) in syncedAgenda"
      :key="index"
      class="mt-10 pt-0 pb-0"
    >
      <v-col
        id="agenda_view__checkbox"
        cols="2"
      >
        <input
          v-model="item.completed"
          type="checkbox"
        >
      </v-col>

      <v-col
        cols="8"
        class="agenda_view__item mr-auto ml-auto"
      >
        <v-row id="agenda_view__borderline">
          <input
            v-model="item.name"
            disabled="true"
            placeholder="Item"
            class="agenda_view__item-input__header pt-3 pb-3 pl-4 pr-4"
          >
        </v-row>
        <v-row id="agenda_view__borderline">
          <input
            v-model="item.duration"
            disabled="true"
            placeholder="Duration"
            class="agenda_view__item-input__duration pt-2 pb-2 pl-4 pr-4"
          >
        </v-row>
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

<v-row class="mt-10 pt-0 pb-0">        

    <v-col class="agenda_view__item-box" cols="2"></v-col>

    <v-col cols="8" class="agenda_view__item-add mr-auto ml-auto mb-12">+

        <v-row></v-row>

    </v-col>

    <v-col cols="2"></v-col>


    </v-row>-->

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
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import "reflect-metadata";
import Component from "vue-class-component";
import { Event } from "../../../store/Database/types/utilities";
import { PropSync, Watch } from "vue-property-decorator";
@Component
export default class AgendaView extends Vue {
  @PropSync("value")
  syncedAgenda!: Event[];
  
  static emptyAgenda: Event[] = [
    {
      name: "",
      duration: "",
      description: "",
      completed: false
    }
  ];
  get isAgendaComplete() {
    return this.syncedAgenda
      .map(item => item.completed)
      .every(isTrue => isTrue);
  }
}
</script>