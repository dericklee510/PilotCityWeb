<template>
  <v-container class="signup-container" fill-height xs6>
    <v-layout row wrap>
      <v-flex style="text-align: center" xs12>
        <h1 class="signup__title">Create new Account</h1>
      </v-flex>
      <v-flex class="signup__questions">
        <v-layout row wrap>
          <v-flex class="signup__icons" align-self-center xs1>
            <v-layout row justify-end>
              <i class="fa fa-user" aria-hidden="true"></i>
            </v-layout>
          </v-flex>
          <v-flex xs5>
            <v-text-field class="signup__subtitle" v-model="first_name" name="First Name" v-validate="'required'" :error-messages="errors.collect('First Name')" label="First Name" placeholder="Enter your First Name" required></v-text-field>
          </v-flex>
          <v-spacer></v-spacer>
          <v-flex xs5>
            <v-text-field class="signup__subtitle" v-model="last_name" name="Last Name" v-validate="'required'" :error-messages="errors.collect('Last Name')" label="Last Name" placeholder="Enter your Last Name" required></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex class="signup__icons" align-self-center xs1>
            <v-layout row justify-end>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </v-layout>
          </v-flex>
          <v-flex xs11>
            <v-text-field class="signup__subtitle" v-model="email" name="email" v-validate="'required | email'" :error-messages="errors.collect('email')" label="Email" placeholder="Enter your Email" required></v-text-field>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex class="signup__icons" xs1 align-self-center>
            <v-layout row justify-end>
              <i class="fa fa-lock" aria-hidden="true"></i>
            </v-layout>
          </v-flex>
          <v-flex xs12 md8>
            <v-text-field class="signup__subtitle" name="password |custom_validation" @input="processPassword" v-validate="'required|truthy'" :error-messages="errors.collect('password')" label="Password" placeholder="Enter your Password"></v-text-field>
          </v-flex>
          <v-flex xs12 md8 offset-md1>
            <v-text-field class="signup__subtitle" name="password |custom_validation" @input="processPassword" v-validate="'required|truthy'" :error-messages="errors.collect('password')" label="Password" placeholder="Please confirm your Password"></v-text-field>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex style="text-align: center" xs12>
        <v-btn :loading="loading" :disabled="loading" color="secondary" @click="loader = 'loading'">
          Sign Up
        </v-btn>
      </v-flex>
      <v-flex style="text-align: center" xs12>
        <a href="#" class="signup__switch">Already have an account? Sign In!</a>
      </v-flex>
    </v-layout>
  </v-container>
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
  public process: (email: string, password: string) => Promise<void> = SignupStore.process;
  public processPassword: (password: string) => void =
    SignupStore.processPassword;
}
</script>

<style lang="scss">
.signup-container {
  max-width: 50rem;
}
.signup__icons {
  padding-right: 1rem;
}
</style>
