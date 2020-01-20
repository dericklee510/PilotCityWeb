<template>
  <v-container>
    <v-row justify="center">
      <img
        id="elevator_view2__icon"
        src="@/assets/elevator_view.png"
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