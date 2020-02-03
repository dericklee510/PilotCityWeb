<template>
  <v-container>
    <v-row justify="center">
      <img
        id="viewcasestudies__icon"
        class="viewcasestudies__image"
        src="@/assets/Viewcasestudies.png"
      >
    
      <v-col
        id="viewcasestudies__contain"
        cols="8"
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
        <v-row
          class="viewcasestudies__reviewtitle"
          no-gutters
        >
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
             v-model="caseStudiesReviewed[index]"
             class="viewcasestudies__check"
             type="checkbox"
           >
            <span>
              {{ namedLink.linkName }}
            </span>
            <a :href="namedLink.link"><button class="viewcasestudies__exporticon"><img src="@/assets/exportbox.png"></button></a>
          </span>
        </v-row>
        <v-row
          no-gutters
          justify="center"
        >
          <v-col
            cols="4"
            class="viewcasestudies__savebuttonrow"
          >
            <v-btn
              class="viewcasestudies__savebutton"
              :disabled="!allReviewed"
              @click="submit"
            >
              NEXT
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>




<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { NamedLink, ReviewedLink } from '@/store/Database/types/utilities'
import { FbStore } from '../../../../store'
import  {firebase}  from '@/firebase/init'
@Component
export default class ViewCaseStudies extends Vue{
    namedLinks:NamedLink[] = FbStore.currentEmployerProgram?.caseStudies || [{} as NamedLink]
    caseStudiesReviewed = FbStore.currentProject?.caseStudiesReviewed || []
  get allReviewed(){
    return this.namedLinks.map((link,index) => this.caseStudiesReviewed[index]).every(isReviewed => isReviewed)
  }
  submit(){
    FbStore.updateCurrentProject({
      programSequence:{
        caseStudies:firebase.firestore.FieldValue.serverTimestamp()
      }
    })
  }
}
</script>