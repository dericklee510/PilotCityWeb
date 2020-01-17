<template>
  <v-row justify="center">
    <img
      id="viewcasestudies__icon"
      class="viewcasestudies__image"
      src="@/assets/Viewcasestudies.png"
    >

    <v-col
      id="viewcasestudies__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto viewcasestudies__title"
      >
        REVIEW CASE STUDIES & USE CASES
      </v-row>

      <v-col
        cols="12"
        class="viewcasestudies__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto viewcasestudies__description"
      >
        It is important to create unique and innovative solutions. Review what’s been done before so you don’t reinvent the wheel.
      </v-row>

      <v-row class="viewcasestudies__reviewtitle">
        Reviewed
      </v-row>



      <v-row
        v-for="(namedLink,index) in namedLinks"
        id="viewcasestudies__check1"
        :key="index"
      >
        <span
          class="viewcasestudies__wholeline"
        ><input
           v-model="namedLink.reviewed"
           class="viewcasestudies__check"
           type="checkbox"
         >
          {{ namedLink.linkName }}
          <a :ref="namedLink.link"><button class="viewcasestudies__exporticon"><img src="@/assets/exportbox.png"></button></a>

        </span>
      </v-row>


      <v-row class="viewcasestudies__savebuttonrow">
        <v-btn
          class="viewcasestudies__savebutton"
          :disabled="!allReviewed"
        >
          NEXT
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>




<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { NamedLink, ReviewedLink } from '@/store/Database/types/utilities'
@Component
export default class ViewCaseStudies extends Vue{
    namedLinks:ReviewedLink[] = [{
      linkName:"LIDAR FOR AUTONOMOUS CAMPUS SHUTTLES",
      link: "pilotcity.com",
      reviewed:false
    },
    {
        linkName:"lidar for drones",
        link:"pilotcity.com",
        reviewed:false
      },
]
  get allReviewed(){
    return this.namedLinks.map(link => link.reviewed).every(isReviewed => isReviewed)
  }
}
</script>