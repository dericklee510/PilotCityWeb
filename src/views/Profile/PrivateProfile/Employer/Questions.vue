<template>
  <v-card class="pc-container pc-profile-page--dark">
    <!-- probably going to use Doka here.... -->
    <img
      id="profileBanner"
      src="@/assets/PC_user_banner.png"
      alt
    >
    <v-container>
      <v-row>
        <v-col id="profileContainer">
          <profile-upload v-model="citizenBase.profilePicture" />
          <!-- <div class="pc-profile-picture pc-profile-picture--page pc-vh-center" /> -->
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
                          :id="CITIZENSTYLES[citizenBase.citizenType]"
                          v-bind="attrs"
                          rounded
                          v-on="on"
                        >
                          <h2 class="text-capitalize pr-5 pl-5">
                            {{ citizenBase.citizenType }}
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
                          <pcSelect
                            v-model="citizenBase.honorific"
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
                            v-model="citizen.first_name"
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
                            v-model="citizenBase.lastName"
                            :value.sync="citizen.last_name"
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
                            v-model="citizen.organization"
                            :error-messages="errors"
                            :dark-mode="true"
                            title="ORGANIZATION"
                            placeholder="Company Name"
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
                      </v-col>
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
                      <v-col>
                        <ValidationProvider
                          v-slot="{errors}"
                          rules="required"
                        >
                          <v-col cols="12">
                            <v-row>
                              <h4
                                id="text-uppercase"
                                style="color:#C7C8CA"
                              >
                                WHAT TYPE OF HIGH SCHOOL TALENT WOULD YOU LIKE TO HIRE?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <pcCheckbox
                                v-model="internship.talent"
                                :options="INTERNSHIP_TALENT_OPTIONS"
                                :other="false"
                              />
                            </v-col>
                          </v-col>
                        </ValidationProvider>
                        <ValidationProvider
                          v-slot="{errors}"
                          rules="required"
                        >
                          <v-col cols="12">
                            <v-col cols="12">
                              <v-row>
                                <h4
                                  style="color:#C7C8CA"
                                  class="text-uppercase"
                                >
                                  Industry
                                </h4>
                                <h4 style="color:#EA6763">
                                  {{ errors?'*':'' }}
                                </h4>
                              </v-row>
                            </v-col>
                            <v-col
                              cols="12"
                              md="8"
                              lg="6"
                              xl="5"
                            >
                              <pcCheckbox
                                v-model="organization.industry"
                                :options="ORGANIZATION_INDUSTRY_OPTIONS"
                                :other="true"
                              />
                            </v-col>
                          </v-col>
                        </ValidationProvider>
                        <ValidationProvider
                          v-slot="{errors}"
                          rules="required"
                        >
                          <v-col
                            cols="12"
                            md="8"
                            lg="6"
                            xl="5"
                          >
                            <v-col cols="12">
                              <v-row>
                                <h4
                                  style="color:#C7C8CA"
                                  class="text-uppercase"
                                >
                                  LIST YOUR PRODUCT / SERVICE
                                </h4>
                                <h4 style="color:#EA6763">
                                  {{ errors?'*':'' }}
                                </h4>
                              </v-row>
                            </v-col>
                            <pcMultiInput
                              v-model="organization.products_services"
                              placeholder="Enter your product or Service"
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
              <v-list-item-content>
                <v-col cols="12">
                  <v-row justify="start">
                    <v-col cols="12">
                      <h3
                        style="color:#AE90B0"
                        class="item-subheaders"
                      >
                        Externship
                      </h3>
                    </v-col>
                    <v-col
                      cols="12"
                      style="color:#C7C8CA"
                    >
                      <v-col>
                        <v-col cols="12">
                          <h4
                            style="color:#C7C8CA"
                            class="text-uppercase"
                          >
                            SELECT THREE DATE OPTIONS FOR YOUR FULL DAY TEACHER EXTERNSHIP DAY AT YOUR WORKPLACE BETWEEN JAN 1 - FEB 1
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
                              v-slot="{errors, failedRules}"
                              :rules="{ required:true,regex: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/ }"
                            >
                              <pcTextfield
                                v-model="programdetails.externship.prefered_date.primary"
                                v-mask="'2020-##-##'"
                                :error-messages="failedRules.regex?'Not a valid date':errors"
                                :dark-mode="true"
                                placeholder="YYYY-MM-DD"
                                title="First Choice"
                                type="tel"
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
                              v-slot="{errors, failedRules}"
                              :rules="{ required:true,regex: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/ }"
                            >
                              <pcTextfield
                                v-model="programdetails.externship.prefered_date.secondary"
                                v-mask="'2020-##-##'"
                                :error-messages="failedRules.regex?'Not a valid date':errors"
                                :dark-mode="true"
                                placeholder="YYYY-MM-DD"
                                type="tel"
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
                              v-slot="{errors, failedRules}"
                              :rules="{ required:true,regex: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/ }"
                            >
                              <pcTextfield
                                v-model="programdetails.externship.prefered_date.final"
                                v-mask="'2020-##-##'"
                                :error-messages="failedRules.regex?'Not a valid date':errors"
                                :dark-mode="true"
                                placeholder="YYYY-MM-DD"
                                type="tel"
                                title="Third Choice"
                              />
                            </ValidationProvider>
                          </v-col>
                        </v-col>
                      </v-col>
                      <v-col cols="12">
                        <ValidationProvider
                          v-slot="{errors}"
                          rules="required"
                        >
                          <v-col cols="12">
                            <v-col cols="12">
                              <v-row>
                                <h4
                                  style="color:#C7C8CA"
                                  class="text-uppercase"
                                >
                                  WILL YOU BE ABLE TO PROVIDE CLASSROOMS ACCESS TO YOUR PRODUCT OR SERVICE WITH ANY OF THE FOLLOWING?
                                </h4>
                                <h4 style="color:#EA6763">
                                  {{ errors?'*':'' }}
                                </h4>
                              </v-row>
                            </v-col>

                            <v-col cols="12">
                              <v-col cols="12">
                                <pcCheckbox
                                  v-model="programdetails.externship.contribution"
                                  :options="PROGRAMDETAILS_EXTERNSHIP_CONTRIBUTION_OPTIONS"
                                  :other="true"
                                />
                              </v-col>
                            </v-col>
                          </v-col>
                        </ValidationProvider>
                      </v-col>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <h3
                        style="color:#AE90B0"
                        class="item-subheaders"
                      >
                        Project
                      </h3>
                    </v-col>
                    <v-col cols="12">
                      <v-col cols="12">
                        <h4
                          id="text-uppercase"
                          style="color:#c7c8ca"
                        >
                          WHAT IS THE MINIMUM AND MAXIMUM NUMBER OF CLASSROOMS YOU’D LIKE IN YOUR PROGRAM?
                        </h4>
                      </v-col>
                      <v-col cols="12">
                        <v-col cols="12">
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
                                  title
                                  placeholder="Select Minimum"
                                />
                              </ValidationProvider>
                            </v-col>
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <ValidationProvider
                                v-slot="{errors}"
                                rules="required"
                              >
                                <pcSelect
                                  v-model="programdetails.project.capacity.maximum"
                                  :dark-mode="true"
                                  :items="CLASSROOM_COUNT"
                                  title
                                  placeholder="Select Maximum"
                                />
                              </ValidationProvider>
                            </v-col>
                          </v-row>
                        </v-col>
                      </v-col>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                How do you prefer to engage with the classroom?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <v-radio-group
                                v-model="programdetails.project.engagement.type"
                                class="pc-radio"
                              >
                                <v-radio
                                  v-for="(eng, index) in PROGRAMDETAILS_PROJECT_ENGAGEMENT_TYPE_OPTIONS "
                                  :key="eng+index"
                                  :label="eng"
                                  :value="eng"
                                />
                              </v-radio-group>
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                How far would you travel to engage with a classroom in person?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col>
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <v-radio-group
                                v-model="programdetails.project.engagement.radius"
                                class="pc-radio"
                              >
                                <v-radio
                                  v-for="(rad, index) in PROGRAMDETAILS_PROJECT_ENGAGEMENT_RADIUS_OPTIONS "
                                  :key="rad+index"
                                  :value="rad"
                                  :label="rad"
                                />
                              </v-radio-group>
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <h3
                        style="color:#AE90B0"
                        class="item-subheaders"
                      >
                        Internships
                      </h3>
                    </v-col>
                    <v-col cols="12">
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col>
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                What would be the primary focus of their internship program
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <pcCheckbox
                              v-model="internship.project"
                              :options="INTERNSHIP_PROJECT_TYPE"
                              :other="true"
                            />
                          </v-col>
                        </v-col>
                      </ValidationProvider>

                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col>
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                Do you require hiring adults 18 years or older?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <v-radio-group
                                v-model="internship.hiring_adult"
                                class="pc-radio"
                              >
                                <v-radio
                                  label="Yes"
                                  value="yes"
                                />
                                <v-radio
                                  label="No"
                                  value="no"
                                />
                              </v-radio-group>
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col>
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                Would you need the student(s) to have either a drivers license or a vehicle?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <v-radio-group
                                v-model="internship.travel"
                                class="pc-radio"
                              >
                                <v-radio
                                  v-for="option in ΙΝΤΕRN_TRAVEL_OPTIONS"
                                  :key="option"
                                  :label="option"
                                  :value="option"
                                />
                              </v-radio-group>
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                style="color:#C7C8CA"
                                class="text-uppercase"
                              >
                                What level of education do you typically hire from?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <pcCheckbox
                                v-model="internship.education_level"
                                :other="false"
                                :options="INTERNSHIP_EDUCATION_OPTIONS"
                              />
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                id="text-uppercase"
                                style="color:#C7C8CA"
                              >
                                WHAT TYPE OF HIGH SCHOOL TALENT WOULD YOU LIKE TO HIRE?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <pcCheckbox
                                v-model="internship.talent"
                                :options="INTERNSHIP_TALENT_OPTIONS"
                                :other="false"
                              />
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                class="text-uppercase"
                                style="color:#C7C8CA"
                              >
                                HOW MANY DAYS PER WEEK WILL YOU BE ABLE TO HOST INTERNS & FELLOWS BETWEEN JUNE 29 - AUGUST 7?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <v-radio-group
                                v-model="internship.days_week"
                                class="pc-radio"
                              >
                                <v-radio
                                  v-for="(sched, index) in HOST_SCHED"
                                  :key="sched+index"
                                  :label="sched"
                                  :value="(HOST_SCHED.length - 1) - index"
                                />
                              </v-radio-group>
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                class="text-uppercase"
                                style="color:#C7C8CA"
                              >
                                HOW MANY HOURS PER DAY WILL YOU BE ABLE TO HOST INTERNS & FELLOWS BETWEEN JUNE 29 - AUGUST 7?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <v-radio-group
                                v-model="internship.hours_day"
                                class="pc-radio"
                              >
                                <v-radio
                                  v-for="(freq, index) in HOST_FREQ"
                                  :key="freq+index"
                                  :label="freq"
                                  :value="(HOST_FREQ.length-1) - index"
                                />
                              </v-radio-group>
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>

                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                class="text-uppercase"
                                style="color:#C7C8CA"
                              >
                                WHO DO YOU PREFER TO BE THE EMPLOYER-OF-RECORD?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <v-radio-group
                                v-model="internship.employer_of_record"
                                class="pc-radio"
                              >
                                <v-radio
                                  v-for="(option, index) in EOR"
                                  :key="option+index"
                                  :label="option"
                                  :value="option"
                                />
                              </v-radio-group>
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider
                        v-slot="{errors}"
                        rules="required"
                      >
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                class="text-uppercase"
                                style="color:#C7C8CA"
                              >
                                WHAT COMPENSATION TYPES WOULD YOU CONSIDER FOR OUR INTERNSHIP PROGRAM?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <pcCheckbox
                                v-model="internship.compensation"
                                :options="INTERN_COMP"
                                :other="false"
                              />
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <v-col cols="12">
                        <h4
                          class="text-uppercase"
                          style="color:#C7C8CA"
                        >
                          IF YOU HAVE AN INTERNSHIP BUDGET IN MIND FOR OUR PROGRAM, ENTER THE MININMUM AND MAXIMUM AMOUNT
                        </h4>
                      </v-col>
                      <v-col cols="12">
                        <v-col cols="12">
                          <v-row>
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <ValidationProvider
                                v-slot="{errors}"
                                rules="required|min_value:0"
                              >
                                <pcTextfield
                                  v-model="internship.budget_min"
                                  :error-messages="errors"
                                  :dark-mode="true"
                                  placeholder="Minimum"
                                  title
                                />
                              </ValidationProvider>
                            </v-col>
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <ValidationProvider
                                v-slot="{errors}"
                                rules="required|min_value:0"
                              >
                                <pcTextfield
                                  v-model="internship.budget_max"
                                  :error-messages="errors"
                                  :dark-mode="true"
                                  placeholder="Maximum"
                                  title
                                />
                              </ValidationProvider>
                            </v-col>
                          </v-row>
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
                          md="8"
                          lg="6"
                          xl="5"
                        >
                          <ValidationProvider
                            v-slot="{errors, failedRules}"
                            :rules="{ required:true,regex: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/ }"
                          >
                            <pcTextfield
                              v-model="internship.interview_1"
                              v-mask="'2020-##-##'"
                              :error-messages="failedRules.regex?'Not a valid date':errors"
                              :dark-mode="true"
                              placeholder="YYYY-MM-DD"
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
                            v-slot="{errors, failedRules}"
                            :rules="{ required:true,regex: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/ }"
                          >
                            <pcTextfield
                              v-model="internship.interview_2"
                              v-mask="'2020-##-##'"
                              :error-messages="failedRules.regex?'Not a valid date':errors"
                              :dark-mode="true"
                              placeholder="YYYY-MM-DD"
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
                            v-slot="{errors, failedRules}"
                            :rules="{ required:true,regex: /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/ }"
                          >
                            <pcTextfield
                              v-model="internship.interview_3"
                              v-mask="'2020-##-##'"
                              :error-messages="failedRules.regex?'Not a valid date':errors"
                              :dark-mode="true"
                              placeholder="YYYY-MM-DD"
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
                          <v-col cols="12">
                            <v-row>
                              <h4
                                class="text-uppercase"
                                style="color:#C7C8CA"
                              >
                                IF SATISFIED AFTER SUMMER PROGRAM, WILL YOU CONSIDER CONTINUED EMPLOYMENT OF INTERN OR FELLOW?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="6"
                            >
                              <v-radio-group
                                v-model="internship.employment"
                                class="pc-radio"
                              >
                                <v-radio
                                  label="Yes"
                                  value="yes"
                                />
                                <v-radio
                                  label="No"
                                  value="no"
                                />
                              </v-radio-group>
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                      <ValidationProvider v-slot="{errors}">
                        <v-col cols="12">
                          <v-col cols="12">
                            <v-row>
                              <h4
                                class="text-uppercase"
                                style="color:#C7C8CA"
                              >
                                WHAT POSITIONS WOULD YOU HAVE AVAILABLE FOR CONTINUED EMPLOYMENT OF IN-SCHOOL OR GRADUATED HIGH SCHOOL TALENT?
                              </h4>
                              <h4 style="color:#EA6763">
                                {{ errors?'*':'' }}
                              </h4>
                            </v-row>
                          </v-col>
                          <v-col cols="12">
                            <v-col
                              cols="12"
                              md="4"
                            >
                              <pcCheckbox
                                v-model="internship.position_type"
                                :options="INTERNSHIP_POSITION_TYPE_OPTIONS"
                                :other="false"
                              />
                            </v-col>
                          </v-col>
                        </v-col>
                      </ValidationProvider>
                    </v-col>
                  </v-row>
                </v-col>

                <v-row justify="start">
                  <v-col
                    cols="12"
                    md="4"
                    lg="2"
                  >
                    <v-btn
                      id="save_profile-button"
                      block
                      background-color="transparent"
                      text
                      :loading="loading"
                      :disabled="loading"
                      class="mb-6 pc-button"
                      @click="syncStorage"
                    >
                      <h3 class="text-uppercase">
                        save
                      </h3>
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </ValidationObserver>
      </v-container>
    </v-container>
  </v-card>
