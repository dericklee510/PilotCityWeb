<template>
  <div
    class="signup-container"
  >
    <v-layout
      class="form-layout"
      row
      wrap
    >
      <v-flex
        style="text-align: center"
        xs12
      >
        <div class="signup__title">
          <span>
            Create new Account
          </span>
        </div>
      </v-flex>
      <v-flex
        xs11
        class="signup__questions"
      >
        <v-layout
          justify-center
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
          <v-flex
            xs8
          >
            <label
              class="signup__label"
              for="first_Name"
            >First Name</label>
            <v-text-field
              id="first_name"
              v-model="firstName"
              v-validate="'required'"
              class="signup__subtitle"
              name="First Name"
              :error-messages="errors.collect('First Name')"
              label="First Name"
              single-line
              outline
              placeholder="Enter your First Name"
              required
            />
          </v-flex>
        </v-layout>
        <v-layout
          justify-center
        >
          <v-flex
            xs8
            offset-xs1
          >
            <label
              class="signup__label"
              for="last_name"
            >Last Name</label>
            <v-text-field
              id="last_name"
              v-model="lastName"
              v-validate="'required'"
              class="signup__subtitle"
              name="Last Name"
              :error-messages="errors.collect('Last Name')"
              label="Last Name"
              single-line
              outline
              placeholder="Enter your Last Name"
              required
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
          justify-center
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
          <v-flex xs8>
            <label
              class="signup__label"
              for="email"
            >Email</label>
            <v-text-field
              id="email"
              v-model="email"
              v-validate="'required|email'"
              class="signup__subtitle"
              name="email"
              :error-messages="errors.collect('email')"
              label="Email"
              single-line
              outline
              placeholder="Enter your Email"
              required
            />
          </v-flex>
        </v-layout>
        <v-layout
          justify-center
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
            xs8
          >
            <label
              class="signup__label"
              for="password"
            >Password</label>
            <v-text-field
              id="password"
              ref="password"
              v-model="password"
              v-validate="'required|complex-password'"
              single-line
              class="signup__subtitle"
              name="password"
              :error-messages="errors.collect('password')"
              label="Password"
              outline
              placeholder="Create a password"
              required
              type="password"
            />
          </v-flex>
          <v-flex
            xs8
            offset-xs1
          >
            <v-text-field
              v-model="confirmPassword"
              v-validate="'required|confirmed:password'"
              single-line
              :error-messages="errors.collect(`Confirm Password`)"
              class="signup__subtitle"
              name="Confirm your password"
              outline
              label="Confirm your password"
              placeholder="Please confirm your Password"
              type="password"
              @keyup.enter="process"
            />
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex>
        <v-layout
          xs12
          row
          wrap
          justify-center
        >
          <v-flex
            style="text-align: center"
            xs12
          >
            <v-btn
              text
              rounded
              class="signup__btn"
              :loading="loading"
              :disabled="loading"
              @click="process"
            >
              Signup
            </v-btn>
          </v-flex>
          <v-flex
            v-show="authResponse.length"
            xs12
            class="signup__message"
            align-self-center
          >
            <v-layout justify-center>
              <h4>{{ authResponse }}</h4>
            </v-layout>
          </v-flex>
          <v-flex
            style="text-align: center"
            xs12
          >
            <router-link
              :to="{name: 'login'}"
              href="#"
              class="signup__switch"
            >
              Already have an account?
            </router-link>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>

<script lang="ts">
import '@/assets/SCSS/signup.scss'
import Vue from "vue"
import Component from "vue-class-component"
import { AuthStore } from "@/store"
import _ from "lodash"

@Component
export default class Signup extends Vue {
    private confirmPassword: string = "";
    private password: string = ""
    public email: string = "";
    public firstName: string = "";
    public lastName: string = "";
    public loading: boolean = false;
    public authResponse: string = ""
    public async process(): Promise<void> {
        this.loading = true
        if (await this.$validator.validateAll()){
            this.authResponse = await AuthStore.createAccount({
                email: this.email,
                password: this.password,
                firstName:this.firstName,
                lastName:this.lastName
            })}
        this.loading = false
    }
    
}
</script>

<style lang="scss">


</style>
