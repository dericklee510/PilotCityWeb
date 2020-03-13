<template>
  <v-card class="pc-container pc-profile-page--dark">
    <!-- probably going to use Doka here.... -->
    <img
      id="profileBanner"
      src="@/assets/PC_user_banner.png"
      alt=""
    >
    <v-container>
      <!-- make tag component -- backlog -->
      <v-row>
        <!-- insert Doka-profile-picture-component -->
        <v-col id="profileContainer">
          <profile-upload
            v-model="profilePicture"
            class="pc-profile-picture pc-profile-picture--page pc-vh-center"
          />
        </v-col>
        <v-col
          cols="12"
          md="7"
          class="pl-6"
          style="padding-bottom: 0"
        >
          <v-row>
            <v-col cols="12">
              <h1>{{ Name }}</h1>
            </v-col>
            <v-row justify="start">
              <v-col
                cols="12"
                md="6"
                lg="4"
                xl="3"
              >
                <v-menu
                  max-width="300px"
                  :offset-y="true"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-row
                      justify="center"
                      no-gutters
                    >
                      <v-col
                        cols="4"
                        sm="3"
                        md="12"
                      >
                        <v-btn
                          :id="CITIZENSTYLES[citizenType]"
                          v-bind="attrs"
                          rounded
                          v-on="on"
                        >
                          <h2 class="text-capitalize pr-5 pl-5">
                            {{ citizenType }}
                          </h2>
                        </v-btn>
                      </v-col>
                    </v-row>
                  </template>

                  <v-list style="padding: 0">
                    <v-list-item
                      v-for="(type, index) in AVAILABLETYPES"
                      :key="type + index"
                      style="padding: 0;"
                      @click="changeCitizenType(type)"
                    >
                      <v-col
                        cols="12"
                        class="pa-0"
                      >
                        <v-list-item-title :id="CITIZENSTYLES[type]">
                          <v-row
                            align="center"
                            justify="center"
                          >
                            <v-col cols="8">
                              <h3 class="text-center">
                                {{ type }}
                              </h3>
                            </v-col>
                          </v-row>
                        </v-list-item-title>
                      </v-col>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-col>
              <v-col
                v-if="ispublic"
                cols="12"
                md="6"
                lg="4"
                align-self="center"
              >
                <v-row
                  justify="center"
                  no-gutters
                >
                  <v-col
                    cols="4"
                    md="12"
                  >
                    <h3
                      class="text-center"
                      style="display: block"
                    >
                      Fremont, CA
                    </h3>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-row>
        </v-col>
      </v-row>
      <v-container>
        <ValidationObserver ref="observer">
          <v-list
            id="profileFields"
            class="pc-profile-page--dark"
            text
          >
            <v-list-item-title
              style="max-width: fit-content"
              v-text="'Citizen'"
            />

            <v-list-item>
              <v-list-item-content>
                <v-col
                  cols="12"
                  class="pt-0"
                >
                  <v-row
                    id="citizen-id__base-questions"
                    justify="start"
                  >
                    <v-col
                      cols="12"
                      md="8"
                      lg="6"
                      xl="5"
                    >
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcSelect
                          v-model="teacherProfile.citizen.title"
                          :value.sync="citizenBase.honorific"
                          :dark-mode="true"
                          title="TITLE"
                          :items="['Mr.', 'Mrs.', 'Ms.', 'no preference']"
                          placeholder="How may we address you?"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcTextfield
                          v-model="teacherProfile.citizen.first_name"
                          :value.sync="citizenBase.firstName"
                          :dark-mode="true"
                          title="FIRST NAME"
                          placeholder="First Name"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcTextfield
                          v-model="teacherProfile.citizen.last_name"
                          :value.sync="citizenBase.lastName"
                          :dark-mode="true"
                          title="LAST NAME"
                          placeholder="Last Name"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcTextfield
                          v-model="citizenBase.phone"
                          v-mask="'{###} ###-####'"
                          :error-messages="errors"
                          :dark-mode="true"
                          title="PHONE NUMBER"
                          placeholder="(###) ###-####"
                        />
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-col>
              </v-list-item-content>
            </v-list-item>
            <v-list-item-title
              style="max-width: fit-content"
              v-text="'School'"
            />
            <v-list-item>
              <v-list-item-content>
                <v-col cols="12">
                  <v-row justify="start">
                    <v-col
                      cols="12"
                      md="8"
                      lg="6"
                      xl="5"
                    >
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcSelect
                          v-model="teacherProfile.school.district"
                          :dark-mode="true"
                          title="SCHOOL DISTRICT"
                          placeholder="Select school district"
                          :items="DISTRICT_NAMES"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcSelect
                          v-model="teacherProfile.school.name"
                          :dark-mode="true"
                          title="SCHOOL NAME"
                          placeholder="Select school name"
                          :items="SCHOOL_NAMES"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <autoComplete
                          v-model="teacherProfile.school.location"
                          :error-messages="{errors}"
                        />
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12">
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-row>
                          <h4
                            class="text-uppercase"
                            style="color:#ECA0BE"
                          >
                            BELL SCHEDULE
                          </h4>
                          <h4 style="color:#EA6763">
                            {{ errors[0]?'*':'' }}
                          </h4>
                        </v-row>
                        <BellScheduleInput
                          v-model="teacherProfile.school.bellSchedules"
                          :error="true"
                        />
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-col>
              </v-list-item-content>
            </v-list-item>

            <v-list-item-title
              style="max-width: fit-content"
              v-text="'Classroom'"
            />
            <v-list-item>
              <v-list-item-content>
                <v-col cols="12">
                  <v-row justify="start">
                    <v-col
                      cols="12"
                      md="8"
                      lg="6"
                      xl="5"
                    >
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcTextfield
                          v-model="teacherProfile.classroom.location"
                          v-mask="'Room XXX'"
                          :dark-mode="true"
                          title="ROOM NUMBER"
                          placeholder="Enter your room number"
                          :error-messages="errors"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-row no-gutters>
                          <v-col
                            cols="12"
                            lg="9"
                          >
                            <pcTextfield
                              v-model="teacherProfile.classroom.phone_number"
                              :dark-mode="true"
                              title="ROOM PHONE NUMBER"
                              placeholder="Enter your rooms phone number"
                              :error-messages="errors"
                            />
                          </v-col>
                          <v-spacer />
                          <v-col
                            cols="12"
                            lg="2"
                          >
                            <pcTextfield
                              v-model="teacherProfile.classroom.extension"
                              :dark-mode="true"
                              title="Extension"
                              placeholder="EXT."
                              :error-messages="errors"
                            />
                          </v-col>
                        </v-row>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-row>
                            <h4
                              class="text-uppercase"
                              style="color:#C7C8CA"
                            >
                              WHEN IS YOUR PREFERRED TIME FOR COMMUNICATION ABOUT OUR PROGRAMS?
                            </h4>
                            <h4 style="color:#EA6763">
                              {{ errors[0]?'*':'' }}
                            </h4>
                          </v-row>
                        </v-col>
                        <v-col
                          cols="12"
                        >
                          <pcCheckbox
                            v-model="teacherProfile.classroom.preferredCommunication"
                            :options="CLASSROOM_COMMUNICATION"
                            :other="true"
                          />
                        </v-col>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-row>
                            <h4
                              class="text-uppercase"
                              style="color:#C7C8CA"
                            >
                              TOOLS, TECHNOLOGIES AND EQUIPMENT YOU HAVE IN YOUR CLASSROOM
                            </h4>
                            <h4 style="color:#EA6763">
                              {{ errors[0]?'*':'' }}
                            </h4>
                          </v-row>
                        </v-col>
                        <v-col
                          cols="12"
                          md="8"
                        >
                          <pcMultiInput
                            v-model="teacherProfile.classroom.available_equipment"
                            placeholder="Enter any already available in class"
                            :error-messages="errors"
                          />
                        </v-col>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-col>
              </v-list-item-content>
            </v-list-item>
            <v-list-item-title
              style="max-width: fit-content"
              v-text="'Courses'"
            />
            <v-list-item>
              <v-list-item-content>
                <v-col cols="12">
                  <v-row>
                    <v-col
                      cols="6"
                      md="5"
                      lg="3"
                      xl="2"
                    >
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcSelect
                          v-model="teacherProfile.courses.schoolYear"
                          :dark-mode="true"
                          :error-messages="errors"
                          placeholder="Select School Year"
                          :items="COURSES_AVAILABLE_SCHOOLYEARS"
                          title="SCHOOL YEAR"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcSelect
                          v-model="teacherProfile.courses.prepPeriod"
                          :dark-mode="true"
                          :error-messages="errors"
                          title="WHEN IS YOUR PREP PERIOD?"
                          :items="COURSES_PREP_PERIODS"
                          placeholder="Prep Period"
                        />
                      </ValidationProvider>
                    </v-col>
                    <v-col cols="12">
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <CourseInput v-model="teacherProfile.courses.classSchedules" />
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-col>
              </v-list-item-content>
            </v-list-item>
            <!-- make this dynamic based on selected school year? -->
            <v-list-item-title
              style="max-width: fit-content"
              v-text="'Program Details'"
            />
            <v-list-item>
              <v-list-item-content>
                <v-col cols="12">
                  <v-row>
                    <v-col cols="12">
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-row>
                          <h4
                            class="text-uppercase"
                            style="color:#ECA0BE"
                          >
                            Enrolled Courses
                          </h4>
                          <h4 style="color:#EA6763">
                            {{ errors[0]?'*':'' }}
                          </h4>
                        </v-row>
                        <v-row>
                          <coursePrograms
                            v-model="teacherProfile.courses.coursePrograms"
                            :courseinput="teacherProfile.courses.classSchedules"
                          />
                        </v-row>
                      </ValidationProvider>
                    </v-col>
                    <v-col>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-row>
                            <h4
                              class="text-uppercase"
                              style="color:#C7C8CA"
                            >
                              WOULD YOU BE OKAY WITH DIGITAL CLASSROOM ENGAGEMENT AS AN ALTERNATIVE TO IN-PERSON?
                            </h4>
                            <h4 style="color:#EA6763">
                              {{ errors[0]?'*':'' }}
                            </h4>
                          </v-row>
                        </v-col>
                        <v-col cols="12">
                          <v-radio-group
                            v-model="teacherProfile.programDetails.engagement_alternative"
                            class="pc-radio"
                          >
                            <v-radio
                              v-for="(rad, index) in PROGRAM_ENGAGEMENT"
                              :key="rad+index"
                              :value="rad"
                              :label="rad"
                            />
                          </v-radio-group>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            WOULD YOU BE IN THE POSITION TO PURCHASE THE EMPLOYER’S PRODUCT OR SERVICE IF DONATION OR LOAN IS NOT AN OPTION?
                          </h4>
                          <h4 style="color:#EA6763">
                            {{ errors[0]?'*':'' }}
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-radio-group
                            v-model="teacherProfile.programDetails.purchase_emp_product"
                            class="pc-radio"
                          >
                            <v-radio
                              v-for="(rad, index) in PROGRAM_PURCHASE"
                              :key="rad+index"
                              :value="rad"
                              :label="rad"
                            />
                          </v-radio-group>
                        </v-col>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-col>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </ValidationObserver>
        <v-btn
          id="signup-button"
          block
          :loading="loading"
          :disabled="loading"
          class="mb-6"
          @click="savePage"
        >
          <h3 class="text-uppercase">
            Complete Profile
          </h3>
        </v-btn>
      </v-container>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { mask } from 'vue-the-mask'
