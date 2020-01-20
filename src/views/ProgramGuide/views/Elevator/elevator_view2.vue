<template>
  <v-row justify="center">
    <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 elevator_view2__description__label">Elevator Pitch</v-row> -->
    <Rating
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
    </Rating>
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