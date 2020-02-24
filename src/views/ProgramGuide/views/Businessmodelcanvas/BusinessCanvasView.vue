<template>
  <v-container class="businesscanvas">
    <v-row
      no-gutters
      justify="center"
      class="programguide__icon"
    >
      <img 
        
        src="@/assets/businessmodelcanvas_view2.png"
      >
      <v-col 
        cols="8"
        class="programguide__container"
      >
        <!-- <v-col
          cols="12"
          @click="changePage"
        >
          <i
            v-if="page!='view'"
            id="businessmodelcanvas_view2__backbuttonicon"
            style="color: #dbdcde; font-weight: 900; font-family: Raleway; font-size: 15px;"
            class="fas fa-chevron-left"
          ><span>Back</span>
          </i>
        </v-col> -->



        <v-row

          @click="changePage"        
        >
          <i
            v-if="page!='view'"
            id="businessmodelcanvas_view2__backbuttonicon"

            class="fas fa-chevron-left"
          ><span 
            style="cursor:pointer; color: #C7C8CA; font-weight: 900; font-family: Raleway; font-size: 18px; margin-left:8px; text-transform:uppercase; letter-spacing:.075rem; padding-bottom:10px;"
          >Back</span></i>
        </v-row>




        <!-- <v-row>
          <i
            id="launcher__backbuttonicon"
            class="fas fa-chevron-left"
          ><button 
      
            class="launcher__backbutton"
            @click="$router.push({ name: 'program.programlist' })"
          >My Programs</button></i>
        </v-row> -->




        <v-col
          cols="12"
          class="programguide__title"
        >
          BUSINESS MODEL CANVAS
          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            v-if="citizenType == 'teacher'"
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/how-do-i-create-a-strong-bmc"
                target="_blank"
                icon
                v-on="on"
              >
                <v-icon
                  class="pb-1"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>How do your students create a strong business model canvas? Click here.</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-col>  
        <v-col>
          <router-view
            :name="page"
            :canvas="canvas"
            @changePage="changePage"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {TeamInfo} from './components'
import { FbStore } from "@/store";
import { Oops } from '../../components'
@Component({
  components: {
    Oops,
  }
})
export default class BusinessCanvasView extends Vue{

  public page: string = "view";
  canvas:TeamInfo={} as TeamInfo
  changePage(team:TeamInfo){
    this.page == "view" ? this.page = "detail" : this.page = "view";
    this.canvas = team
  }
  created(){
    this.page = "view";
  }

  get citizenType() {
    return FbStore.userCitizenType;
  }

}
</script>