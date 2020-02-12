<template>
  <v-row no-gutters>
    <Rating
      v-model="entries"
      v-slot:link="{snippet}"
      preview
      @ratingChange="$emit('ratingChange',$event)"
    >
      <v-col
        cols="1"
        class="businesscanvas__actnbtn ml-0"
        @click="$emit('changePage',snippet)"
      >
        <div>View</div>
      </v-col>
    </Rating>
    <Oops v-if="!entries.length" />
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Rating } from '../../components'
import { team_snippet } from '../../components/Rating.vue'
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { spliceOrPush } from "../../../../utilities/array";
import { Subscription } from "rxjs";
import { firebase } from "@/firebase/init";
import { Oops } from "@/views/ProgramGuide/components"
import { Prop } from 'vue-property-decorator';
@Component({
  components:{
    Rating, 
    Oops
  }
})
export default class elevator_view extends Vue{
    
  @Prop()
  entries!: team_snippet[]
  
}
</script>