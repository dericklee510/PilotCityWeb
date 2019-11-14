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
                      <pcSelect
                        :dark-mode="true"
                        title="TITLE"
                        :items="['Mr.', 'Mrs.', 'Ms.', 'no preference']" 
                        placeholder="How may we address you?"
                      />
                      <pcTextfield
                        :dark-mode="true"
                        title="FIRST NAME"
                        placeholder="First Name"
                      />
                      <pcTextfield
                        :dark-mode="true"
                        title="LAST NAME"
                        placeholder="Last Name"
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
                  lg="2"
                >
                  <v-list-item-title
                    style="max-width: fit-content"
                    v-text="'School'"
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
                        title="SCHOOL DISTRICT"
                        placeholder="Select school district"
                      />
                      <pcSelect
                        :dark-mode="true"
                        title="SCHOOL NAME"
                        placeholder="Select school name"
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
                    v-text="'Classroom'"
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
                      <pcTextfield
                        :dark-mode="true"
                        title="ROOM"
                        placeholder="Enter your room number"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col
                      cols="12"
                      md="3"
                    >
                      <pcSelect
                        :dark-mode="true"
                        title="SCHOOL YEAR"
                        placeholder="Select School Year"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      md="5"
                    >
                      <pcTextfield
                        :dark-mode="true"
                        title="CLASS NAME"
                        placeholder="Enter class name"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      md="2"
                    >
                      <pcSelect
                        :dark-mode="true"
                        title="SEMESTER"
                        placeholder="Select semester(s)"
                        :items="['Fall', 'Spring', 'All-Year', 'Summer', 'Winter']"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      md="2"
                    >
                      <!-- create multi-select component -->
                      <pcSelect
                        :dark-mode="true"
                        title="GRADES"
                        :multiselect="true"
                        placeholder="Select class grade level"
                        :items="['9','10','11','12']"
                      />
                    </v-col>
                    <v-col
                      cols="12"
                      md="2"
                    >
                      <pcTextField
                        :dark-mode="true"
                        title="CLASS SIZE"
                        placeholder="Enter class size"
                      />
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col cols="12">
                      <v-btn block>
                        +
                      </v-btn>
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
                    v-text="'Schedule'"
                  />
                </v-col>
              </v-row>
            </template>
            <v-list-item>
              <v-list-item-content>
                <v-row>
                  <v-col
                    cols="12"
                    md="2"
                  >
                    <pcSelect
                      :dark-mode="true"
                      :items="['prep','0','1','2','3','lunch','4','5','6','7','8']"
                      title="PERIOD"
                      placeholder="Class period"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                  >
                    <pcSelect
                      :dark-mode="true"
                      title="COURSE"
                      placeholder="Which Course"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="3"
                  >
                    <pcSelect
                      :dark-mode="true"
                      :items="['M','T','W','Th','F','Sa','S']"
                      title="SCHEDULE"
                      :multiselect="true"
                      placeholder="What days"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                  >
                    <pcSelect
                      :dark-mode="true"
                      :items="[]"
                      title="START TIME"
                      placeholder="Start Time"
                    />
                  </v-col>
                  <v-col
                    cols="12"
                    md="2"
                  >
                    <pcSelect
                      :dark-mode="true"
                      :items="[]"
                      title="END TIME"
                      placeholder="End Time"
                    />
                  </v-col>
                </v-row>
                <v-row>
                  <v-col cols="12">
                    <v-btn block>
                      +
                    </v-btn>
                  </v-col>
                </v-row>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </v-list>
      </v-container>
    </v-container>
  </v-card>
</template>