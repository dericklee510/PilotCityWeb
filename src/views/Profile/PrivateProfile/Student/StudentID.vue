<template>
  <v-row
    justify="center"
    class="mt-12"
  >
    <img
      id="studentid__icon"
      src="@/assets/citizen-id.png"
    >

    <v-col
      id="studentid__containtop"
      cols="8"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto studentid__title"
      >
        YOUR STUDENT ID
      </v-row>
    </v-col>

    <v-col
      id="studentid__containbottom"
      cols="8"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto studentid__description"
      >
        Confirm your information
      </v-row>

      <!-- GENERAL INFORMATION -->
      <v-row
        justify="center"
        class="mr-auto ml-auto mt-5 mb-5 studentid__categorytitle"
      >
        General
      </v-row>
      <!-- FIRST NAME -->
      <v-row
        justify="center"
        class
      >
        <v-col cols="7">
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              sm="7"
            >
              <v-text-field
                v-model="firstName"
                label="First Name"
                outlined
              />
            </v-col>
          </v-row>
          <!-- LAST NAME -->
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              sm="7"
            >
              <v-text-field
                v-model="lastName"
                label="Last Name"
                outlined
              />
            </v-col>
          </v-row>
          <!-- CITIZEN TYPE -->
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-select
                :items="citizentype"
                label="Who are you?"
                outlined
              />
            </v-col>
          </v-row>
          <!-- GRADE LEVEL -->
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-select
                :items="gradelevel"
                label="Grade Level"
                outlined
              />
            </v-col>
          </v-row>

          <!-- SCHOOL INFORMATION -->
          <v-row
            justify="center"
            class="mr-auto ml-auto mt-5 mb-5 studentid__categorytitle"
          >
            School
          </v-row>

          <!-- TEACHER -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-autocomplete
                v-model="value"
                :items="teacher"
                dense
                filled
                label="Teacher"
              />
            </v-col>
          </v-row>

          <!-- SCHOOL NAME -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-autocomplete
                v-model="value"
                :items="schoolname"
                dense
                filled
                label="School Name"
              />
            </v-col>
          </v-row>
          <!-- SCHOOL DISTRICT -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-autocomplete
                v-model="value"
                :items="schooldistrict"
                dense
                filled
                label="School District"
              />
            </v-col>
          </v-row>

          <!-- PERSONAL INFORMATION -->
          <v-row
            justify="center"
            class="mr-auto ml-auto mt-5 mb-5 studentid__categorytitle"
          >
            Personal
          </v-row>

          <!-- BIRTHDATE -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <template>
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="date"
                      label="Birthdate"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    />
                  </template>
                  <v-date-picker
                    ref="picker"
                    v-model="date"
                    :max="new Date().toISOString().substr(0, 10)"
                    min="1950-01-01"
                    @change="save"
                  />
                </v-menu>
              </template>
            </v-col>
          </v-row>

          <!-- SUPERGENDER -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-select
                :items="supergender"
                label="Supergender"
                outlined
              />
            </v-col>
          </v-row>
          <!-- ETHNICITY & CULTURE -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-select
                :items="ethnicity"
                label="Ethnicity & Culture"
                outlined
              />
            </v-col>
          </v-row>

          <!-- GUARDIAN INFORMATION -->
          <v-row
            justify="center"
            class="mr-auto ml-auto mt-5 mb-5 studentid__categorytitle"
          >
            Guardian
          </v-row>

          <!-- GUARDIAN FIRST NAME -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              sm="7"
            >
              <v-text-field
                v-model="guardianfirstName"
                label="Guardian First Name"
                outlined
              />
            </v-col>
          </v-row>
          <!-- GUARDIAN LAST NAME -->
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              sm="7"
            >
              <v-text-field
                v-model="guardianlastName"
                label="Guardian Last Name"
                outlined
              />
            </v-col>
          </v-row>

          <!-- GUARDIAN RELATIONSHIP -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-select
                :items="guardianrelationship"
                label="Relationship to Guardian"
                outlined
              />
            </v-col>
          </v-row>

          <!-- PRIMARY HOME LANGUAGE -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              class="d-flex"
              cols="12"
              sm="7"
            >
              <v-autocomplete
                v-model="value"
                :items="homelanguage"
                dense
                filled
                label="Primary Home Language"
              />
            </v-col>
          </v-row>

          <!-- STREET ADDRESS -->

          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              sm="7"
            >
              <v-text-field
                v-model="streetaddress"
                label="Street Address"
                outlined
              />
            </v-col>
          </v-row>
          <!-- CITY -->
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              sm="7"
            >
              <v-text-field
                v-model="city"
                label="City"
                outlined
              />
            </v-col>
          </v-row>

          <!-- STATE -->
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              sm="7"
            >
              <v-text-field
                v-model="state"
                label="State"
                outlined
              />
            </v-col>
          </v-row>

          <!-- ZIPCODE -->
          <v-row
            no-gutters
            justify="center"
          >
            <v-col
              cols="12"
              sm="7"
            >
              <v-text-field
                v-model="zipcode"
                label="Zipcode"
                outlined
              />
            </v-col>
          </v-row>

          <!-- PROGRAM INFORMATION -->
          <v-row
            justify="center"
            class="mr-auto ml-auto mt-5 mb-5 studentid__categorytitle"
          >
            Program
          </v-row>

          <!-- END -->
        </v-col>
      </v-row>

      <v-col
        class="mr-auto ml-auto"
        cols="5"
      >
        <button
          class="studentid__button mb-10 mt-10"
          @click="() => {setLoader(()=>{validate().then(val => {if(val)submit()} )})}"
        >
          SAVE
        </button>
      </v-col>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mask } from "vue-the-mask";
