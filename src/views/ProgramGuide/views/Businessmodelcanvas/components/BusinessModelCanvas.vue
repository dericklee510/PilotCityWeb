<template>
  <ValidationObserver v-slot="{invalid}">
    <v-row
      justify="center"
      class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
    >
      <v-col
        cols="8"
        class
      >
        Problem
      </v-col>

      <v-col cols="4">
        <v-row v-if="stars">
          <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
            Rating
          </div>
          <v-rating
            v-model="stars.problem"
            :readonly="readonly===undefined"
            @input="onStarsChanged($event,'problem')"
          />
        </v-row>
      </v-col>
    </v-row>
    <v-row
      justify="center"
      class="mr-auto ml-auto mb-12"
    >
      <ValidationProvider
        v-slot="{errors,failedRules}"
        name="Problem"
        class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
        rules="required|max:255"
      >
        <v-textarea
          v-model="syncedCanvas.problem"
          :disabled="readonly"
          :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
          counter
          placeholder="My pitch is..."
        />
      </ValidationProvider>
    </v-row>

    <!-- COMPONENT -->
    <v-row
      justify="center"
      class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
    >
      <v-col
        cols="8"
        class
      >
        Solution
      </v-col>

      <v-col cols="4">
        <v-row v-if="stars">
          <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
            Rating
          </div>
          <v-rating
            v-model="stars.solution"
            :readonly="readonly===undefined"
            @input="onStarsChanged($event,'solution')"
          />
        </v-row>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mr-auto ml-auto mb-12"
    >
      <ValidationProvider
        v-slot="{errors,failedRules}"
        class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
        rules="required|max:255"
      >
        <v-textarea
          v-model="syncedCanvas.solution"
          :disabled="readonly"
          :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
          counter
          placeholder="My pitch is..."
        />
      </ValidationProvider>
    </v-row>

    <!-- COMPONENT -->
    <v-row
      justify="center"
      class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
    >
      <v-col
        cols="8"
        class
      >
        Innovation
      </v-col>

      <v-col cols="4">
        <v-row v-if="stars">
          <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
            Rating
          </div>
          <v-rating
            v-model="stars.innovation"
            :readonly="readonly===undefined"
            @input="onStarsChanged($event,'innovation')"
          />
        </v-row>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mr-auto ml-auto mb-12"
    >
      <ValidationProvider
        v-slot="{errors,failedRules}"
        class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
        rules="required|max:255"
      >
        <v-textarea
          v-model="syncedCanvas.innovation"
          :disabled="readonly"
          :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
          counter
          placeholder="My pitch is..."
        />
      </ValidationProvider>
    </v-row>

    <!-- COMPONENT -->
    <v-row
      justify="center"
      class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
    >
      <v-col
        cols="8"
        class
      >
        Cost
      </v-col>

      <v-col cols="4">
        <v-row v-if="stars">
          <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
            Rating
          </div>
          <v-rating
            v-model="stars.customer"
            :readonly="readonly===undefined"
            @input="onStarsChanged($event,'customer')"
          />
        </v-row>
      </v-col>
    </v-row>

    <v-row
      justify="center"
      class="mr-auto ml-auto mb-12"
    >
      <ValidationProvider
        v-slot="{errors,failedRules}"
        rules="required|max:255"
        class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
      >
        <v-textarea
          v-model="syncedCanvas.customer"
          :disabled="readonly"
          :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
          counter
          placeholder="My pitch is..."
        />
      </ValidationProvider>
    </v-row>

    <!-- <v-col
      v-if="!readonly"
      class="mr-auto ml-auto"
      cols="5"
    >
      <PCLoader v-slot="{loading,setLoader}">
        <v-btn
          :loading="loading"
          class="businessmodelcanvas_enter__button mb-10"
          @click="setLoader(saveCanvas)"
        >
          SAVE
        </v-btn>
      </PCLoader>
    </v-col> -->
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "reflect-metadata";
import { Prop, PropSync, Watch } from "vue-property-decorator";
import { ValidationProvider, ValidationObserver } from "vee-validate";
import { BusinessModelCanvas } from "@/store/Database/types/utilities";
import { FbStore } from "../../../../../store";
import { PCLoader } from "../../../../../components/utilities";
@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
    PCLoader
  }
})
export default class BusinessModelCanvasComp extends Vue {
  @Prop()
  stars!: {
    problem: number;
    solution: number;
    innovation: number;
    customer: number;
  };
  @PropSync("value")
  syncedCanvas!: BusinessModelCanvas;

  @Prop()
  readonly?: string;
  @PropSync("stars")
  syncedStars!: Record<keyof BusinessModelCanvas, Number>;
  async saveCanvas() {
    await FbStore.updateCurrentProject({
      ...this.syncedCanvas
    });
  }
  onStarsChanged(
    newRating:number,
    canvasField: "problem" | "solution" | "innovation" | "customer"
  ) {
    this.$emit('starsChanged', {newRating,canvasField})
  }

  created() {
    if (!this.stars)
      this.syncedStars = {
        problem: 0,
        solution: 0,
        innovation: 0,
        customer: 0
      };
  }
}
</script>