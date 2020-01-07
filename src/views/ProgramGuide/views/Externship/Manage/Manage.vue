<template>
  <v-row>
    <span class="manageclass__topbutton">
      <button class="manageclass__classesbutton">CLASSES</button>

      <button class="manageclass__studentsbutton">STUDENTS</button>

      <button class="manageclass__teambutton">TEAMS</button>
    </span>
    <router-view />
  </v-row>
</template>






<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Manage extends Vue{
    
}
</script>