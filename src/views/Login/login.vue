<template>
  <v-container
    class="login-container" 
    fill-height
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        style="text-align: center"
        xs11
        offset-xs1
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
              v-validate="'required|password'"
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
            xs9
            offset-xs1
          >
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="#dda0dd"
              class="login__btn"
            >
              Login
            </v-btn>
          </v-flex>
          <v-flex
            style="text-align: center"
            xs9
            offset-xs1
          >
            <a
              href="#"
              class="login__helplinks"
            >Sign up for PilotCity</a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue"
import '@/assets/scss/login.scss'
export default{
    
}
</script>


<style>
</style>