import { min_value } from 'vee-validate/dist/rules'
import { from } from 'rxjs'
import axios, { AxiosResponse } from 'axios'
import { map, pluck } from 'rxjs/operators'
import { sortBy } from 'lodash'
import {
  PCselect,
  PCtextfield,
  PCcheckbox,
  PCmultiinput
} from '@/components/inputs'
import autoComplete from '@/components/GoogleMaps/Autocomplete/AutoComplete.vue'
// import * as Employer from "./types"
import { ObserverInstance } from '@/utilities/validation'
// import { tableToDecimal, findOther } from "./helpers"
import { CONST } from './const'
import { GraphqlStore } from '@/store'
import { BellScheduleInput, CourseInput } from './components'
import { TeacherProfile } from './types'
import { ITeacherQuery } from '../../../../store/Graphql/types'
import { tableToDecimal, findOther } from '../../../../store/Graphql'
import { AutoCompleteAddress } from '../../../../components/GoogleMaps'
import { coursePrograms } from './components/CoursePrograms'
import { ProfileUpload } from '@/components/Doka'

import { ICitizenBase } from '../../types'
import {
  PublicProfileFetchQuery,
  Public_Citizen_Profile
} from '../../../../store/Graphql/global_types'

extend('min_value', {
  ...min_value,
  message: 'This field cannot be less than {min}'
})
@Component({
    components: {
        pcSelect: PCselect,
        pcTextfield: PCtextfield,
        BellScheduleInput,
        CourseInput,
        autoComplete,
        ValidationProvider,
        ValidationObserver,
        profileUpload: ProfileUpload,
        coursePrograms: coursePrograms,
        pcMultiInput: PCmultiinput,
        pcCheckbox: PCcheckbox
    },
    directives: {
        mask
    },
    apollo: {

    },
    subscriptions() {
        return ({
            DISTRICT_NAMES: from(axios.get<string []>('https://pilotcity-firestore.appspot.com/getdistrict')).pipe(pluck<AxiosResponse, string[]>('data'),
                map(arr => sortBy(arr).map(district_name => `${district_name} District`))),
            SCHOOL_NAMES: from(axios.get<string []>('https://pilotcity-firestore.appspot.com/getschool_name')).pipe(pluck<AxiosResponse, string[]>('data'),
                map(arr => sortBy(arr).map(school_name => `${school_name} School`))),
            PUBLIC_PROFILE: from(GraphqlStore.getPublicProfile()).pipe(pluck<PublicProfileFetchQuery, Public_Citizen_Profile>('PublicCitizenProfile'))
        })
    }
})

