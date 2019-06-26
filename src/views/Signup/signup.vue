<template>
  <v-container
    class="signup-container"
    fill-height
    xs6
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        style="text-align: center"
        xs12
      >
        <h1 class="signup__title">
          Create new Account
        </h1>
      </v-flex>
      <v-flex class="signup__questions">
        <v-layout
          row
          wrap
        >
          <v-flex
            class="signup__icons"
            align-self-center
            xs1
          >
            <v-layout
              row
              justify-end
            >
              <i
                class="fa fa-user"
                aria-hidden="true"
              />
            </v-layout>
          </v-flex>
          <v-flex xs5>
            <v-text-field
              v-model="first_name"
              v-validate="'required'"
              class="signup__subtitle"
              name="First Name"
              :error-messages="errors.collect('First Name')"
              label="First Name"
              placeholder="Enter your First Name"
              required
            />
          </v-flex>
          <v-spacer />
          <v-flex xs5>
            <v-text-field
              v-model="last_name"
              v-validate="'required'"
              class="signup__subtitle"
              name="Last Name"
              :error-messages="errors.collect('Last Name')"
              label="Last Name"
              placeholder="Enter your Last Name"
              required
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex
            class="signup__icons"
            align-self-center
            xs1
          >
            <v-layout
              row
              justify-end
            >
              <i
                class="fa fa-envelope"
                aria-hidden="true"
              />
            </v-layout>
          </v-flex>
          <v-flex xs11>
            <v-text-field
              v-model="email"
              v-validate="'required|email'"
              class="signup__subtitle"
              name="email"
              :error-messages="errors.collect('email')"
              label="Email"
              placeholder="Enter your Email"
              required
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex
            class="signup__icons"
            xs1
            align-self-center
          >
            <v-layout
              row
              justify-end
            >
              <i
                class="fa fa-lock"
                aria-hidden="true"
              />
            </v-layout>
          </v-flex>
          <v-flex
            xs12
            md8
          >
            <v-text-field
              ref="password"
              v-model="password"
              v-validate="'required|complex_password'"
              class="signup__subtitle"
              name="password"
              :error-messages="errors.collect('password')"
              label="Password"
              placeholder="Enter a password"
              required
            />
          </v-flex>
          <v-flex xs11 md8 offset-xs1>
            <v-text-field
              v-model="confirm_password"
              v-validate="'required|confirmed:password'"
              :error-messages="errors.collect(`Confirm Password`)"
              class="signup__subtitle"
              label="Confirm Password"
              name="Confirm Password"
              placeholder="Please confirm your Password"
              type="password"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex
        style="text-align: center"
        xs12
      >
        <v-btn
          :loading="loading"
          :disabled="loading"
          color="secondary"
          @click="process"
        >
          Sign Up
        </v-btn>
      </v-flex>
      <v-flex v-show="auth_response.length">
        <h4>{{ auth_response }}</h4>
      </v-flex>
      <v-flex
        style="text-align: center"
        xs12
      >
        <a
          href="#"
          class="signup__switch"
        >Already have an account? Sign In!</a>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

import { getModule } from "vuex-module-decorators"
import SignupImport from "./store"
import store from "@/store"
import { Validator, Rules } from "vee-validate"
import { passwordStrength } from "./store/const"
import Auth from "@/store/Auth"
import HeaderMain from "@/components/layout/header.vue";






const SignupStore = getModule(SignupImport, store)
const AuthStore = getModule(Auth, store)
Validator.extend("complex_password", {
    getMessage: (field, params, data) =>
        `Password strength is ${
            passwordStrength[SignupStore.passwordInfo.score]
        } \n ${SignupStore.passwordInfo.feedback.suggestions}`,
    validate: (value, arg, data) => {
        return SignupStore.isPasswordComplex
    }
})

@Component
export default class Signup extends Vue {
    public first_name: string = "";
    public last_name: string = "";
    private confirm_password: string = "";
    public email: string = "";
    public loading: boolean = false;
    public get auth_response() {
        return AuthStore.authResponse
    }
    public get isPasswordComplex(): boolean {
        return SignupStore.isPasswordComplex
    }
    public get password(): string {
        return SignupStore.getPassword
    }
    public set password(value: string) {
        SignupStore.processPassword(value)
    }
    public async process(email: string, password: string): Promise<void> {
        this.loading = true
        if (await this.$validator.validateAll()) {
            await SignupStore.process({
                email:this.email, 
                password:this.password
            })
        }
        this.loading = false
    }
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
