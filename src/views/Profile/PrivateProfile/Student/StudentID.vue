<template>
  <ValidationObserver v-slot="{validate}">
    <v-row
      justify="center"
      class="mt-12"
    >
      <img
        id="citizenid__icon"
        src="@/assets/citizen-id.png"
      >

      <v-col
        id="citizenid__containtop"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto citizenid__title"
        >
          GET STARTED
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
          <v-col cols="">
            <!-- PROGRAM INFORMATION -->
            <template>
              <v-row
                justify="center"
                class="mr-auto ml-auto mt-5 mb-5 studentid__categorytitle"
              >
                We'd like to learn a bit more about you.
              </v-row>
            </template>

            <!-- INTERNSHIP INTEREST LEVEL -->
            <template>
              <v-row
                class="studentid__questiontitle mt-10"
                justify="center"
              >
                What's your interest level in an internship?
              </v-row>
              <v-row
                no-gutters
                justify="center"
              >
                <v-col
                  cols="12"
                  sm="7"
                >
                  <v-radio-group
                    v-model="internshipinterest"
                    column
                  >
                    <v-radio
                      label="Highly Interested"
                      value="2"
                    />
                    <v-radio
                      label="Interested"
                      value="1"
                    />
                    <v-radio
                      label="Not Interested"
                      value="0"
                    />
                  </v-radio-group>
                </v-col>
              </v-row>
            </template>

            <!-- UNPAID AND/OR PAID? -->
            <template>
              <v-row
                class="studentid__questiontitle mt-10"
                justify="center"
              >
                What compensation types are you open to?
              </v-row>
              <v-row
                no-gutters
                justify="center"
              >
                <v-col
                  cols="12"
                  sm="7"
                >
                  <v-checkbox
                    v-model="unpaid"
                    hide-details
                    label="Unpaid Experience"
                  />
                  <v-checkbox
                    v-model="paid"
                    hide-details
                    label="Paid"
                  />
                </v-col>
              </v-row>
            </template>


            <!-- FREE OR REDUCED LUNCH -->
            <template>
              <v-row
                class="studentid__questiontitle mt-10"
                justify="center"
              >
                Do you get free or reduced lunch at school?
              </v-row>
              <v-row
                no-gutters
                justify="center"
              >
                <v-col
                  cols="12"
                  sm="7"
                >
                  <v-radio-group
                    v-model="lunchstatus"
                    column
                  >
                    <v-radio
                      label="Yes"
                      value="1"
                    />
                    <v-radio
                      label="No"
                      value="0"
                    />
                    <v-radio
                      label="I'm not sure"
                      value="I'm not sure"
                    />
                    <v-radio
                      label="Decline to answer"
                      value="Decline to answer"
                    />
                  </v-radio-group>
                </v-col>
              </v-row>
            </template>

            <!-- RESUME STATUS -->
            <template>
              <v-row
                class="studentid__questiontitle mt-10"
                justify="center"
              >
                Do you have a resume?
              </v-row>
              <v-row
                no-gutters
                justify="center"
              >
                <v-col
                  cols="12"
                  sm="7"
                >
                  <v-checkbox
                    v-model="resume"
                    hide-details
                    label="Yes"
                  />
                  <v-checkbox
                    v-model="noresume"
                    hide-details
                    label="No"
                  />
                  <v-checkbox
                    v-model="linkedin"
                    hide-details
                    label="LinkedIn.com Resume"
                  />
                </v-col>
              </v-row>
            </template>


            <!-- PLANS AFTER HIGH SCHOOL? -->
            <template>
              <v-row
                class="studentid__questiontitle mt-12 mb-10"
                justify="center"
              >
                What is your plan immediately after high school?
              </v-row>
            </template>

            <!-- POST SECONDARY PLANS -->

            <template>
              <v-row
                no-gutters
                justify="center mt-10"
              >
                <v-col
                  cols="12"
                  sm="10"
                >
                  <v-select
                    v-model="postsecondaryvalue"
                    :items="postsecondary"
                    chips
                    label="What is your plan immediately after high school?"
                    multiple
                    outlined
                  />
                </v-col>
              </v-row>
            </template>





            <!-- RATE PATHWAY INTEREST -->
            <template>
              <v-row
                class="studentid__questiontitle mt-10 mb-10"
                justify="center"
              >
                Rate your interest in the following pathways
              </v-row>
            </template>

            <!-- PATHWAY 1 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"  
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Agriculture & Natural Resources
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway1"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>


            <!-- PATHWAY 2 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Arts, Media and Entertainment
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway2"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>


            <!-- PATHWAY 3 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Building and Construction Trades
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway3"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>


            <!-- PATHWAY 4 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Business and Finance
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway4"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>



            <!-- PATHWAY 5 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Education, Childhood Development & Family Services
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway5"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 6 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Energy, Environment & Utilities
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway6"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 7 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Engineering & Architecture
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway7"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 8 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Fashion & Interior Design
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway8"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 9 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Health Science & Medical Technology
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway9"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 10 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Hospitality, Tourism & Recreation
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway10"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 11 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Information & Communication Technologies
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway11"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 12 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Manufacturing & Product Development
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway12"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 13 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Marketing, Sales & Service
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway13"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 14 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Public Services
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway14"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- PATHWAY 15 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Transportation
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="pathway15"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>




            <!-- RATE POSITION INTEREST -->
            <template>
              <v-row
                class="studentid__questiontitle mt-12 mb-10"
                justify="center"
              >
                Rate your interest in the following positions
              </v-row>
            </template>

            <!-- POSITION 1 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Technician & Engineer
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="position1"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- POSITION 2 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Marketing & Sales
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="position2"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>

            <!-- POSITION 3 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Research & Development
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="position3"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>


            <!-- POSITION 4 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Operations & Management
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="position4"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>


            <!-- POSITION 5 -->
            <template>
              <v-row
                no-gutters
                justify="center"
                class="mt-5 mb-5"
              >
                <v-col
                  cols="8"
                  class="studentid__questionsubtitle mt-1"
                >
                  Community & Customer Success
                </v-col>
                <v-col cols="3">
                  <v-rating
                    v-model="position5"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :half-increments="halfIncrements"
                    :hover="hover"
                    :readonly="readonly"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                </v-col>
              </v-row>
            </template>





            <!-- TRANSPORTATION -->
            <template>
              <v-row
                class="studentid__questiontitle mt-10"
                justify="center"
              >
                What is your primary mode of transport?
              </v-row>
              <v-row
                no-gutters
                justify="center"
              >
                <v-col
                  cols="12"
                  sm="7"
                >
                  <v-radio-group
                    v-model="transport"
                    column
                  >
                    <v-radio
                      label="I drive"
                      value="Car"
                    />
                    <v-radio
                      label="My family"
                      value="Family"
                    />
                    <v-radio
                      label="Public transit"
                      value="Public"
                    />
                    <v-radio
                      label="Ridesharing"
                      value="Rideshare"
                    />
                    <v-radio
                      label="Decline to answer"
                      value="Decline"
                    />
                  </v-radio-group>
                </v-col>
              </v-row>
            </template>



            <!-- DIGITAL EQUITY -->
            <template>
              <v-row
                class="studentid__questiontitle mt-10 mb-10"
                justify="center"
              >
                What is your access to technology?
              </v-row>
            </template>

            <!-- WHAT TECHNOLOGY DO YOU CURRENTLY OWN? -->

            <template>
              <v-row
                no-gutters
                justify="center mt-10"
              >
                <v-col
                  cols="12"
                  sm="10"
                >
                  <v-select
                    v-model="techownershipvalue"
                    :items="techownership"
                    chips
                    label="What technology do you currently own?"
                    multiple
                    outlined
                  />
                </v-col>
              </v-row>
            </template>

            <!-- HOW DO YOU TYPICALLY GET ON THE INTERNET? -->

            <template>
              <v-row
                no-gutters
                justify="center mt-10"
              >
                <v-col
                  cols="12"
                  sm="10"
                >
                  <v-select
                    v-model="internetaccessvalue"
                    :items="internetaccess"
                    chips
                    label="How do you typically get on the internet?"
                    multiple
                    outlined
                  />
                </v-col>
              </v-row>
            </template>


            <!-- SOCIAL MEDIA -->
            <template>
              <v-row
                class="studentid__questiontitle mt-10 mb-10"
                justify="center"
              >
                What's your handle?
              </v-row>
            </template>  



          <!-- END -->
          </v-col>
        </v-row>
        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <button
            class="citizenid__button mb-10"
            @click="()=>{validate().then(val => {if(val)submit()} )}"
          >
            SAVE
          </button>
        </v-col>
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

