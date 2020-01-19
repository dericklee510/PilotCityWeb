<template>
  <div class="programbrief__dark">
    <v-container>
      <v-row class="programbrief__container">
        <v-col cols="12">
          <v-col class="programbrief__tile">
            Program Briefs
          </v-col>
          <v-col />
        </v-col>
        <v-col>
          <BriefCard_edit
            ref="Card"
            v-model="entries"
          />
        </v-col>

        <v-col>
          <button
            class="programbrief__addbrief"
            @click="addEntry"
          >
            +
          </button>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
 
    
    

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import BriefCard_edit from './components/BriefCard_edit.vue'
import { PCmultiinput } from '@/components/inputs'
import { NamedLink } from '../../../../store/Database/types/utilities'


@Component(({
  components: {
    BriefCard_edit
  }
}))

export default class Brief extends Vue {
  files:File[]= [{} as File]
 
  addEntry(){
    (this.$refs.Card as BriefCard_edit).newEntry()
  }
}
</script>]