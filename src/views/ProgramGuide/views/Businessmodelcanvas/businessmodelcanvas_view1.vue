

<template>
  <v-row no-gutters>
    <v-col>
      <v-row
        class="programguide__labels d-sm-block d-none "
        no-gutters
      >
        <v-col cols="1" />
        <v-col
          cols="12"
          md="7"
        >
          Name
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          Rating
        </v-col>
      </v-row>
      <v-row
        class="programguide__content"
        align="center"
        no-gutters
      >
        <!-- insert v-for here -->
        <v-col
          cols="1"
          class="businesscanvas__actnbtn"
          @click="$emit('changePage')"
        >
          <div>View</div>
        </v-col>
        <v-col
          cols="12"
          md="7"
          class="programguide__header"
        >
          <span>${program.title}</span>
        </v-col>
        <v-col
          cols="12"
          md="3"
        >
          <v-rating />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { BusinessModelCanvas as BusinessModelCanvasComp } from "./components";
import { BusinessModelCanvas } from "@/store/Database/types/utilities";
@Component({
  components: {
    BusinessModelCanvasComp
  }
})
export default class businessmodelcanvas_view2 extends Vue {
}
</script>