@Component<StudentID>({
    components: {
    ValidationObserver,
    ValidationProvider
  },
  data: () => ({

// HEART RATING
      emptyIcon: 'mdi-heart-outline',
      fullIcon: 'mdi-heart',
      halfIcon: 'mdi-heart-half-full',
      hover: false,
      length: 5,
      pathway1: 0,
      pathway2: 0,
      pathway3: 0,
      pathway4: 0,
      pathway5: 0,
      pathway6: 0,
      pathway7: 0,
      pathway8: 0,
      pathway9: 0,
      pathway10: 0,
      pathway11: 0,
      pathway12: 0,
      pathway13: 0,
      pathway14: 0,
      pathway15: 0,
      size: 22,
      dense: true,
      color: 'red lighten-3',
      colors: [
        'primary',
        'warning',
        'green',
        'red',
        'blue',
        'error',
        'teal',
        'red lighten-3',
      ],
      bgColor: 'grey lighten-1',
      bgColors: [
        'grey lighten-2',
        'warning lighten-1',
        'green lighten-2',
        'red lighten-2',
        'grey',
        '#eee',
        'cyan lighten-2',
        'grey lighten-1',
      ],


            postsecondary: ['Career Technical School', 'Community College', 'Transfer to University', 'University', 'Part-Time Job', 'Full-Time Job'],
            postsecondaryvalue: null,

            techownership: ['Smartphone', 'Tablet', 'Laptop', 'Desktop'],
            techownershipvalue: null,

            internetaccess: ['Home Internet', 'Mobile Hotspot', 'Public WiFi'],
            internetaccessvalue: null,


// HEART RATING END

      position1: 0,
      position2: 0,
      position3: 0,
      position4: 0,
      position5: 0,
    

    // END
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => ((this.$refs.picker as any).activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      (this.$refs.menu as any).save(date);
    }
  }
})













export default class StudentID extends Vue {
  items = ["Student", "Teacher", "Employer","Program"];
  firstName = FbStore.currentUserProfile!.firstName || "";
  lastName = FbStore.currentUserProfile!.lastName || "";
  citizenType = startCase(FbStore.currentUserProfile!.citizenType) || "";
  async submit() {
    let { firstName, lastName, citizenType } = this;
    await FbStore.updateCurrentUserProfile({
      firstName,
      lastName,
      citizenType: citizenType.toLowerCase() as
        | "employer"
        | "teacher"
        | "student"



    });


    this.$router.push({ name: "program.programlist" });
  }
}
</script>