</template>

<script lang="ts">
import Component from "vue-class-component";
import { ValidationProvider, ValidationObserver, extend } from "vee-validate";
import { mask } from "vue-the-mask";
import { min_value } from "vee-validate/dist/rules";
import Vue from "vue";
import {
  PCselect,
  PCtextfield,
  PCcheckbox,
  PCmultiinput
} from "@/components/inputs";
import autoComplete from "@/components/GoogleMaps/Autocomplete/AutoComplete.vue";
import * as Employer from "./types";
import { ObserverInstance } from "@/utilities/validation";
import { tableToDecimal, findOther } from "@/store/Graphql";
import { CONST } from "./const";
import { ProfileUpload } from "@/components/Doka";
import { GraphqlStore, AuthStore } from "@/store";
import { citizenBaseToProfile } from "./helpers";
import { IPublicCitizenProfile } from "../../../../store/Graphql/types";
import { EmployerFetch } from "./gql";
import { applyMixins } from "../../../../utilities/classes";
import { ICitizenBase } from "../../types";

extend("min_value", {
  ...min_value,
  message: "This field cannot be less than {min}"
});

const app = CONST.addConst(Vue);

@Component({
  components: {
    pcSelect: PCselect,
    pcTextfield: PCtextfield,
    autoComplete,
    ValidationProvider,
    ValidationObserver,
    "profile-upload": ProfileUpload,
    pcMultiInput: PCmultiinput,
    pcCheckbox: PCcheckbox
  },
  directives: {
    mask
  }
})
export default class EmployerProfile extends app {
  profile_img_url: string = "";
  loading:boolean = false
  private CITIZENSTYLES = {
    Teacher: "citizen-id__type--teacher",
    Employer: "citizen-id__type--employer",
    Student: "citizen-id__type--student"
  };

