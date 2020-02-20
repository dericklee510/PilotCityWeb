<template>
  <v-row justify="center">
    <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 elevator_view2__description__label">Elevator Pitch</v-row> -->
    <v-col>
      <v-row>
        <template v-slot:header>
          <span
            class="elevator_view2__description__label"
          >
            Elevator Pitch
          </span>
        </template>

        <Rating
          v-model="syncPitch"
          preview
          @ratingChange="$emit('ratingChange',$event)"
        />
      </v-row>

      <v-row>
        <template v-slot:body="{item_preview}">
          <v-textarea
            :value="item_preview"
            placeholder="My pitch is..."

            class="elevator_view2__paragraph"
          /> 
        </template>
      </v-row>


      <!-- <v-row
            v-if="readonly==true"
            justify="start"
            class="mr-auto ml-auto mb-12 mt-3 businessmodelcanvas_enter__paragraph"
            style="padding-left: 0px"
          >
            {{ syncedCanvas.problem }}
            <div>
              <div
                v-if="!syncedCanvas.problem"
                class="businessmodelcanvas_enter__paragraph"
                style="width:100%;"
              >Nothing just yet</div>
            </div>
          </v-row> -->
    </v-col>
  </v-row>

  <!-- <v-col class="mr-auto ml-auto" cols="5"><button class="elevator_view2__button mb-10">SAVE</button></v-col> -->
</template>








<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Rating, team_snippet } from '../../components'
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