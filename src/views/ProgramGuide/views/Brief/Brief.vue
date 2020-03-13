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
        
        <v-col
          v-for="(program,index) in programBriefs"
          :key="program.linkName"
        >
          <BriefCard
            v-model="acknowledgedBriefs[index]"
            :program="program"
            @confirm="onConfirmed"
          />
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
import BriefCard from './components/BriefCard.vue'
import { PCmultiinput } from '../../../../components/inputs'
import { NamedLink } from '../../../../store/Database/types/utilities'
import { FbStore } from '../../../../store'
import { Watch } from 'vue-property-decorator'
import {firebase} from "@/firebase/init"
const app = PCmultiinput.createMultiInput<NamedLink>()
@Component(({
    components: {
        BriefCard,
        multiInput:app
    }
}))
export default class Brief extends Vue{
created(){
  this.onConfirm()
}
  get programBriefs(){
    return FbStore.currentEmployerProgram!.programBrief!
  }
   acknowledgedBriefs:boolean[] = []
  get confirmed(){
    return FbStore.currentStudentClassroom?.finishedProgramBrief || false
  }
  @Watch('confirmed')
  onConfirm(){
    if(this.confirmed)
      this.acknowledgedBriefs = FbStore.currentEmployerProgram!.programBrief!.map(val => true)
  }
  onConfirmed(){
    if(this.acknowledgedBriefs.every(val => val))
    FbStore.updateCurrentStudentClassroom({
      finishedProgramBrief: firebase.firestore.FieldValue.serverTimestamp()
    })
    this.$emit('nextNode')
  }
}
</script>]