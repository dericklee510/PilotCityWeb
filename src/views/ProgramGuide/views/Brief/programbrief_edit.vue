<template>
  <v-container
    fluid
    class="programbrief__dark"
  >
    <v-row
      class="programbrief__container" 
      justify="center"
    >
      <v-col
        cols="2"
        md="1"
      />
      <v-col
        cols="8"
        md="10"
      >
        <v-col class="programbrief__tile">
          Request for Pilot (RFP)
        </v-col>
        <v-col>
          <BriefCard_edit
            ref="Card"
            v-model="files"
          />
        </v-col>
        <v-col>
          <v-row
            no-gutters
            justify="center"
          >
            <v-col cols="12">
              <button
                class="programbrief__addbrief"
                @click="addEntry"
              >
                +
              </button>
            </v-col>
          </v-row>
        </v-col>
      </v-col>
      <v-col
        cols="2"
        md="1"
      />
    </v-row>
  </v-container>
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
    (((this.$refs.Card as BriefCard_edit).$refs).multiInput as PCmultiinput).newEntry()
  }
}
</script>]