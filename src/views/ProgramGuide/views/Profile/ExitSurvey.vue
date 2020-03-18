<template>
  <ValidationObserver v-slot="{validate}">
    <v-row
      justify="center"
      class="mt-12"
    >
      <img
        id="citizenid__exitsurveyicon"
        src="@/assets/exitsurvey.png"
      >

      <v-col
        id="citizenid__containtop"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto citizenid__title"
        >
          COMPLETE THE PROGRAM
        </v-row>
      </v-col>

      <v-col
        id="citizenid__containbottom"
        cols="8"
      >
        <v-row
          justify="center"
          class="pt-10"
        >
          <v-col cols="9">
            <!-- PROGRAM INFORMATION -->
            <v-row
              justify="center"
              class="mr-auto ml-auto mt-5 mb-12 studentid__categorytitle"
            >
              Share your experience, qualify for opportunities and auto-apply for internship
            </v-row>

            <v-row
              justify="center"
              class="prompt__divider ml-auto mr-auto mt-5 mb-12"
            />

            <!-- PROGRAM OUTCOME 1 -->

            <v-row
              class="studentid__questiontitle mt-12"
              justify="center"
            >
              Would you prefer this program over traditional learning?
            </v-row>

            <v-row
              no-gutters
              justify="center"
              class="mt-5 mb-5"
            >
              <ValidationProvider
                v-slot="{errors}"
                rules="required"
              >
                <v-rating
                  v-model="traditional"
                  :length="length"
                  :empty-icon="emptyIcon"
                  :full-icon="fullIcon"
                  :half-icon="halfIcon"
                  :hover="hover"
                  :size="size"
                  :dense="dense"
                  :color="color"
                  :background-color="bgColor"
                  large
                />
                <span class="error--text caption">{{ errors[0] }}</span>
              </ValidationProvider>
            </v-row>

            <!-- PROGRAM OUTCOME 2 -->

            <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >
              Would you like to join our program next year?
            </v-row>

            <v-row
              no-gutters
              justify="center"
              class="mt-5 mb-5"
            >
              <ValidationProvider
                v-slot="{errors}"
                rules="required"
              >
                <v-rating
                  v-model="joinAgain"
                  :length="length"
                  :empty-icon="emptyIcon"
                  :full-icon="fullIcon"
                  :half-icon="halfIcon"
                  :hover="hover"
                  :size="size"
                  :dense="dense"
                  :color="color"
                  :background-color="bgColor"
                  large
                />
                <span class="error--text caption">{{ errors[0] }}</span>
              </ValidationProvider>
            </v-row>

            <!-- PROGRAM OUTCOME 3 -->

            <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >
              Would you recommend this program to your other teachers?
            </v-row>

            <v-row
              no-gutters
              justify="center"
              class="mt-5 mb-5"
            >
              <ValidationProvider
                v-slot="{errors}"
                rules="required"
              >
                <v-rating
                  v-model="recommend"
                  :length="length"
                  :empty-icon="emptyIcon"
                  :full-icon="fullIcon"
                  :half-icon="halfIcon"
                  :hover="hover"
                  :size="size"
                  :dense="dense"
                  :color="color"
                  :background-color="bgColor"
                  large
                />
                <span class="error--text caption">{{ errors[0] }}</span>
              </ValidationProvider>
            </v-row>

            <!-- GRADUATING SENIOR V2 -->

            <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >
              Are you a graduating high school senior?
            </v-row>


            <v-row
              no-gutters
              justify="center"
            >
              <span class="agenda-view__switchlabel">NO</span>
              <v-switch
                v-model="graduating"
                inset
              />
              <span class="agenda-view__switchlabel">YES</span>
            </v-row>


            <v-row
              v-if="graduating"
              no-gutters
              justify="center mt-2"
            >
              <v-col
                cols="12"
                sm="7"
              >
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required"
                >
                  <v-text-field
                    v-model="postHighPlan"
                    :error-messages="errors"
                    label="Where are you going after high school?"
                    hint="Describe or enter name of school, college or program"
                    persistent-hint
                    outlined
                  />
                </ValidationProvider>
              </v-col>
            </v-row>

            <!-- COMMUNITY COLLEGE -->

            <v-row
              class="studentid__questiontitle mt-7"
              justify="center"
            >
              Automatically qualify to take classes at your local community college?
            </v-row>


            <v-row
              no-gutters
              justify="center"
            >
              <span class="agenda-view__switchlabel">NO</span>
              <v-switch
                v-model="communityCollegeOffer"
                inset
              />
              <span class="agenda-view__switchlabel">YES</span>
            </v-row>


            <!-- CODING SCHOOL V2 -->

            <v-row
              class="studentid__questiontitle mt-7"
              justify="center"
            >
              Automatically qualify for coding or computer science programs?
            </v-row>

            <v-row
              no-gutters
              justify="center"
            >
              <span class="agenda-view__switchlabel">NO</span>
              <v-switch
                v-model="csOffer"
                inset
              />
              <span class="agenda-view__switchlabel">YES</span>
            </v-row>



            <v-row
              v-if="csOffer"
              no-gutters
              justify="center mt-2"
            >
              <v-col
                cols="12"
                sm="7"
              >
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required"
                >
                  <v-text-field
                    v-model="csFuture"
                    :error-messages="errors"
                    label="What future do you see in this career path?"
                    persistent-hint
                    outlined
                  />
                </ValidationProvider>
              </v-col>
            </v-row>





            <!-- AUTO APP APPLY>? -->

            <v-row
              class="studentid__questiontitle mt-7"
              justify="center"
            >
              Automatically apply for an internship with your employer?
            </v-row>

            <v-row
              no-gutters
              justify="center"
            >
              <span class="agenda-view__switchlabel">NO</span>
              <v-switch
                v-model="autoApp"
                inset
                value="true"
              />
              <span class="agenda-view__switchlabel">YES</span>
            </v-row>

            <!-- AUTO-APP OPT-IN VIA MOBILE VERIFICATION -->
            <v-col
              v-if="autoApp"
              class="auto-app mt-12 pt-12 pb-12"
            >
              <v-row
                justify="center"
                class="mr-auto ml-auto mb-12 studentid__categorytitle"
              >
                Auto-apply for an internship
              </v-row>


              <!-- <v-row
          justify="center"
          class="prompt__dividerexitsurvey ml-auto mr-auto mt-5 mb-12"
        /> -->


              <!-- <v-row class="studentid__questiontitle" justify="center">Verify your mobile phone number</v-row> -->

              <v-row
                no-gutters
                justify="center"
              >
                <v-col
                  class="mr-2"
                  cols="9"
                  sm="5"
                >
                  <v-text-field
                    v-model="mobilenumber"
                    label="Verify your mobile number"
                    hint="(555) 555-5555"
                    persistent-hint
                    outlined
                  />
                </v-col>

                <v-col
                  cols="3"
                  sm="2"
                >
                  <v-btn
                    x-large
                    dark
                    depressed
                  >
                    Verify
                  </v-btn>
                </v-col>
              </v-row>

              <v-row
                class="studentid__nomobile mt-4"
                justify="center"
                href="https://www.pilotcity.com/library/tips-to-prep-60-second-pitch"
                target="_blank"
              >
                <a>I don't have a mobile number</a>
              </v-row>



              <!-- SUMMER PLANS -->

              <v-row
                class="studentid__questiontitle mt-10"
                justify="center"
              >
                Do you have any additional Summer plans?
              </v-row>

              <v-row
                no-gutters
                justify="center"
              >
                <v-col
                  cols="12"
                  sm="9"
                  class="pa-5"
                >
                  <v-switch
                    v-model="summerPlans"
                    inset
                    :label="`Do you plan on going on Summer Vacation?`"
                  />

                  <v-row
                    v-if="summerPlans"
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <v-text-field
                        v-model="dateRangeText"
                        label="When do you leave and come back?"
                        prepend-icon="event"
                        readonly
                      />
                      <!-- model: {{ dates }} -->
                    </v-col>
                  </v-row>

                  <v-switch
                    v-model="summerjob"
                    inset
                    :label="`Do you plan on getting a Summer Job?`"
                  />

                  <v-row
                    v-if="summerjob"
                    no-gutters
                    justify="center mt-2"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <v-text-field
                        label="How many hours per week?"
                        hint="Enter number of hours only"
                        persistent-hint
                        outlined
                      />
                    </v-col>
                  </v-row>

                  <v-switch
                    v-model="summercollegeclass"
                    inset
                    :label="`Do you plan on taking Summer College Classes?`"
                  />

                  <v-row
                    v-if="summercollegeclass"
                    no-gutters
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <v-text-field
                        label="College Name"
                        hint="Enter the name of the college"
                        persistent-hint
                        outlined
                      />
                    </v-col>
                  </v-row>

                  <v-row
                    v-if="summercollegeclass"
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <v-menu
                        v-model="menu1"
                        :close-on-content-click="false"
                        max-width="290"
                      >
                        <template v-slot:activator="{ on }">
                          <v-text-field
                            :value="date.every(val => val)?date:null | daterange"
                            clearable
                            label="When does it start and end?"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                            @click:clear="date = []"
                          />
                        </template>
                        <v-date-picker
                          v-model="date"
                          range
                          @change="menu1=(date.length == 2)?false:true"
                        />
                      </v-menu>
                      <!-- model: {{ dates }} -->
                    </v-col>
                  </v-row>

                  <v-switch
                    v-model="summerschool"
                    inset
                    :label="`Will you have to take Summer School?`"
                  />

                  <v-row
                    v-if="summerschool"
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <v-text-field
                        v-model="dateRangeText"
                        label="When does it start and end?"
                        prepend-icon="event"
                        readonly
                      />
                      <!-- model: {{ dates }} -->
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </v-row>
        <v-row
          class="mt-10 mb-10"
          no-gutters
          justify="center"
        >
          <v-col cols="4">
            <NextNode
              v-slot="{setNext}"
              @CallbackComplete="$emit('nextNode')"
            >
              <v-btn
                id="editcasestudies__button"
                class="mb-10 mt-8"
                text
                solo
                depressed
                outlined
                height="73.5px"
                @click="validate().then(val=>{if(val)setNext(submit)})"
              >
                SUBMIT
              </v-btn>
            </NextNode>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </ValidationObserver>
