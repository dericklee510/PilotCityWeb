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
                  <h1>{{`${citizen.first_name} ${citizen.last_name}`}}</h1>
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
                          <ValidationProvider
                            v-slot="{errors}"
                            rules="required"
                          >
                            <pcTextfield
                              v-model="citizen.first_name"
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
                            :error-messages="errors"
                              v-model="citizen.last_name"
                              :dark-mode="true"
                              title="LAST NAME"
                              placeholder="Last Name"
                            />
                          </ValidationProvider>
                          <ValidationProvider
                            v-slot="{errors}"
                            rules="required"
                          >
                            <pcTextfield
                            :error-messages="errors"
                              v-model="citizen.position"
                              :dark-mode="true"
                              title="POSITION"
                              placeholder="Role"
                            />
                          </ValidationProvider>
                          <ValidationProvider
                            v-slot="{errors}"
                            rules="required"
                          >
                            <pcTextfield
                            :error-messages="errors"
                              v-model="citizen.organization"
                              :dark-mode="true"
                              title="ORGANIZATION"
                              placeholder="Company Name"
                            />
                          </ValidationProvider>
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
                        <v-col cols="12">
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
                              :error-messages="errors"
                                v-model="organization.department[0]"
                                :dark-mode="true"
                                title="Your Department"
                                placeholder="Enter Department Name"
                              />
                            </ValidationProvider>
                          </v-col>
                          <!-- <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <v-btn
                              :block="true"
                              @click="addDept"
                            >
                              +
                            </v-btn>
                          </v-col> -->
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                          <ValidationProvider rules="required" v-slot="{errors}">
                            <autoComplete :error-messages="{errors}" v-model="organization.location" />
                          </ValidationProvider>
                            
                          </v-col>
                          <v-col
                            v-for="(industry, index) in organization_industry_options"
                            :key="index"
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <ValidationProvider
                              v-slot="{error}"
                              rules="required"
                            >
                              <v-checkbox :label="industry" />
                            </ValidationProvider>
                          </v-col>
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <ValidationProvider
                              v-slot="{error}"
                              rules="required"
                            >
                              <pcTextfield
                              :error-messages="errors"
                                v-model="program_details_organization.products_services" 
                                :dark-mode="true"
                                title="LIST YOUR PRODUCT OR SERVICE"
                                placeholder="Name of Product"
                              />
                            </ValidationProvider>
                          </v-col>
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <v-btn :block="true">
                              +
                            </v-btn>
                          </v-col>
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <ValidationProvider
                              v-slot="{error}"
                              rules="required"
                            >
                              <pcSelect
                                v-model="organization.employee_count"
                                :items="WORKFORCE_COUNT"
                                :dark-mode="true"
                                title="EMPLOYEE COUNT"
                                placeholder="Select Number of Employees"
                              />
                            </ValidationProvider>
                          </v-col>
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
                  <ValidationObserver ref="observer">
                  <v-list-item-content>
                    <v-col cols="12">
                      <v-row justify="start">
                        <v-col cols="12">
                          <h3 style="color:#AE90B0">
                            Externship
                          </h3>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
                            class="text-uppercase"
                          >
                            SELECT THREE DATE OPTIONS FOR YOUR FULL DAY TEACHER EXTERNSHIP DAY AT YOUR WORKPLACE BETWEEN JAN 1 - FEB 1
                          </h4>
                        </v-col>
                        <v-col
                          cols="12"
                          style="color:#C7C8CA"
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
                              <pcTextfield
                              :error-messages="errors"
                                v-model="program_details_externship.prefered_date.primary"
                                :dark-mode="true"
                                placeholder="Primary option"
                                title="First Choice"
                              />
                            </ValidationProvider>
                          </v-col>
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
                              :error-messages="errors"
                                v-model="program_details_externship.prefered_date.primary"
                                :dark-mode="true"
                                placeholder="Secondary option"
                                title="Second Choice"
                              />
                            </ValidationProvider>
                          </v-col>
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
                              :error-messages="errors"
                                v-model="program_details_externship.prefered_date.primary"
                                :dark-mode="true"
                                placeholder="Final option"
                                title="Third Choice"
                              />
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
                            class="text-uppercase"
                          >
                            WILL YOU BE ABLE TO PROVIDE CLASSROOMS ACCESS TO YOUR PRODUCT OR SERVICE WITH ANY OF THE FOLLOWING?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            v-for="(contribution, index) in programdetails_externship_contribution_options"
                            :key="contribution+index"
                            cols="12"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-checkbox :label="contribution" />
                            </ValidationProvider>
                          </v-col>
                          <v-col cols="12">
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-checkbox @change="addOption(contributionOther, programdetails_externship_contribution_options)">
                                <template v-slot:label>
                                  <v-text-field
                                    v-model="contributionOther"
                                    placeholder="Other"
                                  />
                                </template>
                              </v-checkbox>
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <h3 style="color:#AE90B0">
                            Project
                          </h3>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            id="text-uppercase"
                            style="color:#c7c8ca"
                          >
                            WHAT IS THE MINIMUM AND MAXIMUM NUMBER OF CLASSROOMS YOU’D LIKE IN YOUR PROGRAM?
                          </h4>
                        </v-col>
                        <v-col
                          cols="12"
                        >
                          <v-row>
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <ValidationProvider
                                v-slot="{errors}"
                                rules="required"
                              >
                                <pcSelect
                                  v-model="minStudents"
                                  :dark-mode="true"
                                  :items="CLASSROOM_COUNT"
                                  title=""
                                  placeholder="Select Minimum"
                                />
                              </ValidationProvider>
                            </v-col>
                            <v-col
                              cols="4"
                            >
                              <ValidationProvider
                                v-slot="{errors}"
                                rules="required"
                              >
                                <pcSelect
                                  v-model="maxStudents"
                                  :items="CLASSROOM_COUNT"
                                  title=""
                                  placeholder="Select Maximum"
                                />
                              </ValidationProvider>
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
                            class="text-uppercase"
                          >
                            How do you prefer to engage with the classroom?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            v-for="(eng, index) in programdetails_project_engagement_type_options "
                            :key="eng+index"
                            cols="12"
                            md="6"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio :label="eng" />
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
                            class="text-uppercase"
                          >
                            How far would you travel to engage with a classroom in person?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            v-for="(rad, index) in programdetails_project_engagement_radius_options "
                            :key="rad+index"
                            cols="12"
                            md="6"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio :label="rad" />
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                      </v-row>
                      <v-row>
                        <v-col cols="12">
                          <h3 style="color:#AE90B0">
                            Internships
                          </h3>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
                            class="text-uppercase"
                          >
                            What would be the primary focus of their internship program
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            v-for="(op, index) in internship_project_type "
                            :key="op+index"
                            cols="12"
                            md="6"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-checkbox :label="op" />
                            </ValidationProvider>
                          </v-col>
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-checkbox @change="addOption(internother, internship_project_type)">
                                <v-textfield
                                  v-model="internother"
                                  placeholder="other"
                                />
                              </v-checkbox>
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
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
                            <v-radio-group v-model="program_details_internship.hiring_adult">
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-radio
                                  label="Yes"
                                  value="yes" 
                                />
                              </ValidationProvider>
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-radio
                                  label="No"
                                  value="no" 
                                />
                              </ValidationProvider>
                            </v-radio-group>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
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
                            <v-radio-group v-model="program_details_internship.travel">
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-radio
                                  label="No"
                                  value="no"
                                />
                              </ValidationProvider>
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-radio
                                  label="Yes, both a license and a car"
                                  value="both"
                                />
                              </ValidationProvider>
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-radio
                                  label="Yes only a license"
                                  value="license"
                                />
                              </ValidationProvider>
                            </v-radio-group>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
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
                            <ValidationProvider
                              v-slot="{error}"
                              rules="required"
                            >
                              <v-checkbox
                                v-model="program_details_internship.education_level"
                                label="Highschool"
                                value="High school"
                              />
                            </ValidationProvider>
                            <ValidationProvider
                              v-slot="{error}"
                              rules="required"
                            >
                              <v-checkbox
                                v-model="program_details_internship.education_level"
                                label="Specialty Training"
                                value="Specialty Training"
                              />
                            </ValidationProvider>
                            <ValidationProvider
                              v-slot="{error}"
                              rules="required"
                            >
                              <v-checkbox
                                v-model="program_details_internship.education_level"
                                label="Community College"
                                value="Community College"
                              />
                            </ValidationProvider>
                            <ValidationProvider
                              v-slot="{error}"
                              rules="required"
                            >
                              <v-checkbox
                                v-model="program_details_internship.education_level"
                                label="Bachelors"
                                value="Bachelors"
                              />
                            </ValidationProvider>
                            <ValidationProvider
                              v-slot="{error}"
                              rules="required"
                            >
                              <v-checkbox
                                v-model="program_details_internship.education_level"
                                label="Doctorate"
                                value="Doctorate"
                              />
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            id="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            WHAT TYPE OF HIGH SCHOOL TALENT WOULD YOU LIKE TO HIRE?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <div
                              v-for="(tal, index) in internship_talent_options"
                              :key="tal+index"
                            >
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-checkbox
                                  v-model="program_details_internship.talent"
                                  :label="tal"
                                  :value="tal" 
                                />
                              </ValidationProvider>
                            </div>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            HOW MANY DAYS PER WEEK WILL YOU BE ABLE TO HOST INTERNS & FELLOWS BETWEEN JUNE 29 - AUGUST 7?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <v-radio-group v-model="program_details_internship.days_week">
                              <div
                                v-for="(sched, index) in HOST_SCHED"
                                :key="sched+index"
                              >
                                <ValidationProvider
                                  v-slot="{error}"
                                  rules="required"
                                >
                                  <v-radio
                                    :label="sched"
                                    :value="sched"
                                  />
                                </ValidationProvider>
                              </div>
                            </v-radio-group>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            HOW MANY HOURS PER DAY WILL YOU BE ABLE TO HOST INTERNS & FELLOWS BETWEEN JUNE 29 - AUGUST 7?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <v-radio-group v-model="program_details_internship.hours_day">
                              <div
                                v-for="(freq, index) in HOST_FREQ"
                                :key="freq+index"
                              >
                                <ValidationProvider
                                  v-slot="{error}"
                                  rules="required"
                                >
                                  <v-radio
                                    :label="freq"
                                    :value="freq"
                                  />
                                </ValidationProvider>
                              </div>
                            </v-radio-group>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            WHO DO YOU PREFER TO BE THE EMPLOYER-OF-RECORD?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <v-radio-group v-model="program_details_internship.employer_of_record">
                              <div
                                v-for="(option, index) in EOR"
                                :key="option+index"
                              >
                                <ValidationProvider
                                  v-slot="{error}"
                                  rules="required"
                                >
                                  <v-radio
                                    :label="option"
                                    :value="option"
                                  />
                                </ValidationProvider>
                              </div>
                            </v-radio-group>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            WHAT COMPENSATION TYPES WOULD YOU CONSIDER FOR OUR INTERNSHIP PROGRAM?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <div
                              v-for="(comp, index) in INTERN_COMP"
                              :key="comp+index"
                            >
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-checkbox
                                  v-model="program_details_internship.compensation"
                                  :label="comp"
                                  :value="comp" 
                                />
                              </ValidationProvider>
                            </div>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            IF YOU HAVE AN INTERNSHIP BUDGET IN MIND FOR OUR PROGRAM, ENTER THE MININMUM AND MAXIMUM AMOUNT
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-row>
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <pcTextfield
                              :error-messages="errors"
                                v-model="program_details_internship.budget_min"
                                :dark-mode="true"
                                placeholder="Minimum"
                                title=""
                              />
                            </v-col>
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <pcTextfield
                              :error-messages="errors"
                                v-model="program_details_internship.budget_max"
                                :dark-mode="true"
                                placeholder="Maximum"
                                title=""
                              />
                            </v-col>
                          </v-row>
                        </v-col>
                        <v-col cols="12">
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
                              :error-messages="errors"
                                v-model="program_details_internship.interview_1"
                                :dark-mode="true"
                                placeholder="Primary option"
                                title="First Choice"
                              />
                            </ValidationProvider>
                          </v-col>
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
                              :error-messages="errors"
                                v-model="program_details_internship.interview_2"
                                :dark-mode="true"
                                placeholder="Secondary option"
                                title="Second Choice"
                              />
                            </ValidationProvider>
                          </v-col>
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
                              :error-messages="errors"
                                v-model="program_details_internship.interview_3"
                                :dark-mode="true"
                                placeholder="Final option"
                                title="Third Choice"
                              />
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            SELECT THREE DATE OPTIONS FOR INTERVIEWING CANDIDATES BETWEEN APRIL 15 - MAY 15 FROM 4PM - 6PM
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <v-radio-group v-model="program_details_internship.employment">
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-radio
                                  label="Yes"
                                  value="yes" 
                                />
                              </ValidationProvider>
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-radio
                                  label="No"
                                  value="no" 
                                />
                              </ValidationProvider>
                            </v-radio-group>
                          </v-col>
                        </v-col>
                        <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            WHAT POSITIONS WOULD YOU HAVE AVAILABLE FOR CONTINUED EMPLOYMENT OF IN-SCHOOL OR GRADUATED HIGH SCHOOL TALENT?
                          </h4>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <div
                              v-for="(pos, index) in internship_position_type_options"
                              :key="pos+index"
                            > 
                              <ValidationProvider
                                v-slot="{error}"
                                rules="required"
                              >
                                <v-checkbox
                                  v-model="program_details_internship.position_type"
                                  :label="pos"
                                  :value="pos" 
                                />
                              </ValidationProvider>
                            </div>
                          </v-col>
                        </v-col>
                         <v-btn
              id="signup-button"
              block
              :loading="loading"
              :disabled="loading"
              class="mb-6"
              @click="syncStorage"
            >
              <h3 class="text-uppercase">
                Complete Profile
              </h3>
            </v-btn>
                      </v-row>
                    </v-col>
                  </v-list-item-content>

                 </ValidationObserver>
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
import {ValidationProvider, ValidationObserver} from 'vee-validate'
import {ObserverInstance} from "@/utilities/validation"
import { tableToDecimal } from "./helpers"

