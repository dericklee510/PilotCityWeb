<template>
  <v-row justify="center">
    <img
      id="elevator_view2__icon"
      src="@/assets/elevator_view.png"
    >

    <v-col
      id="elevator_view2__contain"
      cols="7"
    >
      <v-row>
        <i
          id="elevator_view2__backbuttonicon"
          class="fas fa-chevron-left"
        ><button class="elevator_view2__backbutton">Back</button></i>
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto elevator_view2__title"
      >
        VIEW 60-SECOND ELEVATOR PITCH
      </v-row>

      <v-col
        id="elevator_view2__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto elevator_view2__description"
      >
        Before you run into a customer or investor, you have to know your solution in detail. Write out what you will say in an elevator pitch.
      </v-row>

      <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 elevator_view2__description__label">Elevator Pitch</v-row> -->
      <rating
        v-model="pitch"
        preview
      >
        <template v-slot:header>
          <span
            class="elevator_view2__description__label"
          >
            Elevator Pitch
          </span>
        </template>
        
        <template v-slot:body>
          <v-textarea
            placeholder="My pitch is..."
            :disabled="true"
            class="pt-1 pb-12 pl-5 pr-4 elevator_view2__paragraph"
          />
        </template>
      </rating>
    </v-col>
  </v-row>

  <!-- <v-col class="mr-auto ml-auto" cols="5"><button class="elevator_view2__button mb-10">SAVE</button></v-col> -->
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Rating } from '../../components'
import { team_snippet } from '../../components/Rating.vue'
@Component({
  components:{
    Rating
  }
})
export default class elevator_view2 extends Vue{
   pitch= [{
     name:"HEASDER",
     item_preview: " My pitch is ...",
     rating:0
   }]
}
</script>