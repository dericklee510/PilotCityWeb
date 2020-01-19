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
        HACK DAY AGENDA
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
      <Agenda v-model="entries" />
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Agenda } from '../../components'
import { EventItem } from '@/store/Database/types/utilities'
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
export default class agenda extends Vue{
    entries:Omit<EventItem,'completed'>[] = [emptyAgenda]
}
</script>