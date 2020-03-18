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
                  v-model="outcome1"
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
                  v-model="outcome2"
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
                  v-model="outcome3"
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
                v-model="graduatingsenior"
                inset
              />
              <span class="agenda-view__switchlabel">YES</span>
            </v-row>


            <v-row
              v-if="graduatingsenior"
              no-gutters
              justify="center mt-2"
            >
              <v-col
                cols="12"
                sm="7"
              >
                <v-text-field
                  label="Where are you going after high school?"
                  hint="Describe or enter name of school, college or program"
                  persistent-hint
                  outlined
                />
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
                v-model="communitycollege"
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
                v-model="codingschool"
                inset
              />
              <span class="agenda-view__switchlabel">YES</span>
            </v-row>



            <v-row
              v-if="codingschool"
              no-gutters
              justify="center mt-2"
            >
              <v-col
                cols="12"
                sm="7"
              >
                <v-text-field
                  label="What future do you see in this career path?"

                  persistent-hint
                  outlined
                />
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
                v-model="autoapp"
                inset
                value="true"
              />
              <span class="agenda-view__switchlabel">YES</span>
            </v-row>



            <!-- GOALS AFTER HIGH SCHOOL -->

            <!-- <v-row
              justify="center"
              class="mr-auto ml-auto mt-12 mb-12 studentid__categorytitle"
            >Let us help you with your goals after high school</v-row> -->


            <!-- GRADUATING SENIOR? -->

            <!-- <v-row no-gutters justify="center">
              <v-col cols="12" sm="9">
                <v-sheet class="pa-5">
                  <v-switch
                    v-model="graduatingsenior"
                    inset
                    :label="`Are you a graduating senior?`"
                  ></v-switch>

                  <v-row v-if="graduatingsenior" no-gutters justify="center mt-2">
                    <v-col cols="12" sm="12">
                      <v-text-field
                        label="Where are you going after high school?"
                        hint="Enter the name of the college, school, employer or description"
                        persistent-hint
                        outlined
                      ></v-text-field>
                    </v-col>
                  </v-row>

                  <v-switch
                    v-model="codingschool"
                    inset
                    :label="`Interested in computer science or being a coder?`"
                  ></v-switch> -->

            <!-- CODING SCHOOL -->

            <!-- <v-row no-gutters justify="center" v-if="codingschool">
                    <v-col cols="12" sm="7">
                      <ValidationProvider v-slot="{errors}" rules="required">
                        <v-checkbox
                          v-model="compensationType"
                          :error-messages="errors"
                          hide-details
                          label="Plan to study in university"
                          value="codingschool1"
                        />
                        <v-checkbox
                          v-model="compensationType"
                          :error-messages="errors"
                          hide-details
                          label="Willing to take a bootcamp"
                          value="codingschool2"
                        />
                        <v-checkbox
                          v-model="compensationType"
                          :error-messages="errors"
                          hide-details
                          label="I cannot afford"
                          value="codingschool3"
                        />
                        <span class="error--text caption">{{ errors[0] }}</span>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-sheet>
              </v-col>
            </v-row> -->




            <!-- AUTO-APP OPT-IN VIA MOBILE VERIFICATION -->
            <v-col
              v-if="autoapp"
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
                    v-model="summervacation"
                    inset
                    :label="`Do you plan on going on Summer Vacation?`"
                  />

                  <v-row
                    v-if="summervacation"
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
                    justify="center mt-2"
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
                            :value="date | moment('calendar')"
                            clearable
                            label="When does it start and end?"
                            prepend-icon="event"
                            readonly
                            v-on="on"
                            @click:clear="date = null"
                          />
                        </template>
                        <v-date-picker
                          v-model="date"
                          range
                          @change="menu1 = false"
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


           <!-- INTERNSHIP INTEREST LEVEL -->
            <!-- <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >What's your interest level in an internship?</v-row>
            <v-row no-gutters justify="center">
              <v-col cols="12" sm="7">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-radio-group v-model="internshipInterest" column :error-messages="errors">
                    <v-radio label="Highly Interested" value="2" />
                    <v-radio label="Interested" value="1" />
                    <v-radio label="Not Interested" value="0" />
                  </v-radio-group>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- UNPAID AND/OR PAID? -->
            <!-- <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >What compensation types are you open to?</v-row>
            <v-row no-gutters justify="center">
              <v-col cols="12" sm="7">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-checkbox
                    v-model="compensationType"
                    :error-messages="errors"
                    hide-details
                    label="Unpaid Experience"
                    value="Unpaid Experience"
                  />
                  <v-checkbox
                    v-model="compensationType"
                    :error-messages="errors"
                    hide-details
                    label="Paid"
                    value="Paid"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- FREE OR REDUCED LUNCH -->
            <!-- <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >Do you get free or reduced lunch at school?</v-row>
            <v-row no-gutters justify="center">
              <v-col cols="12" sm="7">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-radio-group v-model="freeLunch" column :error-messages="errors">
                    <v-radio label="Yes" value="Yes" />
                    <v-radio label="No" value="No" />
                    <v-radio label="I'm not sure" value="I'm not sure" />
                    <v-radio label="Decline to answer" value="Decline to answer" />
                  </v-radio-group>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- RESUME STATUS -->
            <!-- <v-row class="studentid__questiontitle mt-10" justify="center">Do you have a resume?</v-row>
            <v-row no-gutters justify="center">
              <v-col cols="12" sm="7">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-checkbox
                    v-model="resume"
                    hide-details
                    :error-messages="errors"
                    label="Yes"
                    value="Yes"
                  />
                  <v-checkbox
                    v-model="resume"
                    hide-details
                    :error-messages="errors"
                    label="No"
                    value="No"
                  />
                  <v-checkbox
                    v-model="resume"
                    :error-messages="errors"
                    hide-details
                    label="LinkedIn.com Resume"
                    value="LinkedIn.com Resume"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PLANS AFTER HIGH SCHOOL? -->
            <!-- <v-row
              class="studentid__questiontitle mt-12 mb-10"
              justify="center"
            >What is your plan immediately after high school?</v-row> -->

            <!-- POST SECONDARY PLANS -->

            <!-- <v-row no-gutters justify="center mt-10">
              <v-col cols="12" sm="10">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-select
                    v-model="postHighPlan"
                    :error-messages="errors"
                    :items="postsecondary"
                    chips
                    label="What is your plan immediately after high school?"
                    multiple
                    outlined
                  />
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- RATE PATHWAY INTEREST -->
            <!-- <v-row
              class="studentid__questiontitle mt-10 mb-10"
              justify="center"
            >Rate your interest in the following pathways</v-row> -->

            <!-- PATHWAY 1 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col
                cols="8"
                class="studentid__questionsubtitle mt-1"
              >Agriculture & Natural Resources</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="agricultureNaturalResources"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 2 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Arts, Media and Entertainment</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="artsMediaAndEntertainment"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 3 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col
                cols="8"
                class="studentid__questionsubtitle mt-1"
              >Building and Construction Trades</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="buildingAndConstructionTrades"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 4 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Business and Finance</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="businessAndFinance"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 5 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col
                cols="8"
                class="studentid__questionsubtitle mt-1"
              >Education, Childhood Development & Family Services</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="educationChildhoodDevelopmentFamilyServices"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 6 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col
                cols="8"
                class="studentid__questionsubtitle mt-1"
              >Energy, Environment & Utilities</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="energyEnvironmentUtilities"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 7 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Engineering & Architecture</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="engineeringArchitecture"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 8 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Fashion & Interior Design</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="fashionInteriorDesign"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 9 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col
                cols="8"
                class="studentid__questionsubtitle mt-1"
              >Health Science & Medical Technology</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="healthScienceMedicalTechnology"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 10 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col
                cols="8"
                class="studentid__questionsubtitle mt-1"
              >Hospitality, Tourism & Recreation</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="hospitalityTourismRecreation"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 11 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col
                cols="8"
                class="studentid__questionsubtitle mt-1"
              >Information & Communication Technologies</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="informationCommunicationTechnologies"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 12 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col
                cols="8"
                class="studentid__questionsubtitle mt-1"
              >Manufacturing & Product Development</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="manufacturingProductDevelopment"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 13 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Marketing, Sales & Service</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="marketingSalesService"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 14 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Public Services</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="publicServices"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- PATHWAY 15 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Transportation</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="transportation"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- RATE POSITION INTEREST -->
            <!-- <v-row
              class="studentid__questiontitle mt-12 mb-10"
              justify="center"
            >Rate your interest in the following positions</v-row> -->

            <!-- POSITION 1 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Technician & Engineer</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="technicianEngineer"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- POSITION 2 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Marketing & Sales</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="marketingSales"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- POSITION 3 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Research & Development</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="researchDevelopment"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- POSITION 4 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Operations & Management</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="operationsManagement"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- POSITION 5 -->
            <!-- <v-row no-gutters justify="center" class="mt-5 mb-5">
              <v-col cols="8" class="studentid__questionsubtitle mt-1">Community & Customer Success</v-col>
              <v-col cols="3">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-rating
                    v-model="communityCustomerSuccess"
                    :length="length"
                    :empty-icon="emptyIcon"
                    :full-icon="fullIcon"
                    :half-icon="halfIcon"
                    :hover="hover"
                    :size="size"
                    :dense="dense"
                    :color="color"
                    :background-color="bgColor"
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- TRANSPORTATION -->
            <!-- <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >What is your primary mode of transport?</v-row>
            <v-row no-gutters justify="center">
              <v-col cols="12" sm="7">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-radio-group v-model="transport" column :error-messages="errors">
                    <v-radio label="I drive" value="Car" />
                    <v-radio label="My family" value="Family" />
                    <v-radio label="Public transit" value="Public" />
                    <v-radio label="Ridesharing" value="Rideshare" />
                    <v-radio label="Decline to answer" value="Decline" />
                  </v-radio-group>
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- DIGITAL EQUITY -->
            <!-- <v-row
              class="studentid__questiontitle mt-10 mb-10"
              justify="center"
            >What is your access to technology?</v-row> -->

            <!-- WHAT TECHNOLOGY DO YOU CURRENTLY OWN? -->

            <!-- <v-row no-gutters justify="center mt-10">
              <v-col cols="12" sm="10">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-select
                    v-model="ownedTech"
                    :items="techownership"
                    chips
                    label="What technology do you currently own?"
                    multiple
                    outlined
                    :error-messages="errors"
                  />
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- HOW DO YOU TYPICALLY GET ON THE INTERNET? -->

            <!-- <v-row no-gutters justify="center mt-10">
              <v-col cols="12" sm="10">
                <ValidationProvider v-slot="{errors}" rules="required">
                  <v-select
                    v-model="internetAccessMethod"
                    :items="internetaccess"
                    chips
                    label="How do you typically get on the internet?"
                    multiple
                    outlined
                    :error-messages="errors"
                  />
                </ValidationProvider>
              </v-col>
            </v-row> -->

            <!-- END -->



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
@Component<StudentID>({
  components: {
    ValidationObserver,
    ValidationProvider,
    NextNode
  },
  async beforeRouteEnter(to, from, next) {
    let form = await FbStore.firestore
      .collection("StudentForm")
      .doc(FbStore.FBUser!.uid)
      .get();
    next(vm => {
      let programForm = form.data<StudentForm>().programForm;
      if (programForm) {
        Object.keys(programForm).forEach(key => {
          (vm as Record<string, any>)[key] = programForm![
            key as keyof StudentForm.programForm
          ];
        });
        vm.programForm = form.data<StudentForm>().programForm!;
      }
    });
  },
  data: () => ({
    // HEART RATING
    graduatingsenior: null,
    codingschool: null,
    summervacation: null,
    summercollegeclass: null,
    summerjob: null,
    summerschool: null,
    mobilenumber:null,
    autoapp: 'true',
    communitycollege:null,
    outcome1: null,
    outcome2: null,
    outcome3: null,

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

    postsecondary: [
      "Career Technical School",
      "Community College",
      "Transfer to University",
      "University",
      "Part-Time Work",
      "Full-Time Work"
    ],
    postsecondaryvalue: null,

    techownership: ["Smartphone", "Tablet", "Laptop", "Desktop"],
    techownershipvalue: null,

    internetaccess: ["Home Internet", "Mobile Hotspot", "Public WiFi"],
    internetaccessvalue: null

    // HEART RATING END
    // END
  })
})
export default class StudentID extends Vue {
  created(){
  }
  date = null
  programForm!: StudentForm.programForm;
  menu1 = false
  // async submit() {
  //   await FbStore.firestore
  //     .collection("StudentForm")
  //     .doc(FbStore.FBUser!.uid)
  //     .update<StudentForm>({
  //       programForm
  //     });
  //   await FbStore.updateCurrentStudentClassroom({
  //     finishedSignupForm: firebase.firestore.FieldValue.serverTimestamp()
  //   });
  // }
}
</script>
