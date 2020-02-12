<template>
  <ValidationObserver v-slot="{invalid}">
    <v-container>
      <v-row
        justify="center"
        no-gutters
      >
        <v-col
          cols="10"
          md="10"
        >
          <v-row
            justify="start"
            justify-lg="center"
            no-gutters
            class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto mb-1"
          >
            <v-col
              cols="10"
              md="5"
              class
            >
              Problem
            </v-col>
            <v-spacer />
            <v-col
              cols="11"
              md="8"
              lg="7"
              xl="6"
            >
              <v-row
                v-if="stars"
                justify-md="end"
                justify="start"
                align="center"
                no-gutters
              >
                <!-- <v-col
                  cols="12"
                  md="6"
                  class="businessmodelcanvas_enter__ratinglabel d-none d-lg-inline-block"
                >
                  <span>Rating</span>
                </v-col> -->
                <v-col
                  cols="12"
                  sm="6"
                  class="pc-rating"
                >
                  <v-rating
                    v-model="stars.problem"
                    dense
                    :readonly="readonly===undefined"
                    @input="onStarsChanged($event,'problem')"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>



          <v-row
            v-if="readonly==true"
            justify="start"
            class="mr-auto ml-auto mb-12"
            style="padding-left: 7px"
          >
            {{ syncedCanvas.problem }}
          </v-row>








          <v-row
            v-else
            justify="center"
            class="mr-auto ml-auto"
          >
            <v-col
              cols="12"
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
                  placeholder=""
                  @input="$emit('input',syncedCanvas)"
                />
              </ValidationProvider>
            </v-col>
          </v-row>
          
          <!-- COMPONENT -->
          <v-row
            justify="start"
            justify-lg="center"
            no-gutters
            class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto mb-1"
          >
            <v-col
              cols="10"
              md="5"
              class
            >
              Solution
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              md="8"
              lg="7"
              xl="6"
            >
              <v-row
                v-if="stars"
                justify-md="end"
                justify="start"
                align="center"
                no-gutters
              >
                <!-- <v-col
                  cols="12"
                  sm="8"
                  md="7"
                  xl="5"
                  class="businessmodelcanvas_enter__ratinglabel d-none d-lg-inline-block"
                >
                  <span>Rating</span>
                </v-col> -->
                <v-col
                  cols="12"
                  sm="6"
                  class="pc-rating"
                >
                  <v-rating
                    v-model="stars.solution"
                    dense
                    :readonly="readonly===undefined"
                    @input="onStarsChanged($event,'solution')"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row
            v-if="readonly==true"
            justify="start"
            class="mr-auto ml-auto mb-12"
            style="padding-left: 7px"
          >
            {{ syncedCanvas.solution }}
          </v-row>
          <v-row
            v-else
            justify="center"
            class="mr-auto ml-auto mb-12"
          >
            <v-col
              cols="12"
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
            justify="start"
            justify-lg="center"
            no-gutters
            class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto mb-1"
          >
            <v-col
              cols="10"
              md="5"
              class
            >
              Innovation
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              md="8"
              lg="7"
              xl="6"
            >
              <v-row
                v-if="stars"
                justify-md="end"
                justify="start"
                align="center"
                no-gutters
              >
                <!-- <v-col
                  cols="12"
                  sm="8"
                  md="7"
                  xl="5"
                  class="businessmodelcanvas_enter__ratinglabel d-none d-lg-inline-block"
                >
                  <span>Rating</span>
                </v-col> -->
                <v-col
                  cols="12"
                  sm="6"
                  class="pc-rating"
                >
                  <v-rating
                    v-model="stars.innovation"
                    dense
                    :readonly="readonly===undefined"
                    @input="onStarsChanged($event,'innovation')"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row
            v-if="readonly==true"
            justify="start"
            class="mr-auto ml-auto mb-12"
            style="padding-left: 7px"
          >
            {{ syncedCanvas.innovation }}
          </v-row>
          <v-row
            v-else
            justify="center"
            class="mr-auto ml-auto mb-12"
          >
            <v-col
              cols="12"
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
            justify="start"
            justify-lg="center"
            no-gutters
            class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto mb-1"
          >
            <v-col
              cols="10"
              md="5"
              class
            >
              Customer
            </v-col>
            <v-spacer />
            <v-col
              cols="12"
              md="8"
              lg="7"
              xl="6"
            >
              <v-row
                v-if="stars"
                justify-md="end"
                justify="start"
                align="center"
                no-gutters
              >
                <!-- <v-col
                  cols="12"
                  sm="8"
                  md="7"
                  xl="5"
                  class="businessmodelcanvas_enter__ratinglabel d-none d-lg-inline-block"
                >
                  <span>Rating</span>
                </v-col> -->
                <v-col
                  cols="12"
                  sm="6"
                  class="pc-rating"
                >
                  <v-rating
                    v-model="stars.cost"
                    dense
                    :readonly="readonly===undefined"
                    @input="onStarsChanged($event,'cost')"
                  />
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-row
            v-if="readonly==true"
            justify="start"
            class="mr-auto ml-auto mb-12"
            style="padding-left: 7px"
          >
            {{ syncedCanvas.customer }}
          </v-row>
          <v-row
            v-else
            justify="center"
            class="mr-auto ml-auto mb-12"
          >
            <v-col
              cols="12"
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
  value!: BusinessModelCanvas
  
  
  get syncedCanvas(){
    return this.value
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