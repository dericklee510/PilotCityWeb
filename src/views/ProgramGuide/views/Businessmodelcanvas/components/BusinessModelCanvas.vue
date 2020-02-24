<template>
  <ValidationObserver v-slot="{invalid}">
    <v-container>
      <v-row
        justify="center"
        justify-lg="center"
        no-gutters
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto mb-1 pr-10 pl-10"
      >
        <!-- PROBLEM -->

        <v-col
          cols="6"
          md="6"
          lg="6"
          xl="6"
        >
          Problem


          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            right
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon
                  small
                  class="pb-1"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>What problem are you solving for?</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-col>

        <!-- RATING -->

        <v-col
          cols="6"
          md="6"
          lg="6"
          xl="6"
        >
          <v-row
            v-if="stars"
            justify="end"
            no-gutters
            class="pc-rating"
          >
            <!-- <v-col
                  cols="12"
                  md="6"
                  class="businessmodelcanvas_enter__ratinglabel d-none d-lg-inline-block"
                >
                  <span>Rating</span>
            </v-col>-->

            <v-rating
              v-model="stars.problem"
              color="yellow darken-3"
              dense
              :readonly="readonly===undefined"
              @input="onStarsChanged($event,'problem')"
            />
          </v-row>
        </v-col>
      </v-row>

      <!-- <v-row
            v-if="readonly==true"
            justify="start"
            class="mr-auto ml-auto mb-12 mt-3 businessmodelcanvas_enter__paragraph"
            style="padding-left: 0px"
          >
            {{ syncedCanvas.problem }}
          </v-row>

          <v-row
            v-if="!syncedCanvas.problem"
            justify="start"
            class="mr-auto ml-auto mb-12 mt-3 businessmodelcanvas_enter__paragraph text-center"
            style="width:100%;"
          > Nothing much yet
      </v-row>-->

      <!-- THE GNARLY DIV -->

      <v-row
        v-if="readonly==true"
        justify="start"
        class="mr-auto ml-auto mb-12 mt-3 businessmodelcanvas_enter__paragraph pr-10 pl-10"
        style="padding-left: 0px"
      >
        {{ syncedCanvas.problem }}
        <span
          v-if="!syncedCanvas.problem"
          class="businessmodelcanvas_enter__paragraph-nothingyet"
        >Not completed yet</span>
      </v-row>

      <v-row
        v-else
        justify="center"
        class="mr-auto ml-auto"
      >
        <v-col
          cols="11"
          class="pa-0"
        >
          <ValidationProvider
            v-slot="{errors,failedRules}"
            name="Problem"
            rules="required|max:255"
          >
            <v-textarea
              v-model="syncedCanvas.problem"
              class="businessmodelcanvas_enter__paragraph"
              :disabled="readonly"
              :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
              counter
              placeholder
              @input="$emit('input',syncedCanvas)"
            />
          </ValidationProvider>
        </v-col>
      </v-row>

      <!-- COMPONENT -->
      <v-row
        justify="center"
        justify-lg="center"
        no-gutters
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto mb-1 pr-10 pl-10"
      >
        <v-col
          cols="6"
          md="6"
          lg="6"
          xl="6"
          class
        >
          Solution

          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            right
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon
                  small
                  class="pb-1"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>Describe your project and it's solution to the problem</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-col>

        <!-- RATING -->

        <v-col
          cols="6"
          md="6"
          lg="6"
          xl="6"
        >
          <v-row
            v-if="stars"
            justify="end"
            no-gutters
            class="pc-rating"
          >
            <!-- <v-col
                  cols="12"
                  sm="8"
                  md="7"
                  xl="5"
                  class="businessmodelcanvas_enter__ratinglabel d-none d-lg-inline-block"
                >
                  <span>Rating</span>
            </v-col>-->

            <v-rating
              v-model="stars.solution"
              color="yellow darken-3"
              dense
              :readonly="readonly===undefined"
              @input="onStarsChanged($event,'solution')"
            />
          </v-row>
        </v-col>
      </v-row>

      <v-row
        v-if="readonly==true"
        justify="start"
        class="mr-auto ml-auto mb-12 mt-3 businessmodelcanvas_enter__paragraph pr-10 pl-10"
        style="padding-left: 0px"
      >
        {{ syncedCanvas.solution }}
        <span
          v-if="!syncedCanvas.solution"
          class="businessmodelcanvas_enter__paragraph-nothingyet"
        >Not completed yet</span>
      </v-row>

      <v-row
        v-else
        justify="center"
        class="mr-auto ml-auto"
      >
        <v-col
          cols="11"
          class="pa-0"
        >
          <ValidationProvider
            v-slot="{errors,failedRules}"
            rules="required|max:255"
          >
            <v-textarea
              v-model="syncedCanvas.solution"
              class="businessmodelcanvas_enter__paragraph"
              :disabled="readonly"
              :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
              counter
              placeholder="My pitch is..."
              @input="$emit('input',syncedCanvas)"
            />
          </ValidationProvider>
        </v-col>
      </v-row>

      <!-- COMPONENT -->
      <v-row
        justify="center"
        justify-lg="center"
        no-gutters
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto mb-1 pr-10 pl-10"
      >
        <v-col
          cols="6"
          md="6"
          lg="6"
          xl="6"
          class
        >
          Innovation


          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            right
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon
                  small
                  class="pb-1"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>What unique value proposition does your solution offer?</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-col>

        <!-- RATING -->

        <v-col
          cols="6"
          md="6"
          lg="6"
          xl="6"
        >
          <v-row
            v-if="stars"
            justify="end"
            no-gutters
            class="pc-rating"
          >
            <!-- <v-col
                  cols="12"
                  sm="8"
                  md="7"
                  xl="5"
                  class="businessmodelcanvas_enter__ratinglabel d-none d-lg-inline-block"
                >
                  <span>Rating</span>
            </v-col>-->

            <v-rating
              v-model="stars.innovation"
              color="yellow darken-3"
              dense
              :readonly="readonly===undefined"
              @input="onStarsChanged($event,'innovation')"
            />
          </v-row>
        </v-col>
      </v-row>

      <v-row
        v-if="readonly==true"
        justify="start"
        class="mr-auto ml-auto mb-12 mt-3 businessmodelcanvas_enter__paragraph pr-10 pl-10"
        style="padding-left: 0px"
      >
        {{ syncedCanvas.innovation }}
        <span
          v-if="!syncedCanvas.innovation"
          class="businessmodelcanvas_enter__paragraph-nothingyet"
        >Not completed yet</span>
      </v-row>

      <v-row
        v-else
        justify="center"
        class="mr-auto ml-auto"
      >
        <v-col
          cols="11"
          class="pa-0"
        >
          <ValidationProvider
            v-slot="{errors,failedRules}"
            rules="required|max:255"
          >
            <v-textarea
              v-model="syncedCanvas.innovation"
              class="businessmodelcanvas_enter__paragraph"
              :disabled="readonly"
              :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
              counter
              placeholder="My pitch is..."
              @input="$emit('input',syncedCanvas)"
            />
          </ValidationProvider>
        </v-col>
      </v-row>

      <!-- COMPONENT -->
      <v-row
        justify="center"
        justify-lg="center"
        no-gutters
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto mb-1 pr-10 pl-10"
      >
        <v-col
          cols="6"
          md="6"
          lg="6"
          xl="6"
          class
        >
          Customer


          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            right
          >
            <template v-slot:activator="{ on }">
              <v-btn
                icon
                v-on="on"
              >
                <v-icon
                  small
                  class="pb-1"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>Who is the user, stakeholder or customer of your solution?</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
        </v-col>

        <!-- RATING -->

        <v-col
          cols="6"
          md="6"
          lg="6"
          xl="6"
        >
          <v-row
            v-if="stars"
            justify="end"
            no-gutters
            class="pc-rating"
          >
            <!-- <v-col
                  cols="12"
                  sm="8"
                  md="7"
                  xl="5"
                  class="businessmodelcanvas_enter__ratinglabel d-none d-lg-inline-block"
                >
                  <span>Rating</span>
            </v-col>-->

            <v-rating
              v-model="stars.cost"
              color="yellow darken-3"
              dense
              :readonly="readonly===undefined"
              @input="onStarsChanged($event,'cost')"
            />
          </v-row>
        </v-col>
      </v-row>

      <v-row
        v-if="readonly==true"
        justify="start"
        class="mr-auto ml-auto mb-12 mt-3 businessmodelcanvas_enter__paragraph pr-10 pl-10"
        style="padding-left: 0px"
      >
        {{ syncedCanvas.customer }}
        <span
          v-if="!syncedCanvas.customer"
          class="businessmodelcanvas_enter__paragraph-nothingyet"
        >Not completed yet</span>
      </v-row>

      <v-row
        v-else
        justify="center"
        class="mr-auto ml-auto"
      >
        <v-col
          cols="11"
          class="pa-0"
        >
          <ValidationProvider
            v-slot="{errors,failedRules}"
            rules="required|max:255"
          >
            <v-textarea
              v-model="syncedCanvas.customer"
              class="businessmodelcanvas_enter__paragraph"
              :disabled="readonly"
              :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
              counter
              placeholder="My pitch is..."
              @input="$emit('input',syncedCanvas)"
            />
          </ValidationProvider>
        </v-col>
      </v-row>
    </v-container>
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
import { Oops } from "@/views/ProgramGuide/components";
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
  @Prop()
  value!: BusinessModelCanvas;

  get syncedCanvas() {
    return this.value;
  }

  @Prop()
  readonly?: boolean;
  @PropSync("stars")
  syncedStars!: Record<keyof BusinessModelCanvas, Number>;
  async saveCanvas() {
    await FbStore.updateCurrentProject({
      ...this.syncedCanvas
    });
  }
  onStarsChanged(
    newRating: number,
    canvasField: "problem" | "solution" | "innovation" | "customer"
  ) {
    this.$emit("starsChanged", { newRating, canvasField });
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