<template>
  <v-row
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
          class="fas fa-chevron-right d-none d-lg-inline"
        />
        <i
          v-if="isUnlocked"
          class="fas fa-unlock-alt guide__locks-unlocked"
        />
        <i
          v-else
          class="fas fa-lock-alt guide__locks-locked"
        />
        <i
          v-if="orientation=='left'"
          class="fas fa-chevron-left d-none d-lg-inline"
        />
      </span>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator';
import { ProgramNode } from '../types';

@Component
export default class Lock extends Vue{
    @Prop()
    public module?: ProgramNode
    @Prop()
    public orientation?: string;

    get isUnlocked(){
      if(this.module) return this.module.value.unlocked;
      else return false
    }

}
</script>