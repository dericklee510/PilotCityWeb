<template>
  <div
    class="login-container" 
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
        <h1 class="login__title">
          Sign in to PilotCity
        </h1>
      </v-flex>
      <v-flex class="login__questions">
        <v-layout
          row
          wrap
          justify-center
        >
          <v-flex
            class="login__icons"
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
            <v-spacer />
            <label
              class="login__label"
              for="email"
            >Username</label>
            <v-text-field
              v-model="email"
              v-validate="'required|email'"
              class="login__subtitle"
              name="email"
              outline
              :error-messages="errors.collect('email')"
              placeholder="Enter your email"
              required
              single-line
            />
          </v-flex>
          <v-flex
            style="text-align: right"
            xs9
          >
            <a 
              href="#" 
              class="login__helplinks"
            >Forgot Username?</a>
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
          justify-center
        >
          <v-flex
            class="login__icons"
            align-self-center
            xs1
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
            <v-spacer />
            <label
              class="login__label"
              for="password"
            >Password</label>
            <v-text-field
              v-model="password"
              v-validate="'required'"
              class="login__subtitle"
              name="password"
              outline
              :error-messages="errors.collect('password')"
              single-line
              placeholder="Enter your password"
              required
            />
          </v-flex>
          <v-flex
            style="text-align: right"
            xs9
          >
            <a href="#">Forgot Password?</a>
          </v-flex>
          <v-flex
            style="text-align: center"
            xs12
          >
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="#dda0dd"
              class="login__btn"
              @click="process"
            >
              Login
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
            <a
              href="#"
              class="login__helplinks"
            >Sign up for PilotCity</a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
</template>


<script lang="ts">
import Vue from "vue"
import '@/assets/scss/login.scss'
import { AuthStore } from "@/store"
import Component from "vue-class-component"

@Component
export default class Login extends Vue{
    private password: string = ``;
    public email: string = ``;
    public loading: boolean = false;
    public authResponse: string = ``; 

    public async process(): Promise<void> {
        this.loading = true
        if (await this.$validator.validateAll())
            this.authResponse = await AuthStore.login({
                email: this.email,
                password: this.password
            })
        this.loading = false
    }

}
</script>


<style>
</style>