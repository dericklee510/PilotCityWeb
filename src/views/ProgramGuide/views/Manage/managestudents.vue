<template>
  <v-container>
    <span class="managestudents__topbutton">

      <button class="managestudents__classesbutton">CLASSES</button>

      <button class="managestudents__studentsbutton">STUDENTS</button>

      <button class="managestudents__teambutton">TEAMS</button>

    </span>


    <v-row
      class="managestudents__titlemain"
      justify="start"
    >
      <span class="managestudents__title"> Manage Students</span>
    </v-row>
    <v-row>
      <v-col>
        Name
      </v-col>
      <v-col>
        Classes
      </v-col>
      <v-col>
        Team
      </v-col>
    </v-row>
    <v-row
      v-for="(entry,index) in entries"
      :key="index"
    >
      <v-col>
        {{ entry.name }}
      </v-col>
      <v-col>
        <pc-select
          v-model="entry.class"
          :items="[entry.class]"
        />
      </v-col>
      <v-col>
        <pc-select
          v-model="entry.project"
          :items="[entry.project]"
        />
      </v-col>
    </v-row>
  </v-container>
</template>



<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { PCselect } from '../../../../components/inputs'

@Component(({
    components: {
      pcSelect:PCselect
    }
}))

export default class managestudents extends Vue{
    entries = [{
      name:`Antonio Loza`,
      class: `Class 1`,
      project: `Autonomous Campus Shuttle`
    }]
}
</script>