export default class TeacherProfilePage extends CONST {
    DISTRICT_NAMES: string [] = []

    SCHOOL_NAMES: string [] = []

    get citizenType() {
      if (!localStorage.citizenType) {
        return this.$route.params.citizenType
      }
      return localStorage.citizenType
    }

    private CITIZENSTYLES = {
        Teacher: 'citizen-id__type--teacher',
        Employer: 'citizen-id__type--employer',
        Student: 'citizen-id__type--student'
    }

    private AVAILABLETYPES: string[] = ['Teacher', 'Employer', 'Student']

    private ispublic: boolean = true;

    private loading: boolean = false;

    public citizenBase: ICitizenBase = {
        honorific: '',
        firstName: '',
        lastName: '',
        profilePicture: '',
        citizenType: ''

    }

    public teacherProfile: TeacherProfile = {
        citizen: {
            title: '',
            first_name: '',
            last_name: ''
        },
        school: {
            district: '',
            name: '',
            location: {} as AutoCompleteAddress,
            bellSchedules: []
        },
        classroom: {
            location: '',
            phone_number: '',
            extension: '',
            preferredCommunication: [],
            available_equipment: []
        },
        courses: {
            schoolYear: '',
            prepPeriod: '',
            classSchedules: []
        },
        programDetails: {
            coursePrograms: [],
            engagement_alternative: false,
            purchase_emp_product: ''
        }
    }

