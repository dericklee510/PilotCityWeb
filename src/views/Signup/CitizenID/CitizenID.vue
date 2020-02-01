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
          class="mr-auto ml-auto citizenid__title"
        >
          GENERAL INFORMATION
        </v-row>
      </v-col>

      <v-col
        id="citizenid__containbottom"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto citizenid__description"
        >
          Confirm your information
        </v-row>

        <v-row
          justify="center"
          class="pt-10"
        >
          <v-col cols="7">
            <v-row
              no-gutters
              justify="center"
            >
              <v-col
                cols="12"
                sm="6"
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
                sm="6"
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
                sm="6"
              >
                <v-select
                  v-model="citizenType"
                  :items="items"
                  label="Who are you?"
                  outlined
                />
              </v-col>
            </v-row>
            <template />



            <!-- <v-row no-gutters justify="center">
                    <v-col cols="12" sm="6">
            <v-text-field
              v-model="phoneNumber"
              v-mask="'(###) ###-####'"
              label="Mobile Number"
              outlined
            ></v-text-field>
          </v-col>
            </v-row>-->
          </v-col>
        </v-row>

        <!-- <v-row
          justify="center"
          class="ml-auto mr-auto citizenid__check"
        >
          <span>
            <input
              v-model="existing"
              type="checkbox"
              class="citizenid__checkbox"
            >
          </span><span>
            I agree to the following Terms & Conditions and Privacy Policy
          </span>
        </v-row>-->

        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <button
            class="citizenid__button mb-10"
            @click="()=>{validate().then(val => {if(val)submit()} )}"
          >
            SAVE
          </button>
        </v-col>
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
@Component({
  components: {
    ValidationObserver,
    ValidationProvider
  }
})
export default class CitizenID extends Vue {
  items = ["Student", "Teacher", "Employer"];
  firstName = FbStore.currentUserProfile!.firstName || "";
  lastName = FbStore.currentUserProfile!.lastName || "";
  citizenType = startCase(FbStore.currentUserProfile!.citizenType) || "";
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
    this.$router.push({ name: "program.programlist" });
  }
}
</script>
