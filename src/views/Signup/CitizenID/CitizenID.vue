<template>
  <ValidationObserver v-slot="{validate}">
    <v-row
      justify="center"
      class="mt-12"
    >
      <img
        id="citizenid__icon"
        src="@/assets/citizen-id.png"
      >
      <v-col
        id="citizenid__containtop"
        cols="8"
      >
        <v-row
          justify="center"
          no-gutters
          class="citizenid__title"
        >
          <v-col
            cols="9"
            class="text-center"
          >
            YOUR PILOTCITY ID
          </v-col>
        </v-row>

        <v-row
          justify="center"
          no-gutters
          class="citizenid__description"
        >
          <v-col
            cols="9"
            class="text-center"
          >
            Confirm your information
          </v-col>
        </v-row>
      </v-col>
      <v-col
        id="citizenid__containbottom"
        cols="8"
      >
        <v-row
          justify="center"
          no-gutters
          class="mt-10 pt-3 pb-3"
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
                <ValidationProvider
                  v-slot="{errors}"
                  rules="required"
                >
                  <v-text-field
                    v-model="firstName"
                    :error-messages="errors"
                    label="First Name"
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
                  rules="required"
                >
                  <v-text-field
                    v-model="lastName"
                    :error-messages="errors"
                    label="Last Name"
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
                class="d-flex"
                cols="12"
                sm="7"
              >
                <v-select
                  v-model="citizenType"
                  :items="items"
                  label="Who are you?"
                  outlined
                />
              </v-col>
            </v-row>
 
            <!-- GRADE LEVEL -->
            <StudentID
              v-if="citizenType === `Student`"
              ref="StudentID"
            />

            <!-- END -->
          </v-col>
        </v-row>

        <v-row
          no-gutters
          justify="center"
          class="pt-3"
        >
          <v-col
            cols="5"
          >
            <button
              class="citizenid__button mb-10"
              @click="()=>{validate().then(val => {if(val)submit()} )}"
            >
              SAVE
            </button>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { mask } from "vue-the-mask";
import { FbStore } from "../../../store";
import { ValidationObserver, ValidationProvider } from "vee-validate";
import { startCase } from "lodash";
import StudentID from "./StudentID.vue";
import { StudentForm } from '../../../store/Database/types/types';
@Component({
  components: {
    ValidationObserver,
    ValidationProvider,
    StudentID
  }
})
export default class CitizenID extends Vue {
  items = ["Student", "Teacher", "Employer"];
  firstName = FbStore.currentUserProfile!.firstName || "";
  lastName = FbStore.currentUserProfile!.lastName || "";
  citizenType = startCase(FbStore.currentUserProfile!.citizenType) || "";
  signupForm?:StudentForm.signupForm
  async submit() {
    let { firstName, lastName, citizenType } = this;
    await FbStore.updateCurrentUserProfile({
      firstName,
      lastName,
      citizenType: citizenType.toLowerCase() as
        | "employer"
        | "teacher"
        | "student"
    });
    if(this.$refs.StudentID)
    await (this.$refs.StudentID as  StudentID).submit()
    this.$router.push({ name: "program.programlist" });
  }
}
</script>
