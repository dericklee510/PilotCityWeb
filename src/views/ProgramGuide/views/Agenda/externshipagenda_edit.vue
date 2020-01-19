<template>
  <v-container>
    <v-row justify="center">
      <img
        id="agenda__icon"
        class="agenda__image"
        src="@/assets/icons/agenda.png"
      >
    
      <v-col
        id="agenda__contain"
        cols="10"
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
          Enter agenda for Externship event.
        </v-row>
    
        <Agenda v-model="entries" />
      </v-col>
    </v-row>
  </v-container>
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
  created(){
    // set ref to update based on user type
  }
  ref!:firebase.firestore.DocumentReference
    entries:Omit<EventItem,'completed'>[] = [emptyAgenda]
}
</script>