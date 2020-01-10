<template>
  <v-row>
    <span class="manageclass__topbutton">
      <button class="manageclass__classesbutton">CLASSES</button>

      <button class="manageclass__studentsbutton">STUDENTS</button>

      <button class="manageclass__teambutton">TEAMS</button>
    </span>

    <v-row class="manageclass__titlemain">
      <span class="manageclass__title"> Manage Classes</span>

      <v-row class="manageclass__headtitle">
        <span> 

          <span class="manageclass__classtitle">Class Name</span>
          <span class="manageclass__codetitle">Share code</span>

        </span>
      </v-row>
    </v-row>

    <v-row>
      <span class="manageclass__wholeline">

        <input
          class="manageclass__classinput"
          placeholder="CLASS NAME 1"
        >
        <button class="manageclass__renamebutton">RENAME</button>
        <button class="manageclass__deletebutton">DELETE</button>
        <span class="manageclass__sharecode"> SKLWEM8730  </span>
        <!-- <button class="manageclass__icon"><img src="@/assets/link.png"></button> -->
      </span>
    </v-row>


    <v-row>
      <span class="manageclass__wholeline">

        <input
          class="manageclass__classinput"
          placeholder="CLASS NAME 2"
        >
        <button class="manageclass__renamebutton">RENAME</button>
        <button class="manageclass__deletebutton">DELETE</button>
        <span class="manageclass__sharecode"> MCJFUAL68D  </span>
        <!-- <button class="manageclass__icon"><img src="@/assets/link.png"></button> -->
      </span>
    </v-row>


    <v-row>
      <span class="manageclass__wholeline">

        <input
          class="manageclass__classinput"
          placeholder="CLASS NAME 3"
        >
        <button class="manageclass__renamebutton">RENAME</button>
        <button class="manageclass__deletebutton">DELETE</button>
        <span class="manageclass__sharecode"> OUKLBA3GM8  </span>
        <!-- <button class="manageclass__icon"><img src="@/assets/link.png"></button> -->
      </span>

      <v-row>
        <button class="manageclass__createbutton">
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