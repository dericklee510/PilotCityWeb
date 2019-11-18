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
          <div class="pc-profile-picture pc-profile-picture--page pc-vh-center" />
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
                          :dark-mode="true"
                          title="TITLE"
                          :items="['Mr.', 'Mrs.', 'Ms.', 'no preference']" 
                          placeholder="How may we address you?"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcTextfield
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
                          :dark-mode="true"
                          title="LAST NAME"
                          placeholder="Last Name"
                          :error-messages="errors"
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
                          :dark-mode="true"
                          title="SCHOOL DISTRICT"
                          placeholder="Select school district"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <pcSelect
                          :dark-mode="true"
                          title="SCHOOL NAME"
                          placeholder="Select school name"
                        />
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <autoComplete
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
                          <v-col>
                            <h4
                              class="text-uppercase"
                              style="color:#ECA0BE"
                            >
                              BELL SCHEDULE
                            </h4>
                          </v-col>
                          <v-col>
                            <h4 style="color:#EA6763">
                              {{ errors?'*':'' }}
                            </h4>
                          </v-col>
                        </v-row>
                        <BellScheduleInput v-model="teacherProfile.classSchedules" />
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
                      <pcTextfield
                        v-mask="'Room XXX'"
                        :dark-mode="true"
                        title="ROOM NUMBER"
                        placeholder="Enter your room number"
                      />
                    
                      <v-row no-gutters>
                        <v-col
                          cols="12"
                          lg="9"
                        >
                          <pcTextfield
                            :dark-mode="true"
                            title="ROOM PHONE NUMBER"
                            placeholder="Enter your rooms phone number"
                          />
                        </v-col>
                        <v-spacer />
                        <v-col
                          cols="12"
                          lg="2"
                        >
                          <pcTextfield
                            :dark-mode="true"
                            title="Extension"
                            placeholder="EXT."
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col cols="12">
                      <h4
                        class="text-uppercase"
                        style="color:#C7C8CA"
                      >
                        WHEN IS YOUR PREFERRED TIME FOR COMMUNICATION ABOUT OUR PROGRAMS?
                      </h4>
                      <h4 style="color:#EA6763">
                        {{ errors?'*':'' }}
                      </h4>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <pcCheckbox
                        :options="CLASSROOM_COMMUNICATION"
                        :other="true"
                      />
                    </v-col>
                    <v-col cols="12">
                      <h4
                        class="text-uppercase"
                        style="color:#C7C8CA"
                      >
                        TOOLS, TECHNOLOGIES AND EQUIPMENT YOU HAVE IN YOUR CLASSROOM
                      </h4>
                      <h4 style="color:#EA6763">
                        {{ errors?'*':'' }}
                      </h4>
                    </v-col>
                    <v-col
                      cols="12"
                      md="8"
                      lg="7"
                      xl="5"
                    >
                      <pcMultiInput placeholder="Enter any already available in class" />
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
                      <pcSelect
                        :dark-mode="true"
                        placeholder="Select School Year"
                        :items="COURSES_AVAILABLE_SCHOOLYEARS"
                        title="SCHOOL YEAR"
                      />
                      <pcSelect
                        :dark-mode="true"
                        title="WHEN IS YOUR PREP PERIOD?"
                        :items="COURSES_PREP_PERIODS"
                        placeholder="Prep Period"
                      />
                    </v-col>
                    <v-col cols="12">
                      <CourseInput v-model="teacherProfile.enrolledClasses" />
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
                      <v-row>
                        <v-col>
                          <h4
                            class="text-uppercase"
                            style="color:#ECA0BE"
                          >
                            Enrolled Courses
                          </h4>
                        </v-col>
                        <v-col>
                          <h4 style="color:#EA6763">
                            {{ errors?'*':'' }}
                          </h4>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col
                          cols="12"
                          md="1"
                        >
                          <pcTextfield
                            :dark-mode="true"
                            title="PERIOD"
                            :disabled="true"
                            class="pc-input--disabled"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          md="4"
                        >
                          <pcTextfield
                            :dark-mode="true"
                            title="COURSES I TEACH"
                            :disabled="true"
                            class="pc-input--disabled"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          md="3"
                        >
                          <pcSelect
                            :dark-mode="true"
                            title="SEMESTER"
                            placeholder="Select semester(s)"
                            :items="PROGRAM_SEMS"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          md="3"
                        >
                          <pcSelect
                            :dark-mode="true"
                            title="GRADES"
                            :multiselect="true"
                            placeholder="Select class grade level"
                            :items="PROGRAM_GRADES"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                    <v-col>
                      <v-col cols="12">
                        <h4
                          class="text-uppercase"
                          style="color:#C7C8CA"
                        >
                          WOULD YOU BE OKAY WITH DIGITAL CLASSROOM ENGAGEMENT AS AN ALTERNATIVE TO IN-PERSON?
                        </h4>
                        <h4 style="color:#EA6763">
                          {{ errors?'*':'' }}
                        </h4>
                      </v-col>
                      <v-col cols="12">
                        <v-radio-group
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
                      <v-col cols="12">
                        <h4
                          class="text-uppercase"
                          style="color:#C7C8CA"
                        >
                          WOULD YOU BE IN THE POSITION TO PURCHASE THE EMPLOYER’S PRODUCT OR SERVICE IF DONATION OR LOAN IS NOT AN OPTION?
                        </h4>
                        <h4 style="color:#EA6763">
                          {{ errors?'*':'' }}
                        </h4>
                      </v-col>
                      <v-col cols="12">
                        <v-radio-group
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
                    </v-col>
                  </v-row>  
                </v-col>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </ValidationObserver>
      </v-container>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue'
