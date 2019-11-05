<template>
  <v-container
    fluid
    class="pc-profile-page"
  >
    <v-row
      justify="end"
    >
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
              <label
                class="profile__switch profile__switch--active"
              >
                public
              </label>
            </template>
            <template v-slot:prepend>
              <label
                class="profile__switch profile__switch--inactive"
              >
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
                            <h2
                              class="text-capitalize pr-5 pl-5"
                            >
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
                            :dark-mode="true"
                            title="FIRST NAME"
                            placeholder="First Name"
                          />
                          <pcTextfield
                            :dark-mode="true"
                            title="LAST NAME"
                            placeholder="Last Name"
                          />
                          <pcTextfield
                            :dark-mode="true"
                            title="POSITION"
                            placeholder="Role"
                          />
                          <pcTextfield
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
                      lg="2"
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
                          <pcTextfield
                            :dark-mode="true"
                            title="LOCATION"
                            placeholder="Enter Company Address"
                          />
                          <v-checkbox label="Agriculture" />
                          <pcTextfield
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
                        v-text="'PROGRAM DETAILS'"
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
    </v-container>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue"
import PCselect from "@/components/inputs/PCselect.vue"
import PCtextfield from "@/components/inputs/PCtextfield.vue"
import Component from "vue-class-component"

@Component({
    components:{
        pcSelect: PCselect,
        pcTextfield: PCtextfield
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
    
    private changeCitizenType(intype: string): void {
        this.citizenType = intype
    }
}
</script>
