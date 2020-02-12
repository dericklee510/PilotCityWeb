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
        <v-col
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
        </v-col>
        <v-col
          cols="12"
          class="programguide__title"
        >
          BUSINESS MODEL CANVAS
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
}
</script>