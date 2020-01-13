<template>
  <v-row
    no-gutters
    class="programguide"
  >
    <v-col
      cols="1"
      sm="3"
      md="2"
      xl="1"
      class="d-sm-block d-none"
    >
      <Nav v-model="currentModule" />
    </v-col>
    <v-col
      xl="11"
      md="10"
      sm="9"
      cols="11"
    >
      <v-row
        no-gutters
        class="guide__viewer-container"
      >
        <v-col
          cols="1"
          class="guide__locks guide__locks--left"
          @click="navBackward(sequence[currentModule])"
        >
          <Unlock />
        </v-col>
        <v-col
          cols="12"
        >
          <router-view /> 
        </v-col>
        <v-col
          cols="1"
          class="guide__locks guide__locks--right"
          @click="navForward(sequence[currentModule])" 
        >
          <Unlock />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';
import { Watch } from 'vue-property-decorator'
import { STUDENTMODULES, EMPLOYERMODULES, TEACHERMODULES } from './views'
import {Nav, Lock, Unlock} from './components'
import _ from "lodash"
import { LinkedList, LinkedListItem } from 'linked-list-typescript';
import { ProgramNode } from './types';

@Component({
  components: {
    Nav,
    Lock,
    Unlock,
  }
})
export default class Guide extends Vue{

  public sequenceHash:Record<string,Record<string,string[]>> = {
    Teacher: TEACHERMODULES,
    Employer: EMPLOYERMODULES,
    Student: STUDENTMODULES
  }
  public xcurrentModule: string = '';  
  routeMap!:LinkedList<LinkedListItem<ProgramNode<Record<string,any>>>>
  get citizenType(): string{
    return localStorage.citizenType
  }
  get sequence() {
    return this.sequenceHash[this.citizenType] 
  }
  get nextModule(){
    let programs = Object.keys(this.sequence);
    let index = programs.indexOf(this.currentModule);
    if(programs.length-1 == index)
      return this.currentModule;
    return programs[index+1] 
  }
  get priorModule(){
    let programs = Object.keys(this.sequence);
    let index = programs.indexOf(this.currentModule);
    if(index == 0)
      return this.currentModule;
    return programs[index-1] 
  }
  get currentModule(): string {
    return this.xcurrentModule
  }
  set currentModule(value: string) {
    this.xcurrentModule = value;
    // set this in created hook based on firebase
  }
  @Watch('currentModule')
  onModuleChange(){
    if(this.$route.name != this.sequence[this.currentModule][0])
    this.$router.push({name: this.sequence[this.currentModule][0]})
  }
  
  public navForward(mod: string[]){
    this.routeMap.head
    console.log(mod)
    let currentRoute= this.$route.name as string;
    let length = mod.length;
    console.log(currentRoute,length)
    if(mod.includes(currentRoute) && mod[length-1] != currentRoute)
      this.$router.push({ name: mod[mod.indexOf(currentRoute)+1] })
    if(mod[length-1] == currentRoute) 
      this.$router.push({name: this.sequence[this.nextModule][0]})
  }
  public navBackward(mod: string[]){
    let currentRoute:string = this.$route.name as string;
    if(mod.includes(currentRoute) && mod[0] != currentRoute)
      this.$router.push({ name: mod[mod.indexOf(currentRoute)+1] })
    if(mod[0] == currentRoute) 
      this.$router.push({name: this.sequence[this.priorModule][this.priorModule.length-1]})
  }
  public created(){
    // psuedo-code [could probably turn this into a util function]
    /* 
      if(user.fb.getLastProgress)
        this.currentModule = user.fb.getLastProgress.Name //this should take them to their latest unlock

        BIND THIS TO `XCURRENTMODULE`
    */
  }
}
</script>