</template>


<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mask } from "vue-the-mask";
import { FbStore } from "@/store";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { startCase } from "lodash";
import { StudentForm } from "../../../../store/Database/types/types";
import { firebase } from "@/firebase/init";
import { NextNode } from "@/views/ProgramGuide/components";
import { keys } from 'ts-transformer-keys';
 import moment from 'moment'
@Component<ExitSurvey>({
  components: {
    ValidationObserver,
    ValidationProvider,
    NextNode
  },
  data: () => {
    let style  = ({
    // Data Typings
    graduating: null,
    postHighPlan: null,
    csOffer: null,
    csFuture:null,
    summerPlans: null,
    summercollegeclass: null,
    summerjob: null,
    summerschool: null,
    mobilenumber:null,
    autoApp: true,
    communityCollegeOffer:null,
    traditional: null,
    joinAgain: null,
    recommend: null,

    phonemask: "###-###-####",
    emptyIcon: "mdi-heart-outline",
    fullIcon: "mdi-heart",
    halfIcon: "mdi-heart-half-full",
    hover: false,
    length: 5,
    size: 22,
    dense: true,
    color: "red lighten-3",
    colors: [
      "primary",
      "warning",
      "green",
      "red",
      "blue",
      "error",
      "teal",
      "red lighten-3"
    ],
    bgColor: "grey lighten-1",
    bgColors: [
      "grey lighten-2",
      "warning lighten-1",
      "green lighten-2",
      "red lighten-2",
      "grey",
      "#eee",
      "cyan lighten-2",
      "grey lighten-1"
    ],

    // HEART RATING END
    // END
  })
  // console.log(keys<StudentForm.exitForm>())
  return style
  },
  filters:{
    daterange: function(range:[string]| [string,string] | null){
      //each string is date in iso8601 format
      return range?range.map(val => moment(val).format("MMMM Do")).join(" - "):null
    }
  }
})
export default class ExitSurvey extends Vue {
  date = []
  programForm!: StudentForm.programForm;
  menu1 = false
}
</script>
