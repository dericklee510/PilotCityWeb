<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <img
        id="elevator_view2__icon"
        src="@/assets/elevator_view.png"
      >
      <v-col
        cols="8"
        class="programguide__container"
      >
        <v-row
          v-show="page!='view'"
        >
          <i
            id="launcher__backbuttonicon"
            class="fas fa-chevron-left"
          ><button
            style="textDecoration: none; cursor: pointer"
            class="launcher__backbutton"
            @click="changePage"
          >Back</button></i>
        </v-row>
        <v-col
          cols="12"
          class="programguide__title"
        >
          VIEW 60-SECOND ELEVATOR PITCH
        </v-col>
        <v-col
          justify="center"
        >
          <router-view
            :name="page"
            @changePage="changePage"
          />
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Rating } from "../../components";
import { team_snippet } from "../../components/Rating.vue";

@Component({
  components: {
    Rating
  }
})
export default class elevator_view extends Vue{
  public page?: string = "view";
  changePage(){
    this.page == "view" ? this.page = "detail" : this.page = "view";
  }
}
</script>