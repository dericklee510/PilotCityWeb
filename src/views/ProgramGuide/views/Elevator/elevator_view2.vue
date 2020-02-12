<template>
  <v-row justify="center">
    <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 elevator_view2__description__label">Elevator Pitch</v-row> -->
    <Rating
      v-model="syncPitch"
      preview
      @ratingChange="$emit('ratingChange',$event)"
    >
      <template v-slot:header>
        <span
          class="elevator_view2__description__label"
        >
          Elevator Pitch
        </span>
      </template>
        
      <template v-slot:body="{item_preview}">
        <v-textarea
          :value="item_preview"
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
import { Prop } from 'vue-property-decorator'
@Component({
  components:{
    Rating
  }
})
export default class elevator_view2 extends Vue{
  @Prop()
  pitch!:team_snippet
  get syncPitch(){
    return [this.pitch]
  }
}
</script>