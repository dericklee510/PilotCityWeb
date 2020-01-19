<template>
  <v-container>
    <v-row justify="center">
      <img
        id="editcasestudies__icon"
        class="editcasestudies__image"
        src="@/assets/Reviewcase.png"
      >
    
      <v-col
        id="editcasestudies__contain"
        cols="10"
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
    
        <v-row
        justify="center"
          no-gutters
          class="editcasestudies__labels"
        >
          <v-col
            cols="2"
            md="1"
          /> 
          <v-col
            cols="3"
            md="4"
            class="editcasestudies__titlename"
          >
            Link Name
          </v-col>
          <v-col
            cols="3"
            md="4"
            class="editcasestudies__titleurl"
          >
            Link URL
          </v-col>
          <v-col
            cols="2"
            md="1"
          />
        </v-row>
    
        <v-row
          v-for="entry in entries"
          :key="entry.id"
          class="editcasestudies__textbox"
          justify="center"
          no-gutters
        >
          <v-col
            cols="2"
            md="1"
          /> 
          <v-col
            cols="3"
            md="4"
            class="editcasestudies__inputlinkname"
          >
            <input
              v-model="entry.linkName"
              
              placeholder="Lidar for Drones"
            >
          </v-col>
          <v-col
            cols="3"
            md="4"
            class="editcasestudies__inputlinkurl"
          >
            <input
              v-model="entry.link"
              placeholder="http://www.velodyne.com/casestudy1"
            >
          </v-col>
          <v-col
            cols="2"
            md="1"
          >
            <i
              v-if="entries.length>1"
              class="mt-2 ml-3 far fa-trash-alt agenda__trashicon"
              @click="deleteEntry(entry.id)"
            />
          </v-col>
        </v-row>
        <v-row
          no-gutters
          justify="center"
        >
          <v-col
            cols="8"
            md="8"
            class="editcasestudies__box"
            @click="newEntry"
          >
            <span>+</span>
          </v-col>
        </v-row>
    
        <v-row
          
          no-gutters
          justify="center"
        >
          <v-col class="editcasestudies__savebutton" cols="4">
            <span> SAVE </span>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>








<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {PCmultiinput} from "@/components/inputs"
import { NamedLink } from '@/store/Database/types/utilities'

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