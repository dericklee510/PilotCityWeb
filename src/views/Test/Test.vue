<template>
  <v-container
    fluid
    class="pc-profile-page"
  >
    <v-row justify="end">
      <!-- <div > -->
      <v-col
        xl="2"
        lg="3"
        md="4"
        sm="5"
        cols="8"
        style="padding: 0;"
        align-self="center"
      >
        <div
          id="profileSwitch"
          style="display: flex"
        >
          <!-- gotta make this switch work -->
          <v-switch
            text
            readonly
          >
            <template v-slot:label>
              <label class="profile__switch profile__switch--active">
                public
              </label>
            </template>
            <template v-slot:prepend>
              <label class="profile__switch profile__switch--inactive">
                private
              </label>
            </template>
          </v-switch>
        </div>
      </v-col>
    </v-row>
    <v-container fluid>
      <v-card class="pc-container pc-profile-page--dark">
        <!-- probably going to use Doka here.... -->
        <img
          id="profileBanner"
          src="@/assets/banner-1018818_960_720.jpg"
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
              <v-row justify="start">
                <v-col cols="12">
                  <h1>Hiro Ishikawa</h1>
                </v-col>
                <v-col
                  cols="12"
                  md="4"
                >
                  <v-menu
                    max-width="300px"
                    content-class="pc-v-center"
                    :offset-y="true"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-row justify="center">
                        <v-col>
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
                  md="4"
                  align-self="center"
                >
                  <h3>Fremont, CA</h3>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
          <v-container>
            <v-list
              id="profileFields"
              class="pc-profile-page--dark"
              text
            >
              <v-list-group
                no-action
                :ripple="false"
                :value="true"
              >
                <template v-slot:activator>
                  <v-row>
                    <v-col
                      cols="12"
                      lg="2"
                    >
                      <v-list-item-title
                        style="max-width: fit-content"
                        v-text="'Citizen'"
                      />
                    </v-col>
                  </v-row>
                </template>

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
                          <pcTextfield
                            v-model="firstname"
                            :dark-mode="true"
                            title="FIRST NAME"
                            placeholder="First Name"
                          />
                          <pcTextfield
                            v-model="lastname"
                            :dark-mode="true"
                            title="LAST NAME"
                            placeholder="Last Name"
                          />
                          <pcTextfield
                            v-model="position"
                            :dark-mode="true"
                            title="POSITION"
                            placeholder="Role"
                          />
                          <pcTextfield
                            v-model="companyname"
                            :dark-mode="true"
                            title="ORGANIZATION"
                            placeholder="Company Name"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-group
                no-action
                :ripple="false"
              >
                <template v-slot:activator>
                  <v-row>
                    <v-col
                      cols="12"
                      md="8"
                      lg="6"
                      xl="5"
                    >
                      <v-list-item-title
                        style="max-width: fit-content"
                        v-text="'Organization'"
                      />
                    </v-col>
                  </v-row>
                </template>
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
                          <pcSelect
                            :dark-mode="true"
                            title="Your Department"
                            placeholder="Enter Department Name"
                          />
                          <v-btn block="true">
                            +
                          </v-btn>
                          <autoComplete />
                          <v-checkbox label="Agriculture" />
                          <pcTextfield
                            v-model="product" 
                            :dark-mode="true"
                            title="LIST YOUR PRODUCT OR SERVICE"
                            placeholder="Name of Product"
                          />
                          <v-btn block="true">
                            +
                          </v-btn>
                          <pcSelect
                            :dark-mode="true"
                            title="EMPLOYEE COUNT"
                            placeholder="Select Number of Employeer"
                          />
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
              <v-list-group
                no-action
                :ripple="false"
              >
                <template v-slot:activator>
                  <v-row>
                    <v-col
                      cols="12"
                      md="8"
                      lg="6"
                      xl="5"
                    >
                      <v-list-item-title
                        style="max-width: fit-content"
                        v-text="'Program Details'"
                      />
                    </v-col>
                  </v-row>
                </template>
                <v-list-item>
                  <v-list-item-content>
                    <v-col cols="12">
                      <v-row justify="start">
                        <v-col cols="12">
                          <h3 style="color:white">
                            Externship
                          </h3>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:white"
                            class="text-uppercase"
                          >
                            SELECT THREE DATE OPTIONS FOR YOUR FULL DAY TEACHER EXTERNSHIP DAY AT YOUR WORKPLACE BETWEEN JAN 1 - FEB 1
                          </h4>
                        </v-col>
                        <v-col
                          cols="12"
                          style="color:white"
                        >
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <label for="firstdate"><h4 class="text-uppercase">First choice</h4></label>
                            <v-date-picker id="firstdate" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <label for="nextdate"><h4 class="text-uppercase">Second choice</h4></label>
                            <v-date-picker id="nextdate" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <label for="lastdate"><h4 class="text-upperca">Third choicde</h4></label>
                            <v-date-picker id="lastdate" />
                            <v-col />
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:white"
                            class="text-uppercase"
                          >
                            WILL YOU BE ABLE TO PROVIDE CLASSROOMS ACCESS TO YOUR PRODUCT OR SERVICE WITH ANY OF THE FOLLOWING?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-checkbox label="Donation" />
                          </v-col>
                          <v-col cols="12">
                            <v-checkbox label="Loan" />
                          </v-col>
                          <v-col cols="12">
                            <v-checkbox label="Purchase" />
                          </v-col>
                          <v-col cols="12">
                            <v-checkbox>
                              <template v-slot:label>
                                <v-text-field placeholder="Other" />
                              </template>
                            </v-checkbox>
                          </v-col>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <h3 style="color:white">
                            Project
                          </h3>
                        </v-col>
                        
                        <v-col
                          cols="12"
                          md="6"
                        >
                          <pcDropdown
                            v-model="minStudents"
                            :items="CLASSROOM_COUNT"
                            placeholder="Select Minimum"
                          />
                        </v-col>
                        <v-col
                          cols="12"
                          md="6"
                        >
                          <pcDropdown
                            v-model="maxStudents"
                            :items="CLASSROOM_COUNT"
                            placeholder="Select Maximum"
                          />
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:white"
                            class="text-uppercase"
                          >
                            How do you prefer to engage with the classroom?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="In-person" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="Digital" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="Either" />
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:white"
                            class="text-uppercase"
                          >
                            How far would you travel to engage with a classroom in person?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="5 Miles" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="10 Miles" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="25 Miles" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="50 Miles" />
                          </v-col>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <h3 style="color:white">
                            Internships
                          </h3>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:white"
                            class="text-uppercase"
                          >
                            What would be the primary focus of their internship program
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-checkbox label="Further development of their project from the classroom" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-checkbox
                              label="Work on a newly assigned project or task" 
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-checkbox label="Further development of their project from the classroom">
                              <v-textfield placeholder="other" />
                              <v-checkbox />
                            </v-checkbox>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:white"
                            class="text-uppercase"
                          >
                            Do you require hiring adults 18 years or older?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="Yes" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio
                              label="No" 
                            />
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:white"
                            class="text-uppercase"
                          >
                            Would you need the student(s) to have either a drivers license or a vehicle?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio label="No" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio
                              label="Yes, both a license and a car" 
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio
                              label="Yes only a license" 
                            />
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:white"
                            class="text-uppercase"
                          >
                            What level of education do you typically hire from?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-checkbox label="Highschool" />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-checkbox
                              label="Yes, both a license and a car" 
                            />
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-checkbox
                              label="Yes only a license" 
                            />
                          </v-col>
                        </v-col>
                      </v-row>
                    </v-col>
                  </v-list-item-content>
                </v-list-item>
              </v-list-group>
            </v-list>
          </v-container>
        </v-container>
      </v-card>
    </v-container>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue"