import {
    PCselect,
    PCtextfield,
    PCcheckbox,
    PCmultiinput
} from "@/components/inputs"
import autoComplete from "@/components/GoogleMaps/Autocomplete/AutoComplete.vue"
import Component from "vue-class-component"
// import * as Employer from "./types"
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate'
import { ObserverInstance } from "@/utilities/validation"
// import { tableToDecimal, findOther } from "./helpers"
import { CONST } from './const'
import { mask } from 'vue-the-mask'
import { min_value } from 'vee-validate/dist/rules'
import { GraphqlStore } from '@/store'
import {BellScheduleInput, CourseInput} from "./components"
import {TeacherProfile} from "./types"
import { ITeacherQuery } from '../../../../store/Graphql/types'
import { tableToDecimal, findOther } from '../../../../store/Graphql'
import { AutoCompleteAddress } from '../../../../components/GoogleMaps'
extend('min_value', {
    ...min_value,
    message: "This field cannot be less than {min}"
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
        pcMultiInput: PCmultiinput,
        pcCheckbox: PCcheckbox
    },
    directives: {
        mask
    }
})

export default class Test extends CONST {
    get citizenType(){
        return this.$route.params.citizenType
    }
    private CITIZENSTYLES = {
        Teacher: "citizen-id__type--teacher",
        Employer: "citizen-id__type--employer",
        Student: "citizen-id__type--student"
    }
    private AVAILABLETYPES: string[] = ['Teacher', 'Employer', 'Student']
    private ispublic: boolean = true;
    private loading: boolean = false;
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
            available_equipment:[]
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
    teacherQuery(teacherPage:TeacherProfile):ITeacherQuery{
      return {
        id_token:"",
        school_district:this.teacherProfile.school.district,
        school_name:this.teacherProfile.school.name,
        school_location:JSON.stringify(this.teacherProfile.school.location),
        bell_schedule:JSON.stringify(this.teacherProfile.school.bellSchedules),
        classroom_room_location:this.teacherProfile.classroom.location,
        classroom_room_phone:this.teacherProfile.classroom.phone_number,
        extension:this.teacherProfile.classroom.extension,
        preferred:tableToDecimal( this.CLASSROOM_COMMUNICATION,this.teacherProfile.classroom.preferredCommunication),
        preferred_other:findOther(this.CLASSROOM_COMMUNICATION,this.teacherProfile.classroom.preferredCommunication),
        tool_equipment:this.teacherProfile.classroom.available_equipment,
        courses_school_year:this.teacherProfile.courses.schoolYear,
        prep_period:Number.parseInt(this.teacherProfile.courses.prepPeriod.charAt(1)),
        course_information:JSON.stringify(this.teacherProfile.courses.classSchedules),
        enrolled_courses:JSON.stringify(this.teacherProfile.programDetails.coursePrograms),
        enagement_alternative:this.teacherProfile.programDetails.engagement_alternative,
        purchase_emp_product:tableToDecimal(this.PROGRAM_PURCHASE,[this.teacherProfile.programDetails.purchase_emp_product])
      }
    }
    created() {}
}
</script> 