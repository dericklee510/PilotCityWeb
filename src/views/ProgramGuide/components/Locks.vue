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
        
          v-if="xlocked"
          class="fas fa-lock-alt guide__locks-locked"
        />
        <i
        
          v-else
          class="fas fa-unlock-alt guide__locks-unlocked"
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

@Component
export default class Lock extends Vue{
    @Prop()
    public locked?: boolean
    @Prop()
    public orientation?: string;

    public get xlocked(){
      return false;
    }

}
</script>