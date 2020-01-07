<template>
  <v-row>
    <v-col
      no-gutters
      md="2"
      class="d-sm-none"
    >
      <Nav />
    </v-col>
    <v-col cols="1">
      <Lock />
    </v-col>
    <v-col>
      <router-view :name="getProgram" /> 
    </v-col>
    <v-col cols="1">
      <Unlock />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

import {Nav, Lock, Unlock} from './components'

@Component({
  components: {
    Nav,
    Lock,
    Unlock,
  }
})
export default class Guide extends Vue{
  public PROGRAMNAMES = [ // for reference
    'Brief',
    'TrainingDay',
    'CaseStudy',
    'IntroVid',
    'Practice',
    'Presentation',
    'DemoVid',
    'Pitch',
    'Elevator',
    'Canvas',
    'Externship',
    'Hack',
    'Demo',
    'Process',
  ]
  public get getProgram(): string{

    // psuedo-code [could probably turn this into a util function]
    /* 
      if(on.currentPage)
        return currentPage //this should keep them on the same page if they refresh
      if(user.fb.getLastProgress)
        return user.fb.getLastProgress.Name //this should take them to their latest unlock
      
      return FirstPage //this should take them to the first page if its their first time
    */
   return 'Agenda'//enter desired test-page here   
  }
}
</script>