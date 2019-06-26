<template>
  <!-- <v-container fluid>
    <v-layout align-center justify-center>
      <v-card>
        <label for="first_name">First Name</label>
        <v-form :label="'First Name'"></v-form>
      </v-card>
    </v-layout>
  </v-container>-->

  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <!-- <v-img :src="require('@/assets/PilotCityLogo.png')" ></v-img> -->
        <v-layout align-center justify-center column fill-height>
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">Create an Account</h3>
            </div>
          </v-card-title>
          <form>
            <v-text-field
              v-model="first_name"
              name="First Name"
              v-validate="'required'"
              :error-messages="errors.collect('First Name')"
              label="First Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="last_name"
              name="Last Name"
              v-validate="'required'"
              :error-messages="errors.collect('Last Name')"
              label="Last Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="email"
              name="email"
              v-validate="'required | email'"
              :error-messages="errors.collect('email')"
              label="Email"
              required
            ></v-text-field>
            <v-text-field
              name="password |custom_validation"
              @input="processPassword"
              v-validate="'required|truthy'"
              :error-messages="errors.collect('password')"
              label="Password"
            ></v-text-field>
          </form>
          <v-card-actions>
            <v-btn flat color>Sign Up</v-btn>
          </v-card-actions>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

import { passwordValidator } from "./store/types";
import { getModule } from "vuex-module-decorators";
import signup_store from "./store";
import store from "@/store";
import { Validator, Rules } from "vee-validate";
import { passwordStrength } from "./store/const";
const SignupStore = getModule(signup_store, store);
Validator.extend("truthy", {
  getMessage: (field, params, data) =>
    `Password strength is ${
      passwordStrength[SignupStore.password_info.score]
    } \n ${SignupStore.password_info.feedback.suggestions}`,
  validate: (value, arg, data) => {
    return SignupStore.isPasswordComplex;
  }
});
@Component
export default class Signup extends Vue {
  public first_name: string = "";
  public last_name: string = "";
  public email: string = "";
  public isPasswordComplex: boolean = SignupStore.isPasswordComplex;
  public process: (email: string, password:string) => Promise<void> = SignupStore.process;
  public processPassword: (password: string) => void =
    SignupStore.processPassword;
}
</script>

<style>
</style>