@Component({
    components:{
        pcSelect: PCselect,
        pcTextfield: PCtextfield,
        pcDropdown: PCdropdown,
        autoComplete,
        ValidationProvider,
        ValidationObserver
    }
})

export default class Test extends Vue {
    public citizenType: string = "Teacher";

    private CITIZENSTYLES = {
        Teacher: "citizen-id__type--teacher",
        Employer: "citizen-id__type--employer",
        Student: "citizen-id__type--student"
    }
    private AVAILABLETYPES: string[] = ["Teacher", "Employer", "Student"]
    private ispublic: boolean = true;
    private changeCitizenType(intype: string): void {
        this.citizenType = intype
    }

    public citizen: Employer.Citizen = {
        first_name: "",
        last_name: "",
        position: "",
        organization: ""
    }
    public organization: Employer.Organization = {} as Employer.Organization
    public programdetails: Employer.ProgramDetails = {} as Employer.ProgramDetails
    public internship: Employer.Internship = {} as Employer.Internship
    minStudents: string = "";
    maxStudents: string = "";
    private loading:boolean = false
    public syncStorageCitizen() {
        localStorage.citizen_first_name = this.citizen.first_name
        localStorage.citizen_last_name = this.citizen.last_name
        localStorage.citizen_position = this.citizen.position
        localStorage.citizen_organization = this.citizen.organization
    }
    private program_details_internship =  {
        project: [],
        hiring_adult: '',
        travel: '',
        education_level:[],
        talent: [],
        days_week: ``,
        hours_day: ``,
        employer_of_record: '',
        compensation: [],
        budget_min: ``,
        budget_max: ``,
        interview_1: '',
        interview_2: '',
        interview_3: '',
        employment: ``,
        position_type: []
    }
    private program_details_externship = {
        prefered_date: {
            primary: ``,
            secondary: ``,
            final: ``
        },
        contribution: []
    }
    private program_details_organization = {
        department: [],
        location: '',
        industry: [],
        products_services: [], 
        employee_count: ''
    }
    organization_industry_options = [
        'Agriculture and Natural Resources', 
        'Arts, Media, and Entertainment', 
        'Building and Construction Trades', 
        'Business and Finance',
        'Education, Child Development, and Family Services', 
        'Energy, Environment, and Utilities',
        'Engineering and Architecture',
        'Fashion and Interior Design',
        'Health Science and Medical Technology',
        'Hospitality, Tourism, and Recreation',
        'Information and Communication Technologies',
        'Manufacturing and Product Development',
        'Marketing Sales and Service',
        'Public Services',
        'Transportation'
    ]
    WORKFORCE_COUNT = [
        '1 - 10',
        '11 - 25',
        '26 - 50',
        '51 - 100',
        '101 - 500',
        '501 - 1000',
        '1000 + '
    ]
    public CLASSROOM_COUNT = [
        "1 Classroom", 
        "2 Classrooms", 
        "3 Classrooms", 
        "4 Classrooms", 
        "5 Classrooms", 
        "6 Classrooms", 
        "7 Classrooms", 
        "8 Classrooms", 
        "9 Classrooms", 
        "10 Classrooms"
    ]
    programdetails_externship_contribution_options = [
        'Donation',
        'Loan',
        'Purchase'
    ]
    private contributionOther: string = '';
    private internother: string = ``;

