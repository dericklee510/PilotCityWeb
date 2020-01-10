<template>
  <v-row>
    <span class="manageteam__topbutton">

      <button class="manageteam__classesbutton">CLASSES</button>

      <button class="manageteam__studentsbutton">STUDENTS</button>

      <button class="manageteam__teambutton">TEAMS</button>

    </span>


    <v-row class="manageteam__titlemain">
      <span class="manageteam__title"> Manage Classes</span>

      <v-row class="manageteam__headtitle">
        <span class="manageteam__teamname">Team Name</span>
      </v-row>
    </v-row>


    <v-row>
      <span class="manageteam__wholeline">

        <input
          class="manageteam__classinput"
          placeholder="TEAM NAME 1"
        >
        <button class="manageteam__renamebutton">RENAME</button>
        <button class="manageteam__deletebutton">DELETE</button>

      </span>

      <v-row>
        <span class="manageteam__wholeline2">

          <input
            class="manageteam__classinput"
            placeholder="TEAM NAME 2"
          >
          <button class="manageteam__renamebutton">RENAME</button>
          <button class="manageteam__deletebutton">DELETE</button>

        </span>
      </v-row>
    </v-row>


    <v-row class="manageteam__titlemain">
      <span class="manageteam__title1"> Create Team</span>

      <v-row class="manageteam__headtitle">
        <span class="manageteam__teamname">Team Name</span>
      </v-row>
    </v-row>
         

    <v-row>
      <span class="manageteam__wholeline3">

        <input
          class="manageteam__classinput"
          placeholder="TEAM NAME 3"
        >
        <button class="manageteam__createbutton">CREATE</button>

      </span>
    </v-row>
  </v-row>
</template>



<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class manageteam extends Vue{
    
}
</script>