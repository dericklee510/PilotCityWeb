<template>
  <v-row
    style="height:100%"
    no-gutters
    align="center"
    justify="center"
  >
    <v-col
      cols="1"
      class="guide__lock-wrapper"
    >
      <i class="fas fa-lock-alt" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component
export default class Lock extends Vue{
    
}
</script>