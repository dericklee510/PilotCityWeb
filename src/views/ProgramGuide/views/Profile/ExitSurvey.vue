<template>
  <ValidationObserver v-slot="{ validate }">
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
                v-slot="{ errors }"
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
                v-slot="{ errors }"
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
                v-slot="{ errors }"
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
              justify="center"
            >
              <v-col
                cols="12"
                sm="7"
              >
                <ValidationProvider
                  v-slot="{ errors }"
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
              justify="center"
            >
              <v-col
                cols="12"
                sm="7"
              >
                <ValidationProvider
                  v-slot="{ errors }"
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
            
              <PCLoader v-slot="{loading, setLoader, onSuccess}">
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-col
                    class="mr-2"
                    cols="9"
                    sm="5"
                  >
                    <ValidationProvider
                      ref="numProvider" 
                      v-slot="numberProvider"
                      rules="required|verifyPhone"
                    >
                      <v-text-field
                        v-model="mobilenumber"
                        v-mask="`(###) ###-####`"
                        label="Verify your mobile number"
                        hint="(555) 555-5555"
                        persistent-hint
                        outlined
                        :success="onSuccess"
                        :error-messages="numberProvider.errors"
                        @keyup.enter="setLoader( () => sendCode(mobilenumber))"
                      />
                    </ValidationProvider>
                  </v-col>

                  <v-col
                    cols="3"
                    sm="2"
                  >
                    <v-btn
                      x-large
                      dark
                      depressed
                      :loading="loading"
                      @click="setLoader( () => sendCode(mobilenumber))"
                    >
                      {{ sid ? `Resend`:`Send Code ` }}
                    </v-btn>
                  </v-col>
                </v-row>
              </PCLoader>
              <PCLoader v-slot="{loading, setLoader}">
                <v-row
                  v-show="sid"
                  no-gutters
                  justify="center"
                >
                  <v-col
                    class="mr-2"
                    cols="9"
                    sm="5"
                  >
                    <v-text-field
                      v-model="code"
                      v-mask="`######`"
                      label="Enter Verification Code"
                      outlined
                      @keyup.enter="setLoader( () => verifyPhone(mobilenumber, code).then(() => $refs.numProvider.validate()))"
                    />
                  </v-col>

                  <v-col
                    cols="3"
                    sm="2"
                  >
                    <v-tooltip
                      :v-model="false"
                      top
                    >
                      <template v-slot:activator="{ on }">
                        <v-btn
                          x-large
                          dark
                          depressed
                          :loading="loading"
                          @click="setLoader( () => verifyPhone(mobilenumber, code).then(() => $refs.numProvider.validate()))"
                          v-on="on"
                        >
                          Verify
                        </v-btn>
                      </template>
                      <span>SUCCESS</span>
                    </v-tooltip>
                  </v-col>
                </v-row>
              </PCLoader>
              <!-- <v-row
                class="studentid__nomobile mt-4"
                justify="center"
                href="https://www.pilotcity.com/library/tips-to-prep-60-second-pitch"
                target="_blank"
              >
                <a>I don't have a mobile number</a>
              </v-row> -->

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
                    v-model="summerVacation"
                    inset
                    :label="`Do you plan on going on Summer Vacation?`"
                  />

                  <v-row
                    v-if="summerVacation"
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <v-menu
                        v-model="summerVacationMenu"
                        :close-on-content-click="false"
                        max-width="290"
                      >
                        <template v-slot:activator="{ on }">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required|daterange"
                          >
                            <v-text-field
                              :value="
                                summerSchedule.every(val => val) ? summerSchedule : null | daterange
                              "
                              clearable
                              label="When do you leave and come back?"
                              prepend-icon="event"
                              readonly
                              :error-messages="errors"
                              v-on="on"
                              @click:clear="summerSchedule = []"
                            />
                          </ValidationProvider>
                        </template>
                        <v-date-picker
                          v-model="summerSchedule"
                          range
                          @change="summerVacationMenu = summerSchedule.length == 2 ? false : true"
                        />
                      </v-menu>
                    </v-col>
                  </v-row>

                  <v-switch
                    v-model="summerJob"
                    inset
                    :label="`Do you plan on getting a Summer Job?`"
                  />

                  <v-row
                    v-if="summerJob"
                    no-gutters
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required|numeric"
                      >
                        <v-text-field
                          v-model="summerJobHours"
                          :error-messages="errors"
                          label="How many hours per week?"
                          hint="Enter number of hours only"
                          persistent-hint
                          outlined
                        />
                      </ValidationProvider>
                    </v-col>
                  </v-row>

                  <v-switch
                    v-model="summerCollegeClasses"
                    inset
                    :label="`Do you plan on taking Summer College Classes?`"
                  />

                  <v-row
                    v-if="summerCollegeClasses"
                    no-gutters
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <ValidationProvider
                        v-slot="{ errors }"
                        rules="required"
                      >
                        <v-text-field
                          v-model="summerCollegeName"
                          :error-messages="errors"
                          label="College Name"
                          hint="Enter the name of the college"
                          persistent-hint
                          outlined
                        />
                      </ValidationProvider>
                    </v-col>
                  </v-row>

                  <v-row
                    v-if="summerCollegeClasses"
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <v-menu
                        v-model="summerCollegeMenu"
                        :close-on-content-click="false"
                        max-width="290"
                      >
                        <template v-slot:activator="{ on }">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required|daterange"
                          >
                            <v-text-field
                              :value="
                                summerCollegeSchedule.every(val => val)
                                  ? summerCollegeSchedule
                                  : null | daterange
                              "
                              clearable
                              label="When does it start and end?"
                              prepend-icon="event"
                              readonly
                              :error-messages="errors"
                              v-on="on"
                              @click:clear="summerCollegeSchedule = []"
                            />
                          </ValidationProvider>
                        </template>
                        <v-date-picker
                          v-model="summerCollegeSchedule"
                          range
                          @change="
                            summerCollegeMenu = summerCollegeSchedule.length == 2 ? false : true
                          "
                        />
                      </v-menu>
                    </v-col>
                  </v-row>

                  <v-switch
                    v-model="summerSchool"
                    inset
                    :label="`Will you have to take Summer School?`"
                  />

                  <v-row
                    v-if="summerSchool"
                    justify="center"
                  >
                    <v-col
                      cols="12"
                      sm="9"
                    >
                      <v-menu
                        v-model="summerSchoolMenu"
                        :close-on-content-click="false"
                        max-width="290"
                      >
                        <template v-slot:activator="{ on }">
                          <ValidationProvider
                            v-slot="{ errors }"
                            rules="required|daterange"
                          >
                            <v-text-field
                              :value="
                                summerSchoolSchedule.every(val => val)
                                  ? summerSchoolSchedule
                                  : null | daterange
                              "
                              clearable
                              label="When does it start and end?"
                              prepend-icon="event"
                              readonly
                              :error-messages="errors"
                              v-on="on"
                              @click:clear="summerSchoolSchedule = []"
                            />
                          </ValidationProvider>
                        </template>
                        <v-date-picker
                          v-model="summerSchoolSchedule"
                          range
                          @change="
                            summerSchoolMenu = summerSchoolSchedule.length == 2 ? false : true
                          "
                        />
                      </v-menu>
                    </v-col>
                  </v-row>
                </v-col>
              </v-row>
            </v-col>
          </v-col>
        </v-row>
        <v-row
          class="mt-10"
          no-gutters
          justify="center"
        >
          <v-col cols="4">
            <NextNode
              v-slot="{ setNext }"
              @CallbackComplete="postSave ='Saved. Auto-App is coming soon'"
            >
              <v-btn
                id="editcasestudies__button"
                class="mb-10 mt-8"
                text
                solo
                depressed
                outlined
                height="73.5px"
                @click="
                  validate().then(val => {
                    if (val) setNext(submit);
                  })
                "
              >
                SUBMIT
              </v-btn>
            </NextNode>
          </v-col>
        </v-row>
        <v-row
          class="mb-10 text--grey"
          style="font-family: Raleway"
          justify="center"
        >
          <h5> {{ postSave }}</h5>
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
import { SMSsendCode, isValidSMS } from "@/api";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { startCase } from "lodash";
import { StudentForm, GeneralUser } from "../../../../store/Database/types/types";
import { firebase } from "@/firebase/init";
import { NextNode } from "@/views/ProgramGuide/components";
import { keys } from "ts-transformer-keys";
import moment from "moment";
import { PCLoader } from '@/components/utilities';
@Component<ExitSurvey>({
  components: {
    ValidationObserver,
    ValidationProvider,
    NextNode,
    PCLoader
  },
  directives: {
        mask
  },
  async created() {
    let form = (
      await FbStore.firestore
        .collection("StudentForm")
        .doc(FbStore.FBUser!.uid)
        .get()
    ).data<StudentForm>()?.exitForm;
    if (form){
      Object.keys(form).forEach(key => {
        (this as Record<string, any>)[key] =
          (form as StudentForm.exitForm)[key as keyof StudentForm.exitForm];
      });
      Object.keys(form.internshipApplication).forEach(key => {
        (this as Record<string, any>)[key] =
          ((form as StudentForm.exitForm).internshipApplication)[key as keyof StudentForm.exitForm.internshipApplication];
      });
    }
    
  },
  data: () => ({
    phonemask: "###-###-####",
    emptyIcon: "mdi-heart-outline",
    fullIcon: "mdi-heart",
    halfIcon: "mdi-heart-half-full",
    hover: false,
    length: 5,
    size: 22,
    dense: true,
    color: "red lighten-3",
    colors: ["primary", "warning", "green", "red", "blue", "error", "teal", "red lighten-3"],
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
    ]

    // HEART RATING END
    // END
  }),
  filters: {
    daterange: function(range: [string] | [string, string] | null) {
      //each string is date in iso8601 format
      return range ? range.map(val => moment(val).format("MMMM Do")).join(" - ") : null;
    }
  }
})
export default class ExitSurvey extends Vue {
  postSave=""
  code: string = "";
  private sid: string = "";
  vStatus: string = "";
  date = [];
  programForm!: StudentForm.programForm;
  summerVacationMenu = false;
  summerCollegeMenu = false;
  summerSchoolMenu = false;
  graduating = null;
  postHighPlan = null;
  csOffer = null;
  csFuture = null;
  summerVacation = null;
  summerSchedule = [];
  summerCollegeClasses = null;
  summerCollegeName = null;
  summerCollegeSchedule = [];
  summerJob = null;
  summerJobHours = null;
  summerSchool = null;
  summerSchoolSchedule = [];
  mobilenumber: string = (FbStore.currentUserProfile!.phoneNumber)?.substr(2) || '';
  autoApp = true;
  communityCollegeOffer = null;
  traditional = null;
  joinAgain = null;
  recommend = null;
  async sendCode(phone: string) {
    try {
      const data = await SMSsendCode({ to: phone });
      this.sid = data.data;
      console.info(
        "%c Code has been sent!",
        "background: green; color: white; display: block; text-align: center"
      );
    } catch (err) {
      console.error(
        `${err} \nThere was an error sending code to ${phone} \n Please try again later`
      );
    }
  }
  async verifyPhone(phone: string, code: string) {
    try {
      const val = await isValidSMS({to: phone, code: code});
      this.sid = "";
      console.info('%c Code has been verified!', 'background: green; color: white; display: block; text-align: center')
    } catch(err) {
      console.error(`${err}`)
    }
  }
  async submit() {
    let {
      traditional,
      joinAgain,
      recommend,
      graduating,
      postHighPlan,
      communityCollegeOffer,
      csOffer,
      csFuture,
      autoApp,
      summerVacation,
      summerSchedule,
      summerJob,
      summerJobHours,
      summerCollegeClasses,
      summerCollegeName,
      summerCollegeSchedule,
      summerSchool,
      summerSchoolSchedule,
    } = this;
    await FbStore.firestore
      .collection("StudentForm")
      .doc(FbStore.FBUser!.uid)
      .update<StudentForm>({
        exitForm: {
          traditional,
          joinAgain,
          recommend,
          graduating,
          postHighPlan,
          communityCollegeOffer,
          csOffer,
          csFuture,
          autoApp,
          internshipApplication: {
            summerVacation,
            summerSchedule,
            summerJob,
            summerJobHours,
            summerCollegeClasses,
            summerCollegeName,
            summerCollegeSchedule,
            summerSchool,
            summerSchoolSchedule
          }
        } as unknown as StudentForm.exitForm
      });
      await FbStore.updateCurrentStudentClassroom({
      finishedExitForm: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }
</script>
