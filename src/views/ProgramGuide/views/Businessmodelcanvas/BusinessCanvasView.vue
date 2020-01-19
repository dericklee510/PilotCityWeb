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
        cols="10"
        class="programguide__container"
      >
        <v-col cols="12">
          <i
            v-if="page!='view'"
            id="businessmodelcanvas_view2__backbuttonicon"
            class="fas fa-chevron-left"
          >
            <v-btn
              class="businessmodelcanvas_view2__backbutton"
              @click="changePage"
            >Back</v-btn>
          </i>
        </v-col>
        <v-col
          cols="12"
          justify="center"
          class="programguide__title"
        >
          BUSINESS MODEL CANVAS
        </v-col>  
        <v-col>
          <router-view
            :name="page"
            @changePage="changePage()"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class BusinessCanvasView extends Vue{

  public page: string = "view";

  changePage(){
    this.page == "view" ? this.page = "detail" : this.page = "view";
  }
  created(){
    // this.page = "view";
  }
}
</script>