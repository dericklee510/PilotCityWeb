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
        <span> 

          <span class="manageteam__classtitle">Class Name</span>
          <span class="manageteam__codetitle">Share code</span>

        </span>
      </v-row>
    </v-row>

    <v-row>
      <span class="manageteam__wholeline">

        <input
          class="manageteam__classinput"
          placeholder="CLASS NAME 1"
        >
        <button class="manageteam__renamebutton">RENAME</button>
        <button class="manageteam__deletebutton">DELETE</button>
        <span class="manageteam__sharecode"> SKLWEM8730  </span>
        <!-- <button class="manageteam__icon"><img src="@/assets/link.png"></button> -->
      </span>
    </v-row>


    <v-row>
      <span class="manageteam__wholeline">

        <input
          class="manageteam__classinput"
          placeholder="CLASS NAME 2"
        >
        <button class="manageteam__renamebutton">RENAME</button>
        <button class="manageteam__deletebutton">DELETE</button>
        <span class="manageteam__sharecode"> MCJFUAL68D  </span>
        <!-- <button class="manageteam__icon"><img src="@/assets/link.png"></button> -->
      </span>
    </v-row>


    <v-row>
      <span class="manageteam__wholeline">

        <input
          class="manageteam__classinput"
          placeholder="CLASS NAME 3"
        >
        <button class="manageteam__renamebutton">RENAME</button>
        <button class="manageteam__deletebutton">DELETE</button>
        <span class="manageteam__sharecode"> OUKLBA3GM8  </span>
        <!-- <button class="manageteam__icon"><img src="@/assets/link.png"></button> -->
      </span>

      <v-row>
        <button class="manageteam__createbutton">
          CREATE
        </button>
      </v-row>
    </v-row>
  </v-row>
</template>






<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class manageclass extends Vue{
    
}
</script>