import PCselect from "@/components/inputs/PCselect.vue"
import PCtextfield from "@/components/inputs/PCtextfield.vue"
import PCdropdown from "@/components/inputs/PCdropdown.vue"
import autoComplete from "@/components/GoogleMaps/Autocomplete/AutoComplete.vue"
import Component from "vue-class-component"
import * as Employer from "./types"
import { tableToDecimal } from "./helpers"

@Component({
    components:{
    pcSelect: PCselect,
    pcTextfield: PCtextfield,
    pcDropdown: PCdropdown,
    autoComplete
    }
})
export default class Test extends Vue {
    public citizenType: string = "Teacher";
    private CITIZENSTYLES = {
        Teacher: "citizen-id__type--teacher", 
        Employer: "citizen-id__type--employer", 
        Student: "citizen-id__type--student"
    }
    private AVAILABLETYPES: string[] = [
        "Teacher", 
        "Employer", 
        "Student"
    ];
    private ispublic: boolean = true;

    public CLASSROOM_COUNT = [
        {title: "1 Classroom"}, 
        {title: "2 Classrooms"}, 
        {title: "3 Classrooms"}, 
        {title: "4 Classrooms"}, 
        {title: "5 Classrooms"}, 
        {title: "6 Classrooms"}, 
        {title: "7 Classrooms"}, 
        {title: "8 Classrooms"}, 
        {title: "9 Classrooms"}, 
        {title: "10 Classrooms"}
    ]
    firstname: string = '';
    lastname: string = '';
    position: string = '';
    product: string = '';
    companyname: string = '';
    minStudents: string = "";
    maxStudents: string = "";

    private changeCitizenType(intype: string): void {
        this.citizenType = intype
    }
}
</script>