<template>
  <v-row>
    <span class="managestudents__topbutton">

      <button class="managestudents__classesbutton">CLASSES</button>

      <button class="managestudents__studentsbutton">STUDENTS</button>

      <button class="managestudents__teambutton">TEAMS</button>

    </span>


    <v-row class="managestudents__titlemain">
      <span class="managestudents__title"> Manage Students</span>
    </v-row>
  </v-row>
</template>



<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'


@Component(({
    components: {
      
    }
}))

export default class managestudents extends Vue{
    
}
</script>