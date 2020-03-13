<template>
  <v-row
    justify="center"
    no-gutters
  >
    <v-col
      cols="12"
      class="pb-9"
    >
      <v-row
        class="programguide__labels"
        justify="center"
        no-gutters
      >
        <v-col
          cols="1"
          md="1"
          class="d-none d-lg-inline-block"
        />
        <v-col
          cols="12"
          md="7"
          class="d-none d-lg-inline-block"
        >
          Name
        </v-col>
        <v-col
          cols="12"
          md="2"
          class="d-none d-lg-inline-block"
        >
          Rating
        </v-col>
      </v-row>


      <Rating
        v-model="entries"
        v-slot:link="{snippet}"
        @ratingChange="$emit('ratingChange',$event)"
      >
        <v-col
          cols="1"
          md="1"
          @click="$emit('changePage', snippet)"
        >
          <v-btn
            dark
            depressed
            x-small
          >
            View
          </v-btn>
        </v-col>
      </Rating>
    </v-col>
  </v-row>
</template>


 


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Rating } from "../../components";
import { team_snippet } from "../../components";
import { FbStore } from "../../../../store";
import { doc } from "rxfire/firestore";
import { Classroom, Project } from "../../../../store/Database/types/types";
import { spliceOrPush } from "../../../../utilities/array";
import { Subscription } from "rxjs";
import { firebase } from "@/firebase/init";
import { Oops } from "@/views/ProgramGuide/components"
import { Prop } from 'vue-property-decorator';
@Component({
  components: {
    Rating,
    Oops
  }
})
export default class elevator_view extends Vue{
    
  @Prop()
  entries!: team_snippet[]
  
}
</script>