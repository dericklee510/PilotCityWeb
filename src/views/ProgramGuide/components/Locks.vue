<template>
  <router-link
    style="textDecoration: none"
    :to="isUnlocked?{name:nextModule.value.routeName}:''"
  >
    <v-row
      v-if="nextModule"
      no-gutters
      align="center"
      justify="center"
      class="guide__locks-wrapper"
    >
      <v-col
        cols="12"
        :class="{ right: orientation=='right', left: orientation=='left'}"
      >
        <span>
          <i
            v-if="orientation=='right'"
            class="fa fa-chevron-right d-none d-lg-inline"
          />
          <i
            v-if="isUnlocked"
            class="fa fa-unlock guide__locks-unlocked"
          />
          <i
            v-else
            class="fa fa-lock guide__locks-locked"
          />
          <i
            v-if="orientation=='left'"
            class="fa fa-chevron-left d-none d-lg-inline"
          />
        </span>
      </v-col>
    </v-row>
  </router-link>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
import { ProgramNode } from '../types';
import { LinkedList } from 'linked-list-typescript';
import moment from 'moment'
import {firebase} from "@/firebase/init"
function isUnlocked(arg:Boolean | firebase.firestore.Timestamp | firebase.firestore.FieldValue | Date | undefined){
if(arg instanceof firebase.firestore.Timestamp){
    return !moment(arg.toDate()).isAfter(moment(),'d')
}
else if (arg instanceof firebase.firestore.FieldValue)
    return true
else if (arg === null)
  return true
else
    return !!arg
}
@Component
export default class Locks extends Vue{
    @Prop({required:true})
    routeMap!:LinkedList<ProgramNode>
    @Prop()
    public orientation!: string;

    get nextModule(){
      return this.orientation=="right"?this.currentModule.next:this.currentModule.prev
    }
    get currentModule(){
      return this.routeMap.toArray().find((node) => this.$route.name === node.value.routeName) as ProgramNode
    }
    get isUnlocked(){
      return isUnlocked(this.nextModule?.value.unlocked)
    }
    navigateNext(){
      if(this.isUnlocked)
        this.$router.push({name:this.nextModule?.value.routeName})
    }

}
</script>