@Component({
  data: () => ({
    citizentype: ["Student", "Teacher", "Employer"],
    gradelevel: [
      "12th Grade",
      "11th Grade",
      "10th Grade",
      "9th Grade",
      "8th Grade",
      "7th Grade",
      "6th Grade"
    ],

    teacher: [
      "Alvin Burns",
      "Andrew Doolittle",
      "Anthony Anderson",
      "Bear Keithley",
      "Brian Hsieh",
      "Chloe Erskine",
      "Chris Rose",
      "Christina Charlton",
      "Darryl Starr",
      "David Gurley",
      "David House",
      "Deborah Jackson",
      "Deborah Reinerio",
      "Diane Johnson",
      "Ervin Anderson",
      "Gerard Lobo",
      "Hunter Lower",
      "Jasmine Thomas",
      "Jason Ebner",
      "Jessica Govoni",
      "Joel Bruxvoort",
      "John Lavine",
      "Joshua Moran",
      "Juanita Abundiz Henderson",
      "Kay Zimmerman",
      "Kevin Buckley",
      "Kristin Berbawy",
      "Lance Brookner",
      "Larry Lavendel",
      "Latiya Pryor-Knell",
      "Laura Jagroop",
      "Louie Alvidrez",
      "Marc Gordon",
      "Meghan Johnston",
      "Michael Simon",
      "Nancy Read",
      "Poitier Stringer",
      "Rick Charles",
      "Romany Corella",
      "Selina Mandel",
      "Sherman Moore",
      "Steve Walker",
      "Taylor Heinz",
      "Tom Gilbert",
      "Tommie Ebanez",
      "Tuyet-Linh Phan"
    ],

    schoolname: [
      "Alameda High School",
      "American High School",
      "Antioch High School",
      "Arroyo High School",
      "Basis Independent Fremont",
      "Berkeley Technology Academy",
      "Brenkwitz High School",
      "Clayton Valley Charter High School",
      "Code For Fun",
      "Dewey Academy",
      "Emery Secondary School",
      "Hayward High School",
      "Irvington High School",
      "Island High School",
      "Jefferson High School",
      "Mount Eden High School",
      "Oakland High School",
      "Oakland Military Institute",
      "Royal Sunset High School",
      "San Leandro High School",
      "Skyline High School",
      "Terra Nova High School",
      "Washington High School",
      "Westmoor High School"
    ],
    schooldistrict: [
      "Alameda Unified School District",
      "Antioch Unified School District",
      "Berkeley Unified School District",
      "Clayton Valley Charter High School",
      "Code For Fun",
      "Emery Unified School District",
      "Fremont Unified School District",
      "Hayward Unified School District",
      "Independent",
      "Jefferson Union High School District",
      "Oakland Unified School District",
      "San Leandro Unified School District",
      "San Lorenzo Unified School District"
    ],

    supergender: [
      "Female",
      "Male",
      "Transgender Female",
      "Transgender Male",
      "Gender Variant / Non-Conforming",
      "Not Listed",
      "Prefer Not to Answer"
    ],

    ethnicity: [
      "American Indian or Alaska Native",
      "Asian",
      "Black or African American",
      "Hispanic",
      "Pacific Islander or Native Hawaiian",
      "White / Caucasian"
    ],

    guardianrelationship: [
      "Mother",
      "Father",
      "Sister",
      "Brother",
      "Grandmother",
      "Grandfather",
      "Aunt",
      "Uncle",
      "Friend",
      "None"
    ],
    homelanguage: [
      "Arabic",
      "Bengali",
      "Chinese",
      "English",
      "French",
      "German",
      "Hindi",
      "Italian",
      "Japanese",
      "Javanese",
      "Korean",
      "Lahnda",
      "Marathi",
      "Portuguese",
      "Russian",
      "Spanish",
      "Tagalog",
      "Tamil",
      "Telugu",
      "Turkish",
      "Urdu",
      "Vietnamese",
      "None of the above"
    ]

    // END
  }),
    watch: {
      menu (val) {
        val && setTimeout(() => (this.$refs.picker.activePicker = 'YEAR'))
      },
    },
    methods: {
      save (date) {
        this.$refs.menu.save(date)
      },
    },
})
export default class StudentID extends Vue {
  // you can still put things here
}
</script>