    programdetails_project_engagement_type_options = [
        'In-person',
        'Digital',
        'Either'
    ]
    programdetails_project_engagement_radius_options = [
        '5 Miles',
        '10 Miles',
        '25 Miles',
        '50 Miles'
    ]
    internship_project_type=[
        'Further development of project started in the classroom',
        'Work on newly assigned projects and tasks'
    ]
    internship_education_options = [
        'High School',
        'Specialty Training',
        'Community College',
        'Bachelors',
        'Doctorate'
    ]
    internship_talent_options = [
        'Worker',
        'Intern',
        'Innovator',
        'Entrepreneur'
    ]
    internship_employer_of_record_options = [
        'Our own organization',
        'PilotCity'
    ]
    internship_compensation_options = [
        'Salary',
        'Hourly',
        'Stipend',
        'Unpaid'
    ]
    internship_position_type_options = [
        'Part-Time',
        'Full-Time',
        'Contractor',
        'None'
    ]
    HOST_SCHED = [
        "5 Days / Week",
        "4 Days / Week",
        "3 Days / Week",
        "2 Days / Week",
        "1 Days / Week",
        "None"
    ]
    HOST_FREQ = [
        "8 Hours / Day",
        "7 Hours / Day",
        "6 Hours / Day",
        "5 Hours / Day",
        "4 Hours / Day",
        "3 Hours / Day",
        "2 Hours / Day",
        "1 Hours / Day",
        "None"
    ]
    EOR = [
        "Our own organization",
        "PilotCity"
    ]
    INTERN_COMP = [
        "Salary",
        "Hourly",
        "Stipend",
        "Unpaid"
    ]
    public addDept(){
      if(this.organization)
        this.organization.department.push("")
    }
    private addOption(from: string, to: string[]): void{
        to.push(from)
    }
    public syncStorageOrganization() {
        
        if(this.organization){
        let location = this.organization.location
        localStorage.organization_division = this.organization.department
        localStorage.organization_location_text = `${location.name} ${location.street_number} ${location.route}, ${location.locality}, ${location.administrative_area_level_1} ${location.postal_code}, ${location.country}`
        localStorage.organization_location_lng = this.organization.location.longitude
        localStorage.organization_location_lat = this.organization.location.latitude
        localStorage.organization_industry = tableToDecimal(this.organization_industry_options, this.organization.industry)
        localStorage.organization_industry_other = this.organization.industry[this.organization.industry.length - 1]
        localStorage.organization_product_list = this.organization.products_services
        localStorage.organization_product_employee_count = this.organization.employee_count
        }
    }
    syncStorageProgramDetails() {
        if (this.programdetails) {
            localStorage.program_externship_time_first = this.programdetails.externship.prefered_date.primary
            localStorage.program_externship_time_second = this.programdetails.externship.prefered_date.secondary
            localStorage.program_externship_time_third = this.programdetails.externship.prefered_date.final
            localStorage.program_externship_options = tableToDecimal(this.programdetails_externship_contribution_options, this.programdetails.externship.contribution)
            localStorage.program_externship_options_other = this.programdetails.externship.contribution[this.programdetails.externship.contribution.length - 1]
        }
    }
    syncStorageProject() {
        if (this.programdetails) {
            localStorage.projects_min = this.programdetails.project.capacity.minimum
            localStorage.projects_max = this.programdetails.project.capacity.maximum
            localStorage.projects_engagement = tableToDecimal(this.programdetails_project_engagement_type_options, [
                this.programdetails.project.engagement.type
            ])
            localStorage.projects_engagement_2 = tableToDecimal(this.programdetails_project_engagement_radius_options, [
                this.programdetails.project.engagement.radius
            ])
            // localStorage.projects_requests = this.programdetails.project.
            // localStorage.projects_missions = this.programdetails.project.
            // localStorage.projects_specifications = this.programdetails.project.
        }
    }
    syncStorageInternship(){
        if(this.internship){
            localStorage.internships_project = tableToDecimal(this.internship_project_type,this.internship.project)
            localStorage.internships_project_other = this.internship.project[this.internship.project.length - 1]
            localStorage.internships_hiring_adult = this.internship.hiring_adult
            // localStorage.internships_travel
            localStorage.internships_education = tableToDecimal(this.internship_education_options,this.internship.education_level)
            localStorage.internships_education_other = this.internship.education_level.slice(-1)[0]
            localStorage.internships_talent = tableToDecimal(this.internship_talent_options, this.internship.talent)
            localStorage.internships_days_week =this.internship.days_week
            localStorage.internships_hours_day= this.internship.hours_day
            localStorage.internships_employer_of_record = tableToDecimal(this.internship_employer_of_record_options, [
                this.internship.employer_of_record
            ])
            localStorage.internships_compensation = tableToDecimal(this.internship_compensation_options,this.internship.compensation)
            localStorage.internships_budget_min = this.internship.budget_min
            localStorage.internships_budget_max = this.internship.budget_max
            localStorage.internships_interview_option1 = this.internship.interview_1
            localStorage.internships_interview_option2 = this.internship.interview_2
            localStorage.internships_interview_option3 = this.internship.interview_3
            localStorage.internships_employment = this.internship.employment
            localStorage.internships_position = tableToDecimal(this.internship_position_type_options,this.internship.position_type)
        }
    }
    async syncStorage(){
      this.loading = true
      if(await (this.$refs.observer as ObserverInstance).validate()){
        this.syncStorageCitizen()
        this.syncStorageOrganization()
        this.syncStorageProgramDetails()
        this.syncStorageProject()
        this.syncStorageInternship()
      }
      this.loading = false
    }
    created(){
      this.citizen.first_name = localStorage.first_name?localStorage.first_name:"Your"
      this.citizen.last_name = localStorage.last_name?localStorage.last_name:"Name"
    }
}
</script>