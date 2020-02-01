<template>
  <v-row
    style="height:100%"
    no-gutters 
    align="center"
    justify="center"
  >
    <v-col
      cols="1"
      class="guide__unlock-wrapper"
    >
      <i class="fas fa-unlock-alt" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Unlock extends Vue{
    
}
</script>