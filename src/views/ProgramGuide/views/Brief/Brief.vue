<template>
  <div class="programbrief__dark">
    <v-row class="programbrief__container">
      <v-col
        cols="2"
        md="1"
      />
      <v-col
        cols="8"
        md="10"
      >
        <v-col class="programbrief__tile">
          Program Briefs
        </v-col>
        
        <v-col
          v-for="program in programBriefs"
          :key="program.linkName"
        >
          <BriefCard :value="program" />
        </v-col>

        <!-- <v-col>
          <BriefCard />
        </v-col> -->
      </v-col>
      <v-col
        cols="2"
        md="1"
      />
    </v-row>
  </div>
</template>
 
    
    

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BriefCard from './components/BriefCard.vue'
import { PCmultiinput } from '../../../../components/inputs'
import { NamedLink } from '../../../../store/Database/types/utilities'
import { FbStore } from '../../../../store'
const app = PCmultiinput.createMultiInput<NamedLink>()
@Component(({
    components: {
        BriefCard,
        multiInput:app
    }
}))
export default class Brief extends Vue{

  get programBriefs(){
    return FbStore.currentEmployerProgram!.programBrief!
  }
}
</script>]