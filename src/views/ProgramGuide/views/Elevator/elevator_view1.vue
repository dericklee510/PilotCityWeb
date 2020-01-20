<template>
  <Rating
    v-model="teams"
    v-slot:link
  >
    <v-col
      cols="1"
      class="businesscanvas__actnbtn"
      @click="$emit('changePage')"
    >
      <div>View</div>
    </v-col>
  </Rating>
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
export default class elevator_view extends Vue{
     teams:team_snippet[] = [
      {
        id:"0",
        name:"Data Analysis for the Alameda Library",
        item_preview:" An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
        rating:0
      },
      {
        id:"1",
        name:"Data Analysis for the Alameda Library",
        item_preview:" An autonomous residential vehicle (RV) for the homeless in the San Francisco Bay Area",
        rating:0
      }
    ]
}
</script>