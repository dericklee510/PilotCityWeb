<template>
  <v-row justify="center">
    <img
      id="trainingday__icon"
      class="trainingday__image"
      src="@/assets/icons/agenda.png"
    >

    <v-col
      id="trainingday__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto trainingday__title"
      >
        Training Day Agenda
      </v-row>

      <v-col
        cols="12"
        class="trainingday__borderline"
      />
      <Agenda v-model="entries" />
    </v-col>
  </v-row>
</template>




<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {Agenda} from "@/views/ProgramGuide/components"
import { EventItem } from '../../../../store/Database/types/utilities'


@Component({
  components:{
    Agenda
  }
})
export default class TrainingDay extends Vue{
    entries:EventItem[] = [{} as EventItem]
}
</script>