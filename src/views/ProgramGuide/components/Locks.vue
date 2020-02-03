<template>
  <router-link style="textDecoration: none" :to="nextModule.value.isUnlocked?{name:nextModule.value.routeName}:'#'">
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
            v-if="nextModule.value.unlocked"
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

@Component
export default class Lock extends Vue{
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

}
</script>