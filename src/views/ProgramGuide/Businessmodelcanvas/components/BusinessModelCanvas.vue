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
        <v-row class>
          <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
            Rating
          </div>
          <v-rating
            v-model="stars.problem"
            :readonly="!!readonly"
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
        <v-row class>
          <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
            Rating
          </div>
          <v-rating
            v-model="stars.solution"
            :readonly="!!readonly"
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
        <v-row class>
          <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
            Rating
          </div>
          <v-rating
            v-model="stars.innovation"
            :readonly="!readonly"
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
        <v-row class>
          <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
            Rating
          </div>
          <v-rating
            v-model="stars.cost"
            :readonly="!!readonly"
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
          v-model="syncedCanvas.cost"
          :disabled="readonly"
          :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
          counter
          placeholder="My pitch is..."
        />
      </ValidationProvider>
    </v-row>

    <v-col
      v-if="!readonly"
      class="mr-auto ml-auto"
      cols="5"
    >
      <v-btn
        class="businessmodelcanvas_enter__button mb-10"
        :disabled="invalid"
      >
        SAVE
      </v-btn>
    </v-col>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import "reflect-metadata";
import { Prop, PropSync, Watch } from "vue-property-decorator";
import { ValidationProvider, ValidationObserver } from "vee-validate";
@Component({
  components: {
    ValidationProvider,
    ValidationObserver
  }
})
export default class BusinessModelCanvas extends Vue {
  @Prop()
  stars!: {
    problem: number;
    solution: number;
    innovation: number;
    cost: number;
  };
  @PropSync("value")
  syncedCanvas!: BusinessModelCanvas;
  @Prop()
  readonly?: string;
  @PropSync("stars")
  syncedStars!: {
    problem: number;
    solution: number;
    innovation: number;
    cost: number;
  };
  @Watch("syncedCanvas", { deep: true })
  onCanvasChanged(newVal: BusinessModelCanvas) {
    this.$emit("input", newVal);
  }
  @Watch("syncedStars", { deep: true })
  onStarsChanged(newVal: BusinessModelCanvas) {
    this.$emit("starsChanged", newVal);
  }
  created() {
    if (!this.stars)
      this.syncedStars = {
        problem: 0,
        solution: 0,
        innovation: 0,
        cost: 0
      };
  }
}
</script>