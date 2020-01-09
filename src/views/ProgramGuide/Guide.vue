<template>
  <v-row no-gutters>
    <v-col
      cols="1"
      md="2"
      class="d-sm-block"
    >
      <Nav v-model="currentProgram" />
    </v-col>
    <v-col cols="1">
      <Lock />
    </v-col>
    <v-col
      cols="9"
      md="8"
    >
      <router-view :name="currentProgram" /> 
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
  public PROGRAMNAMES = {
    Externship: [
      'Agenda',
      'Brief',
      'Manage',
    ],
    Project: [
      'IntroVid',
      'TrainingDay',
      'Practice',
      // 'Research',
      // 'Ideate',
      // 'Prepare',
      'Hack',
      // 'Reflection'
      // 'Design & Prototype'
      // 'Package'
      'Demo'
      // 'Exit'
    ],
    Internship: [
      // 'Offer 1'
      // 'Interview 1'
      // 'Interview 2'
      // 'Offer 2'
      // 'Next Program'
    ],
    Unsorted: [
      'CaseStudy',
      'IntroVid',
      'Practice',
      'Presentation',
      'DemoVid',
      'Pitch',
      'Elevator',
      'Canvas',
      'Externship',
      'Process',
    ]
  }// for reference
  public _currentProgram = 'Brief'; //set this to a default
  get currentProgram(): string {
    return this._currentProgram
  }
  set currentProgram(value: string) {
    this._currentProgram = value;
    // set this in created hook based on firebase
  }
  public created(){
    // psuedo-code [could probably turn this into a util function]
    /* 
      if(user.fb.getLastProgress)
        this.currentProgram = user.fb.getLastProgress.Name //this should take them to their latest unlock
    */
  }
}
</script>