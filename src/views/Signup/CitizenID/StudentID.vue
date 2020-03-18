<template>
  <div>
    <!-- SCHOOL INFORMATION -->

    <v-row
      justify="center"
      class="mr-auto ml-auto mt-5 mb-5 studentid__categorytitle"
    >
      School
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-select
            v-model="gradeLevel"
            :error-messages="errors"
            :items="gradelevel"
            label="Grade Level"
            outlined
          />
        </ValidationProvider>
      </v-col>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-autocomplete
            v-model="teacher"
            :error-messages="errors"
            :items="teacherOptions"
            dense
            filled
            label="Teacher"
          />
        </ValidationProvider>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-autocomplete
            v-model="schoolName"
            :error-messages="errors"
            :items="schoolname"
            dense
            filled
            label="School Name"
          />
        </ValidationProvider>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-autocomplete
            v-model="schoolDistrict"
            :error-messages="errors"
            :items="schooldistrict"
            dense
            filled
            label="School District"
          />
        </ValidationProvider>
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
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="290px"
          >
            <template v-slot:activator="{ on }">
              <ValidationProvider
                v-slot="{errors}"
                slim
                rules="required"
              >
                <v-text-field
                  v-model="date"
                  :error-messages="errors"
                  label="Birthdate"
                  prepend-icon="event"
                  readonly
                  v-on="on"
                />
              </ValidationProvider>
            </template>
            <ValidationProvider
              v-slot="{errors}"
              slim
              rules="required"
            >
              <v-date-picker
                ref="picker"
                v-model="date"
                :error-messages="errors"
                :max="new Date().toISOString().substr(0, 10)"
                min="1950-01-01"
                @change="save"
              />
            </ValidationProvider>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-select
            v-model="superGender"
            :error-messages="errors"
            :items="supergender"
            label="Supergender"
            outlined
          />
        </ValidationProvider>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-select
            v-model="ethnicity"
            :error-messages="errors"
            :items="ethnicityOptions"
            label="Ethnicity & Culture"
            outlined
            multiple
          />
        </ValidationProvider>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-text-field
            v-model="guardianFirstName"
            :error-messages="errors"
            label="Guardian First Name"
            outlined
          />
        </ValidationProvider>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-text-field
            v-model="guardianLastName"
            :error-messages="errors"
            label="Guardian Last Name"
            outlined
          />
        </ValidationProvider>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-select
            v-model="guardianRelationship"
            :error-messages="errors"
            :items="guardianrelationship"
            label="Relationship to Guardian"
            outlined
          />
        </ValidationProvider>
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
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <v-autocomplete
            v-model="primaryHomeLanguage"
            :error-messages="errors"
            :items="homelanguage"
            label="Primary Home Language"
            outlined
          />
        </ValidationProvider>
      </v-col>
    </v-row>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        cols="12"
        sm="7"
      >
        <ValidationProvider
          v-slot="{errors}"
          slim
          rules="required"
        >
          <AutoComplete
            v-model="address"
            outlined
            :error-messages="errors"
            label="Home Address"
            types="street_address"
          />
        </ValidationProvider>
      </v-col>
    </v-row>
  </div>
</template>
    
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Prop, Watch } from "vue-property-decorator";
import { FbStore } from "../../../store";
import { StudentForm } from "../../../store/Database/types/types";
import {
  AutoComplete,
  AutoCompleteAddress
} from "../../../components/GoogleMaps";
import { ValidationProvider } from "vee-validate";

@Component<StudentID>({
  components: {
    AutoComplete,
    ValidationProvider
  },
  async created() {
    let form = (
      await FbStore.firestore
        .collection("StudentForm")
        .doc(FbStore.FBUser!.uid)
        .get()
    ).data<StudentForm>()?.signupForm;
    if (form)
      Object.keys(form).forEach(key => {
        (this as Record<string, any>)[key] =
          form[key as keyof StudentForm.signupForm];
      });
  },
  data: () => ({
    gradelevel: [
      "12th Grade",
      "11th Grade",
      "10th Grade",
      "9th Grade",
      "8th Grade",
      "7th Grade",
      "6th Grade"
    ],

    teacherOptions: [
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
      "Rebekah Kotlar",
      "Rick Charles",
      "Romany Corella",
      "Selina Mandel",
      "Sherman Moore",
      "Sherwin Mohammed",
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
      "California Crosspoint Academy",
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

    ethnicityOptions: [
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
  }),
  watch: {
    menu(val) {
      val &&
        setTimeout(() => ((this.$refs.picker as any).activePicker = "YEAR"));
    }
  },
  methods: {
    save(date) {
      (this.$refs.menu as any).save(date);
    }
  }
})
export default class StudentID extends Vue {
  gradeLevel = "";
  teacher: string = "";
  schoolName: string = "";
  schoolDistrict: string = "";
  birthDate: Date | firebase.firestore.Timestamp = new Date();
  get date() {
    if (this.birthDate instanceof Date)
      return this.birthDate.toISOString().substr(0, 10);
    else
      return this.birthDate
        .toDate()
        .toISOString()
        .substring(0, 10);
  }
  set date(newBirthDay: string) {
    this.birthDate = new Date(newBirthDay);
  }
  superGender: string = "";
  ethnicity: string = "";
  guardianFirstName: string = "";
  guardianLastName: string = "";
  guardianRelationship: string = "";
  primaryHomeLanguage: string = "";
  address: string = "";
  get signupForm(): StudentForm.signupForm {
    return (({
      gradeLevel,
      teacher,
      schoolName,
      birthDate,
      superGender,
      ethnicity,
      guardianFirstName,
      guardianLastName,
      guardianRelationship,
      primaryHomeLanguage,
      schoolDistrict,
      address
    }) => ({
      gradeLevel,
      teacher,
      schoolName,
      birthDate,
      superGender,
      ethnicity,
      guardianFirstName,
      guardianLastName,
      guardianRelationship,
      primaryHomeLanguage,
      schoolDistrict,
      address
    }))(this);
  }
  async submit() {
    const studentFormRef = await FbStore.firestore
      .collection("StudentForm")
      .doc(FbStore.FBUser!.uid)
      .get();
    if (studentFormRef.exists)
      await FbStore.firestore
        .collection("StudentForm")
        .doc(FbStore.FBUser!.uid)
        .update<StudentForm>({
          signupForm: this.signupForm
        });
    else
      await studentFormRef.ref.set<StudentForm>({
        signupForm: this.signupForm
      });
  }
}
</script>
