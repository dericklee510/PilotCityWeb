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
                  <h1>{{ Name }}</h1>
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
                            v-model="citizen.last_name"
                            :error-messages="errors"
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
                            v-model="citizen.position"
                            :error-messages="errors"
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
                            v-model="citizen.organization"
                            :error-messages="errors"
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
              <v-list-item-title
                style="max-width: fit-content"
                v-text="'Organization'"
              />
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
                              v-model="organization.department"
                              :error-messages="errors"
                              :dark-mode="true"
                              title="Your Department"
                              placeholder="Enter Department Name"
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
                            <autoComplete
                              v-model="organization.location"
                              :error-messages="{errors}"
                            />
                          </ValidationProvider>
                        </v-col>
                        <ValidationProvider
                          v-slot="{errors}"
                          rules="required"
                        >
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                Industry
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors[0]?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>  
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <v-checkbox
                              v-for="(industry, index) in ORGANIZATION_INDUSTRY_OPTIONS"
                              :key="index"
                              v-model="organization.industry"
                              :label="industry"
                              :value="industry"
                              hide-details
                            />
                          </v-col>
                        </ValidationProvider>
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
                              v-for="(product_service, index) in organization.products_services"
                              :key="product_service+index"
                              v-model="organization.products_services[index]"
                              :error-messages="errors"
                              :dark-mode="true"
                              title="LIST YOUR PRODUCT OR SERVICE"
                              placeholder="Name of Product"
                              @keyup.enter="addOption('',organization.products_services)"
                            />
                          </ValidationProvider>
                        </v-col>
                        <v-col
                          cols="12"
                          md="8"
                          lg="6"
                          xl="5"
                        >
                          <v-btn
                            :block="true"
                            @click="addOption('',organization.products_services)"
                          >
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
                            v-slot="{errors}"
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
              
              <v-list-item-title
                style="max-width: fit-content"
                v-text="'Program Details'"
              />
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
                                v-model="programdetails.externship.prefered_date.primary"
                                :error-messages="errors"
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
                                v-model="programdetails.externship.prefered_date.secondary"
                                :error-messages="errors"
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
                                v-model="programdetails.externship.prefered_date.final"
                                :error-messages="errors"
                                :dark-mode="true"
                                placeholder="Final option"
                                title="Third Choice"
                              />
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                        <ValidationProvider
                          v-slot="{errors}"
                          rules="required"
                        >
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                WILL YOU BE ABLE TO PROVIDE CLASSROOMS ACCESS TO YOUR PRODUCT OR SERVICE WITH ANY OF THE FOLLOWING?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors[0]?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                            
                              cols="12"
                            >
                              <v-checkbox
                                v-for="(contribution, index) in PROGRAMDETAILS_EXTERNSHIP_CONTRIBUTION_OPTIONS"
                                :key="contribution+index"
                                v-model="programdetails.externship.contribution"
                                :label="contribution"
                                :value="contribution"
                                hide-details
                              />
                              <v-checkbox
                                v-model="programdetails.externship.contribution"
                                :value="contributionOther"
                                hide-details
                              >
                                <template v-slot:label>
                                  <v-text-field
                                    v-model="contributionOther"
                                    placeholder="Other"
                                  />
                                </template>
                              </v-checkbox>
                            </v-col>
                          </v-col>
                        </ValidationProvider>
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
                                  v-model="programdetails.project.capacity.minimum"
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
                                  v-model="programdetails.project.capacity.maximum"
                                  :dark-mode="true"
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
                            cols="12"
                            md="6"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio-group v-model="programdetails.project.engagement.type">
                                <v-radio
                                  v-for="(eng, index) in PROGRAMDETAILS_PROJECT_ENGAGEMENT_TYPE_OPTIONS "
                                  :key="eng+index"
                                  :label="eng"
                                  :value="eng"
                                />
                              </v-radio-group>
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
                            
                            cols="12"
                            md="6"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio-group v-model="programdetails.project.engagement.radius">
                                <v-radio
                                  v-for="(rad, index) in PROGRAMDETAILS_PROJECT_ENGAGEMENT_RADIUS_OPTIONS "
                                  :key="rad+index"
                                  :value="rad"
                                  :label="rad"
                                />
                              </v-radio-group>
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
                        <ValidationProvider
                          v-slot="{errors}"
                          rules="required"
                        >
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                What would be the primary focus of their internship program
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors[0]?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <v-checkbox
                                v-for="(op, index) in INTERNSHIP_PROJECT_TYPE "
                                :key="op+index"
                                v-model="internship.project"
                                :value="op"
                                :label="op"
                                hide-details
                              />
                              <v-checkbox
                                v-model="internship.project"
                                :value="internOther"
                                hide-details
                              >
                                <template v-slot:label>
                                  <v-text-field
                                    v-model="internOther"
                                    placeholder="other"
                                  />
                                </template>
                              </v-checkbox>
                            </v-col>
                          </v-col>
                        </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio-group v-model="internship.hiring_adult">
                                <v-radio
                                  label="Yes"
                                  value="yes" 
                                />
                                <v-radio
                                  label="No"
                                  value="no" 
                                />
                              </v-radio-group>
                            </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio-group v-model="internship.travel">
                                <v-radio
                                  label="No"
                                  value="no"
                                />
                                <v-radio
                                  label="Yes, both a license and a car"
                                  value="both"
                                />
                                <v-radio
                                  label="Yes only a license"
                                  value="license"
                                />
                              </v-radio-group>
                            </ValidationProvider>
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
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-checkbox
                                v-model="internship.education_level"
                                label="Highschool"
                                value="High school"
                                hide-details
                              />
                              <v-checkbox
                                v-model="internship.education_level"
                                label="Specialty Training"
                                value="Specialty Training"
                                hide-details
                              />
                              <v-checkbox
                                v-model="internship.education_level"
                                label="Community College"
                                value="Community College"
                                hide-details
                              />
                              <v-checkbox
                                v-model="internship.education_level"
                                label="Bachelors"
                                value="Bachelors"
                                hide-details
                              />
                              <v-checkbox
                                v-model="internship.education_level"
                                label="Doctorate"
                                value="Doctorate"
                                hide-details
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
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-checkbox
                                v-for="(tal, index) in INTERNSHIP_TALENT_OPTIONS"
                                :key="tal+index"
                                v-model="internship.talent"
                                :label="tal"
                                :value="tal"
                                hide-details
                              />
                            </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio-group v-model="internship.hours_week">
                                <v-radio
                                  v-for="(sched, index) in HOST_SCHED"
                                  :key="sched+index"
                                  :label="sched"
                                  :value="sched"
                                />
                              </v-radio-group>
                            </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio-group v-model="internship.hours_day">
                                <v-radio
                                  v-for="(freq, index) in HOST_FREQ"
                                  :key="freq+index"
                                  :label="freq"
                                  :value="freq"
                                />
                              </v-radio-group>
                            </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio-group v-model="internship.employer_of_record">
                                <v-radio
                                  v-for="(option, index) in EOR"
                                  :key="option+index"
                                  :label="option"
                                  :value="option"
                                />
                              </v-radio-group>
                            </ValidationProvider>
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
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-checkbox
                                v-for="(comp, index) in INTERN_COMP"
                                :key="comp+index"
                                v-model="internship.compensation"
                                :label="comp"
                                :value="comp" 
                                hide-details
                              />
                            </ValidationProvider>
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
                              <ValidationProvider
                                v-slot="{errors}"
                                rules="required|min:0"
                              >
                                <pcTextfield
                                  v-model="internship.budget_min"
                                  :error-messages="errors"
                                  :dark-mode="true"
                                  placeholder="Minimum"
                                  title=""
                                />
                              </ValidationProvider>
                            </v-col>
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <ValidationProvider
                                v-slot="{errors}"
                                rules="required|min:0"
                              >
                                <pcTextfield
                                  v-model="internship.budget_max"
                                  :error-messages="errors"
                                  :dark-mode="true"
                                  placeholder="Maximum"
                                  title=""
                                />
                              </ValidationProvider>
                            </v-col>
                          </v-row>
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
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <pcTextfield
                                v-model="internship.interview_1"
                                :error-messages="errors"
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
                                v-model="internship.interview_2"
                                :error-messages="errors"
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
                                v-model="internship.interview_3"
                                :error-messages="errors"
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
                            IF SATISFIED AFTER SUMMER PROGRAM, WILL YOU CONSIDER CONTINUED EMPLOYMENT OF INTERN OR FELLOW?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="6"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-radio-group v-model="internship.employment">
                                <v-radio
                                  label="Yes"
                                  value="yes" 
                                />
                                <v-radio
                                  label="No"
                                  value="no" 
                                />
                              </v-radio-group>
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                        <v-col cols="12">
                          <h4
                            class="text-uppercase"
                            style="color:#C7C8CA"
                          >
                            WHAT POSITIONS WOULD YOU HAVE AVAILABLE FOR CONTINUED EMPLOYMENT OF IN-SCHOOL OR GRADUATED HIGH SCHOOL TALENT?
                          </h4>
                        </v-col>
                        <v-col cols="12">
                          <v-col
                            cols="12"
                            md="4"
                          >
                            <ValidationProvider
                              v-slot="{errors}"
                              rules="required"
                            >
                              <v-checkbox
                                v-for="(pos, index) in INTERNSHIP_POSITION_TYPE_OPTIONS"
                                :key="pos+index"
                                v-model="internship.position_type"
                                :label="pos"
                                :value="pos" 
                                hide-details
                              />
                            </ValidationProvider>
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
import { tableToDecimal, findOther } from "./helpers"
import {CONST} from './const'

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

