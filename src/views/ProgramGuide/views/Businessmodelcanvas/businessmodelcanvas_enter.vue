<template>
  <v-row justify="center">
    <img
      id="businessmodelcanvas_enter__icon"
      src="@/assets/businessmodelcanvas_enter.png"
    >
 
    <v-col
      id="businessmodelcanvas_enter__contain"
      cols="8"
    >
      <!-- <v-row><i clas s="fas fa-chevron-left" id="businessmodelcanvas_enter__backbuttonicon"><button class="businessmodelcanvas_enter__backbutton">Back</button></i></v-row> -->

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_enter__title"
      >
        BUSINESS MODEL CANVAS

        <!-- TOOLTIP TEMPLATE -->
        <v-tooltip
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
                class="pb-3"
                color="grey lighten-1"
              >
                info
              </v-icon>
            </v-btn>
          </template>
          <span>Click here to learn how to develop a strong business model canvas</span>
        </v-tooltip>
        <!-- TOOLTIP TEMPLATE END -->
      </v-row>

      <v-col
        id="businessmodelcanvas_enter__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_enter__description"
      >
        Every idea has a model on the business side. Create and refine your gameplan by developing your business model canvas.
      </v-row>
      <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 businessmodelcanvas_enter__description__label">Elevator Pitch</v-row> -->
      <business-model-canvas-comp
        v-model="canvas"
        :stars="true"
      />
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { BusinessModelCanvas as BusinessModelCanvasComp } from "./components";
import { BusinessModelCanvas } from "@/store/Database/types/utilities";
import { FbStore } from "../../../../store";
import { debounce } from "lodash";
import { Watch } from "vue-property-decorator";
import { debounceTime } from "rxjs/operators";
import {firebase} from "@/firebase/init"
@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
    BusinessModelCanvasComp
  }
})
export default class businessmodelcanvas_enter extends Vue {
  // key = 0
  get canvas(): BusinessModelCanvas {
    let { problem, solution, innovation, customer } = FbStore.currentProject!;
    //  this.key++
    return {
      problem: problem || "",
      solution: solution || "",
      innovation: innovation || "",
      customer: customer || ""
    };
  }
  set canvas(value: BusinessModelCanvas) {
    if (!FbStore.currentProject!.programSequence.bmc) {
      if ((value.problem, value.solution, value.innovation, value.customer))
        FbStore.updateCurrentProject({
          [`programSequence.${'bmc'}`]: firebase.firestore.FieldValue.serverTimestamp()
        });
    }
    debounce(
      () =>
        FbStore.firestore
          .collection("Project")
          .doc(FbStore.currentProject!.projectId)
          .update({
            ...value
          }),
      300
    )();
    // FbStore.updateCurrentProject({
    //   ...value
    // });
  }
}
</script>