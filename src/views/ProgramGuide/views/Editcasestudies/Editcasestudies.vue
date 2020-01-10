<template>
  <v-row justify="center">
    <img
      id="editcasestudies__icon"
      class="editcasestudies__image"
      src="@/assets/Reviewcase.png"
    >

    <v-col
      id="editcasestudies__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto editcasestudies__title"
      >
        ENTER CASE STUDIES & USE CASES
      </v-row>

      <v-col
        cols="12"
        class="editcasestudies__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto editcasestudies__description"
      >
        Share key articles, publications and links that support the student’s understanding of the technology, product or service.
      </v-row>

      <v-row>
        <div class="editcasestudies__titlename">
          Link Name
        </div>
        <div class="editcasestudies__titleurl">
          Link URL
        </div>
      </v-row>

      <v-row
        v-for="entry in entries"
        :key="entry.id"
        justify="center"
        class="editcasestudies__textbox"
      >
        <v-col>
          <button>
            <img
              id="editcasestudies__plustexticon"
              class="editcasestudies__plustext"
              src="@/assets/Plus_casestudies.png"
            >
          </button>
          <input
            v-model="entry.linkName"
            class="editcasestudies__inputlinkname"
            placeholder="Lidar for Drones"
          >
          <input
            v-model="entry.link"
            class="editcasestudies__inputlinkurl"
            placeholder="http://www.velodyne.com/casestudy1"
          >
          <v-btn @click="deleteEntry(entry.id)">
            <img
              id="editcasestudies__trashcanicon"
              class="editcasestudies__trashcan"
              src="@/assets/Redtrash.png"
            >
          </v-btn>
        </v-col>
      </v-row>

      <v-row id="editcasestudies__box">
        <v-btn @click="newEntry">
          <img
            id="editcasestudies__plusicon"
            class="editcasestudies__plus"
            src="@/assets/Pluscase.png"
          >
        </v-btn>
      </v-row>

      <v-row class="editcasestudies__savebuttonrow">
        <button class="editcasestudies__savebutton">
          SAVE
        </button>
      </v-row>
    </v-col>
  </v-row>
</template>








<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {PCmultiinput} from "@/components/inputs"
import { NamedLink } from '../../../store/Database/types/utilities'

interface NamedLinkID extends NamedLink {
  id:number
}
let namedLinkDefault:NamedLink = {linkName:"",link:""}
let linkData:NamedLink[] = [
  {
    linkName:"Lidar For Drones",
    link:"velodyne.co"
  },
  {
    linkName:"Lidar for Autonomous Shuttles",
    link:"http://velodyne.co"
  }
]
const app = PCmultiinput.createMultiInput<NamedLink>(namedLinkDefault,linkData)

@Component({})
export default class editcasestudies extends app{

}

</script>