export default class Test extends CONST {
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

    public citizen: Employer.Citizen = {} as Employer.Citizen
    public organization: Employer.Organization = {
        industry: [] as string[]
    } as Employer.Organization
    public programdetails: Employer.ProgramDetails = {
        externship: { prefered_date: {}, contribution: [] as string[]}, 
        project: { capacity: {}, engagement: {}}
    } as Employer.ProgramDetails
    public internship: Employer.Internship = {
        talent: []  as string[],
        project: [] as string[],
        compensation: [] as string[],
        position_type: []  as string[]
    } as Employer.Internship

    contributionOther: string = '';
    internOther: string  = '';
    private loading: boolean = false

     

    public syncStorageCitizen() {
        localStorage.citizen_first_name = this.citizen.first_name
        localStorage.citizen_last_name = this.citizen.last_name
        localStorage.citizen_position = this.citizen.position
        localStorage.citizen_organization = this.citizen.organization
    }
   
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
            localStorage.organization_industry = tableToDecimal(this.ORGANIZATION_INDUSTRY_OPTIONS, this.organization.industry)
            localStorage.organization_industry_other = findOther(this.ORGANIZATION_INDUSTRY_OPTIONS, this.organization.industry)
            localStorage.organization_product_list = this.organization.products_services
            localStorage.organization_product_employee_count = this.organization.employee_count
        }
    }
    syncStorageProgramDetails() {
        if (this.programdetails) {
            localStorage.program_externship_time_first = this.programdetails.externship.prefered_date.primary
            localStorage.program_externship_time_second = this.programdetails.externship.prefered_date.secondary
            localStorage.program_externship_time_third = this.programdetails.externship.prefered_date.final
            localStorage.program_externship_options = tableToDecimal(this.PROGRAMDETAILS_EXTERNSHIP_CONTRIBUTION_OPTIONS, this.programdetails.externship.contribution)
            localStorage.program_externship_options_other = findOther(this.PROGRAMDETAILS_EXTERNSHIP_CONTRIBUTION_OPTIONS, this.programdetails.externship.contribution)
        }
    }
    syncStorageProject() {
        if (this.programdetails) {
            localStorage.projects_min = this.programdetails.project.capacity.minimum
            localStorage.projects_max = this.programdetails.project.capacity.maximum
            localStorage.projects_engagement = tableToDecimal(this.PROGRAMDETAILS_PROJECT_ENGAGEMENT_TYPE_OPTIONS, [
                this.programdetails.project.engagement.type
            ])
            localStorage.projects_engagement_2 = tableToDecimal(this.PROGRAMDETAILS_PROJECT_ENGAGEMENT_RADIUS_OPTIONS, [
                this.programdetails.project.engagement.radius
            ])
            // localStorage.projects_requests = this.programdetails.project.
            // localStorage.projects_missions = this.programdetails.project.
            // localStorage.projects_specifications = this.programdetails.project.
        }
    }
    syncStorageInternship(){
        if(this.internship){
            localStorage.internships_project = tableToDecimal(this.INTERNSHIP_PROJECT_TYPE,this.internship.project)
            localStorage.internships_project_other = findOther(this.INTERNSHIP_PROJECT_TYPE,this.internship.project)
            localStorage.internships_hiring_adult = this.internship.hiring_adult
            // localStorage.internships_travel
            localStorage.internships_education = tableToDecimal(this.INTERNSHIP_EDUCATION_OPTIONS,this.internship.education_level)
            localStorage.internships_education_other = findOther(this.INTERNSHIP_EDUCATION_OPTIONS,this.internship.education_level)
            localStorage.internships_talent = tableToDecimal(this.INTERNSHIP_TALENT_OPTIONS, this.internship.talent)
            localStorage.internships_days_week =this.internship.days_week
            localStorage.internships_hours_day= this.internship.hours_day
            localStorage.internships_employer_of_record = tableToDecimal(this.INTERNSHIP_EMPLOYER_OF_RECORD_OPTIONS, [
                this.internship.employer_of_record
            ])
            localStorage.internships_compensation = tableToDecimal(this.INTERNSHIP_COMPENSATION_OPTIONS,this.internship.compensation)
            localStorage.internships_budget_min = this.internship.budget_min
            localStorage.internships_budget_max = this.internship.budget_max
            localStorage.internships_interview_option1 = this.internship.interview_1
            localStorage.internships_interview_option2 = this.internship.interview_2
            localStorage.internships_interview_option3 = this.internship.interview_3
            localStorage.internships_employment = this.internship.employment
            localStorage.internships_position = tableToDecimal(this.INTERNSHIP_POSITION_TYPE_OPTIONS,this.internship.position_type)
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
    get Name(){
        return `${this.citizen.first_name} ${this.citizen.last_name}`
    }
    created(){
        this.$set(this.citizen,'first_name',localStorage.first_name?localStorage.first_name:"Your")
        this.$set(this.citizen,'last_name',localStorage.last_name?localStorage.last_name:"Name")
    }
}
</script>