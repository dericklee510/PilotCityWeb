<template>
  <ValidationObserver v-slot="{validate}">
    <v-row justify="center" class="mt-12">
      <img id="citizenid__exitsurveyicon" src="@/assets/exitsurvey.png" />

      <v-col id="citizenid__containtop" cols="8">
        <v-row justify="center" class="mr-auto ml-auto citizenid__title">FINISH YOUR PROGRAM</v-row>
      </v-col>

      <v-col id="citizenid__containbottom" cols="8">
        <v-row justify="center" class="pt-10">
          <v-col cols="9">
            <!-- PROGRAM INFORMATION -->
            <v-row
              justify="center"
              class="mr-auto ml-auto mt-5 mb-12 studentid__categorytitle"
            >Share your experience and auto-apply for internship</v-row>


<!-- PROGRAM OUTCOME 1 -->

            <v-row
              class="studentid__questiontitle mt-12"
              justify="center"
            >Would you prefer this type of learning or regular school?</v-row>

            <v-row no-gutters justify="center" class="mt-5 mb-5">
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
                    large
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
            </v-row>

<!-- PROGRAM OUTCOME 2 -->

            <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >Would you like to do this program again next year?</v-row>

            <v-row no-gutters justify="center" class="mt-5 mb-5">
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
                    large
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
            </v-row>

<!-- PROGRAM OUTCOME 3 -->

            <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >Would you recommend this to your other teachers?</v-row>

            <v-row no-gutters justify="center" class="mt-5 mb-5">
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
                    large
                  />
                  <span class="error--text caption">{{ errors[0] }}</span>
                </ValidationProvider>
            </v-row>




<!-- AUTO-APP OPT-IN VIA MOBILE VERIFICATION -->

            <v-row
              justify="center"
              class="mr-auto ml-auto mt-12 mb-12 studentid__categorytitle"
            >Let us help you with your goals after high school</v-row>

            <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >How can we help you with your plans after high school?</v-row>

            <v-row no-gutters justify="center">
        <v-col cols="12" sm="9">
  <v-sheet class="pa-5">
    <v-switch v-model="graduatingsenior" inset :label="`Are you a graduating senior?`"></v-switch>

    <v-switch v-model="switch2" inset :label="`Interested in computer science or being a coder?`"></v-switch>



  </v-sheet>
        </v-col>
            </v-row>


<!-- AUTO-APP OPT-IN VIA MOBILE VERIFICATION -->

            <v-row
              justify="center"
              class="mr-auto ml-auto mt-5 mb-12 studentid__categorytitle"
            >Auto-apply for an internship</v-row>

<template class="mt-12 mb-12">


            <v-row
              class="studentid__questiontitle"
              justify="center"
            >Verify your mobile phone number</v-row>

            <v-row no-gutters justify="center mt-10">
        <v-col cols="12" sm="7">
          <v-text-field
            label="Mobile Number"
            hint="(555) 555-5555"
            persistent-hint
            outlined
          ></v-text-field>
        </v-col>
            </v-row>

            <v-row
              class="studentid__nomobile mt-1"
              justify="center"
                href="https://www.pilotcity.com/library/tips-to-prep-60-second-pitch"
                target="_blank"

            >            <a>
              I don't have a mobile number
            </a></v-row>

</template>



