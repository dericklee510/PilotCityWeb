<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
      class="mt-12"
    >
      <img
        id="launcher__icon"
        src="@/assets/launcher.png"
      >
      <v-col
        id="launcher__containtop"
        cols="8"
      >
        <v-row>
          <i
            id="launcher__backbuttonicon"
            class="fas fa-chevron-left"
          ><button 
      
            class="launcher__backbutton"
            @click="$router.push({ name: 'program.programlist' })"
          >My Programs</button></i>
        </v-row>
    
        <v-row
          justify="center"
          no-gutters
          class="launcher__title"
        >
          <v-col
            cols="9"
            class="text-center"
          >
            LAUNCH YOUR PROGRAM
          </v-col>
        </v-row>
      </v-col>
    
      <v-col
        id="launcher__containbottom"
        cols="8"
      >
        <v-row
          justify="center"
          no-gutters
          class="launcher__description"
        >
          <v-col
            cols="9"
            class="text-center"
          >
            Review your program before launch.
          </v-col>
        </v-row>
    
    
        <v-row
          justify="center"
          no-gutters
        >
          <v-col cols="7">
            <!-- PROGRAM ITEM -->
            <v-row
              class="mt-5 mb-5 pt-3 pb-4"
              no-gutters
            >
              <v-col cols="2">
                <i class="launcher__programicon fas fa-chalkboard-teacher launcher__icon_blue" />
              </v-col>
              <v-col
                cols="12"
                sm="9"
              >
                <v-row class="launcher__programtitle">
                  Externship Day
                </v-row>
                <v-row class="launcher__programdate">
                  Feb 2020
                </v-row>
                <v-row class="launcher__programshort">
                  Teachers take a day off, visit selected employer's workplace for training and project design.
                </v-row>
              </v-col>
            </v-row>
    
    
            <!-- PROGRAM ITEM -->
            <v-row
              class="mt-5 mb-5 pt-3 pb-4"
              no-gutters
            >
              <v-col cols="2">
                <i class="launcher__programicon fas fa-project-diagram launcher__icon_green" />
              </v-col>
              <v-col
                cols="12"
                sm="9"
              >
                <v-row class="launcher__programtitle">
                  Project
                </v-row>
                <v-row class="launcher__programdate">
                  Mar 2020
                </v-row>
                <v-row class="launcher__programshort">
                  Teachers bring employer project back into the classroom for multi-week development of solutions.
                </v-row>
              </v-col>
            </v-row>
    
    
            <!-- PROGRAM ITEM -->
            <v-row
              class="mt-5 mb-5 pt-3 pb-4"
              no-gutters
            >
              <v-col cols="2">
                <i class="launcher__programicon fas fa-check-double launcher__icon_red" />
              </v-col>
              <v-col
                cols="12"
                sm="9"
              >
                <v-row class="launcher__programtitle">
                  Application
                </v-row>
                <v-row class="launcher__programdate">
                  Apr 2020
                </v-row>
                <v-row class="launcher__programshort">
                  After students have finished their projects, they apply for internships with their sponsoring employer.
                </v-row>
              </v-col>
            </v-row>
    
            <!-- PROGRAM ITEM -->
            <v-row
              class="mt-5 mb-5 pt-3 pb-4"
              no-gutters
            >
              <v-col cols="2">
                <i class="launcher__programicon fas fa-comments launcher__icon_orange" />
              </v-col>
              <v-col
                cols="12"
                sm="9"
              >
                <v-row class="launcher__programtitle">
                  Interview
                </v-row>
                <v-row class="launcher__programdate">
                  May 2020
                </v-row>
                <v-row class="launcher__programshort">
                  Students are interviewed by PilotCity and employer for screening into internships.
                </v-row>
              </v-col>
            </v-row>
    
    
            <!-- PROGRAM ITEM -->
            <v-row
              class="mt-5 mb-5 pt-3 pb-4"
              no-gutters
            >
              <v-col cols="2">
                <i class="launcher__programicon fas fa-handshake launcher__icon_yellow" />
              </v-col>
              <v-col
                cols="12"
                sm="9"
              >
                <v-row class="launcher__programtitle">
                  Offer
                </v-row>
                <v-row class="launcher__programdate">
                  May 2020
                </v-row>
                <v-row class="launcher__programshort">
                  PilotCity and employer discuss offers for internships for placement over the Summer.
                </v-row>
              </v-col>
            </v-row>
    
    
            <!-- PROGRAM ITEM -->
            <v-row
              class="mt-5 mb-5 pt-3 pb-4"
              no-gutters
            >
              <v-col cols="2">
                <i class="launcher__programicon fas fa-seedling launcher__icon_purple" />
              </v-col>
              <v-col
                cols="12"
                sm="9"
              >
                <v-row class="launcher__programtitle">
                  Internship
                </v-row>
                <v-row class="launcher__programdate">
                  Jul 2020
                </v-row>
                <v-row class="launcher__programshort">
                  An intensive, 6-week internship that pilots the project students started in the classroom.
                </v-row>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
    
    
    
        <v-row
          justify="center"
          no-gutters
          class="launcher__check"
        >
          <v-col
            cols="9"
            class="text-center"
          >
            <input
              v-model="check"
              type="checkbox"
              class="launcher__checkbox"
            >
            I confirm my participation in the following program.
          </v-col>
        </v-row>

        <v-row
          no-gutters
          justify="center"
        >
          <v-col
            cols="4"
          >
            <v-btn
              id="launcher__button"
              class="mb-10"
              :disabled="!check"
              text
              solo
              depressed
              outlined
              height="73.5px"
              @click="launchProgram"
            >
              LAUNCH
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
import { FbStore } from '../../store'
import { RouteList } from '../ProgramGuide/types'
import { firebase } from "@/firebase/init";
@Component({
  async beforeRouteEnter(to,from,next){
    if(localStorage.PILOTCITY_EMPLOYERPROGRAMID)
    await FbStore.initCurrentEmployerProgram(localStorage.PILOTCITY_EMPLOYERPROGRAMID)
    next()
  },
})
export default class ProgramLauncher extends Vue{
    check = false 
    async launchProgram() {
      if(FbStore.userCitizenType === "teacher")
        await FbStore.createTeacherProgramData(FbStore.currentEmployerProgramUID!)
      else if(FbStore.userCitizenType === "employer")
        await FbStore.updateCurrentEmployerProgram({
          launched:firebase.firestore.FieldValue.serverTimestamp()
        })
        let route = new RouteList(
      FbStore.currentUserProfile!.citizenType!
    ).linkedList.head.value.routeName
        this.$router.push({
            name: route
        })
    }
}
</script>