    teacherQuery(teacherPage: TeacherProfile): ITeacherQuery {
        return {
            id_token: '',
            school_district: this.teacherProfile.school.district,
            school_name: this.teacherProfile.school.name,
            school_location: JSON.stringify(this.teacherProfile.school.location),
            bell_schedule: JSON.stringify(this.teacherProfile.school.bellSchedules),
            classroom_room_location: this.teacherProfile.classroom.location,
            classroom_room_phone: this.teacherProfile.classroom.phone_number,
            extension: this.teacherProfile.classroom.extension,
            preferred: tableToDecimal(this.CLASSROOM_COMMUNICATION, this.teacherProfile.classroom.preferredCommunication),
            preferred_other: findOther(this.CLASSROOM_COMMUNICATION, this.teacherProfile.classroom.preferredCommunication),
            tool_equipment: this.teacherProfile.classroom.available_equipment,
            courses_school_year: this.teacherProfile.courses.schoolYear,
            prep_period: Number.parseInt(this.teacherProfile.courses.prepPeriod.charAt(1)),
            course_information: JSON.stringify(this.teacherProfile.courses.classSchedules),
            enrolled_courses: JSON.stringify(this.teacherProfile.programDetails.coursePrograms),
            enagement_alternative: this.teacherProfile.programDetails.engagement_alternative,
            purchase_emp_product: tableToDecimal(this.PROGRAM_PURCHASE, [
                this.teacherProfile.programDetails.purchase_emp_product
            ])
        }
    }

    public async savePage() {
        await (this.$refs.observer as ObserverInstance).validate()
    }

    get Name() {
        return `${this.teacherProfile.citizen.first_name} ${this.teacherProfile.citizen.last_name}`
    }

    created() {}
}
</script>