<!-- SUMMER PLANS -->

            <v-row
              class="studentid__questiontitle mt-10"
              justify="center"
            >What are you doing this Summer?</v-row>

            <v-row no-gutters justify="center">
        <v-col cols="12" sm="9">
  <v-sheet class="pa-5">
    <v-switch v-model="switch2" inset :label="`Is it looking like you will have Summer School?`"></v-switch>
    <v-switch v-model="switch1" inset :label="`Do you plan on going on Summer Vacation?`"></v-switch>
    <v-switch v-model="switch2" inset :label="`Do you plan on getting a Summer Job?`"></v-switch>
    <v-switch v-model="switch2" inset :label="`Do you plan on taking Summer College Classes?`"></v-switch>

  </v-sheet>
        </v-col>
            </v-row>

























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
          </v-col>
        </v-row>
        <v-row class="mt-10 mb-10" no-gutters justify="center">
          <v-col cols="4">
            <NextNode v-slot="{setNext}" @CallbackComplete="$emit('nextNode')">
              <v-btn
                id="editcasestudies__button"
                class="mb-10 mt-8"
                text
                solo
                depressed
                outlined
                height="73.5px"
                @click="validate().then(val=>{if(val)setNext(submit)})"
              >NEXT</v-btn>
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
    phonemask: '###-###-####',
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
 
  programForm!: StudentForm.programForm;

  internshipInterest = this.programForm?.internshipInterest || "";
  compensationType = this.programForm?.compensationType || [];
  freeLunch = this.programForm?.freeLunch || "";
  resume = this.programForm?.resume || [];
  postHighPlan = this.programForm?.postHighPlan || "";
  agricultureNaturalResources =
    this.programForm?.agricultureNaturalResources ||
    ((null as unknown) as number);
  artsMediaAndEntertainment =
    this.programForm?.artsMediaAndEntertainment ||
    ((null as unknown) as number);
  buildingAndConstructionTrades =
    this.programForm?.buildingAndConstructionTrades ||
    ((null as unknown) as number);
  businessAndFinance =
    this.programForm?.businessAndFinance || ((null as unknown) as number);
  educationChildhoodDevelopmentFamilyServices =
    this.programForm?.educationChildhoodDevelopmentFamilyServices ||
    ((null as unknown) as number);
  energyEnvironmentUtilities =
    this.programForm?.energyEnvironmentUtilities ||
    ((null as unknown) as number);
  engineeringArchitecture =
    this.programForm?.engineeringArchitecture || ((null as unknown) as number);
  fashionInteriorDesign =
    this.programForm?.fashionInteriorDesign || ((null as unknown) as number);
  healthScienceMedicalTechnology =
    this.programForm?.healthScienceMedicalTechnology ||
    ((null as unknown) as number);
  hospitalityTourismRecreation =
    this.programForm?.hospitalityTourismRecreation ||
    ((null as unknown) as number);
  informationCommunicationTechnologies =
    this.programForm?.informationCommunicationTechnologies ||
    ((null as unknown) as number);
  manufacturingProductDevelopment =
    this.programForm?.manufacturingProductDevelopment ||
    ((null as unknown) as number);
  marketingSalesService =
    this.programForm?.marketingSalesService || ((null as unknown) as number);
  publicServices =
    this.programForm?.publicServices || ((null as unknown) as number);
  transportation =
    this.programForm?.transportation || ((null as unknown) as number);
  technicianEngineer =
    this.programForm?.technicianEngineer || ((null as unknown) as number);
  marketingSales =
    this.programForm?.marketingSales || ((null as unknown) as number);
  researchDevelopment =
    this.programForm?.researchDevelopment || ((null as unknown) as number);
  operationsManagement =
    this.programForm?.operationsManagement || ((null as unknown) as number);
  communityCustomerSuccess =
    this.programForm?.communityCustomerSuccess || ((null as unknown) as number);
  transport = this.programForm?.transport || "";
  ownedTech = this.programForm?.ownedTech || "";
  internetAccessMethod = this.programForm?.internetAccessMethod || "";
  async submit() {
    let {
      internshipInterest,
      compensationType,
      freeLunch,
      resume,
      postHighPlan,
      agricultureNaturalResources,
      artsMediaAndEntertainment,
      buildingAndConstructionTrades,
      businessAndFinance,
      educationChildhoodDevelopmentFamilyServices,
      energyEnvironmentUtilities,
      engineeringArchitecture,
      fashionInteriorDesign,
      healthScienceMedicalTechnology,
      hospitalityTourismRecreation,
      informationCommunicationTechnologies,
      manufacturingProductDevelopment,
      marketingSalesService,
      publicServices,
      transportation,
      technicianEngineer,
      marketingSales,
      researchDevelopment,
      operationsManagement,
      communityCustomerSuccess,
      transport,
      ownedTech,
      internetAccessMethod
    } = this;
    let programForm: StudentForm.programForm = {
      internshipInterest,
      compensationType,
      freeLunch,
      resume,
      postHighPlan,
      agricultureNaturalResources,
      artsMediaAndEntertainment,
      buildingAndConstructionTrades,
      businessAndFinance,
      educationChildhoodDevelopmentFamilyServices,
      energyEnvironmentUtilities,
      engineeringArchitecture,
      fashionInteriorDesign,
      healthScienceMedicalTechnology,
      hospitalityTourismRecreation,
      informationCommunicationTechnologies,
      manufacturingProductDevelopment,
      marketingSalesService,
      publicServices,
      transportation,
      technicianEngineer,
      marketingSales,
      researchDevelopment,
      operationsManagement,
      communityCustomerSuccess,
      transport,
      ownedTech,
      internetAccessMethod
    };
    await FbStore.firestore
      .collection("StudentForm")
      .doc(FbStore.FBUser!.uid)
      .update<StudentForm>({
        programForm
      });
    await FbStore.updateCurrentStudentClassroom({
      finishedSignupForm: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

}
</script>