  private AVAILABLETYPES: string[] = ["Teacher", "Employer", "Student"];

  private ispublic: boolean = true;

  public citizenBase: ICitizenBase = {
    honorific: "",
    firstName: "",
    lastName: "",
    profilePicture: "",
    citizenType: ""
  };

  public citizen: Employer.Citizen = {} as Employer.Citizen;

  public organization: Employer.Organization = {
    industry: [] as string[],
    products_services: [] as string[]
  } as Employer.Organization;

  public programdetails: Employer.ProgramDetails = {
    externship: { prefered_date: {}, contribution: [] as string[] },
    project: { capacity: {}, engagement: {} }
  } as Employer.ProgramDetails;

  public internship: Employer.Internship = {
    talent: [] as string[],
    project: [] as string[],
    compensation: [] as string[],
    position_type: [] as string[]
  } as Employer.Internship;

  public syncStorageCitizen() {
    localStorage.citizen_first_name = this.citizen.first_name;
    localStorage.citizen_last_name = this.citizen.last_name;
    localStorage.citizen_position = this.citizen.position;
    localStorage.citizen_organization = this.citizen.organization;
  }

  private addOption(from: string, to: string[]): void {
    to.push(from);
  }

  getUpdate() {
    if (!AuthStore.user) throw "Not logged in";
    GraphqlStore.sdk.publicProfileFetch({ user_id: AuthStore.user.uid });
  }
  async syncStorage() {
    this.loading = true;
    try {
      if (await (this.$refs.observer as ObserverInstance).validate()) {
        let query = new Employer.EmployerQueryForm({
          Base: this.citizenBase,
          Citizen: this.citizen,
          Organization: this.organization,
          ProgramDetails: this.programdetails,
          Internship: this.internship
        });
        await query.init();
        await query.submitQuery();
      }
    // eslint-disable-next-line no-empty
    } catch (err) {
    }
    this.loading = false;
  }

  get Name() {
    return `${this.citizen.first_name} ${this.citizen.last_name}`;
  }
  beforeCreate() {}
  async created() {
    this.citizenBase.citizenType = this.$route.params.citizenType;

    let arr: string[] = [];
  }
}
</script>
