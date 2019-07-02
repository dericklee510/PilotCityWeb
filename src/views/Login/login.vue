<template>
  <v-container
    class="login-container" 
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
            <v-text-field
              v-model="email"
              v-validate="'required|email'"
              class="login__subtitle"
              name="email"
              :error-messages="errors.collect('email')"
              label="Username"
              placeholder="Enter your email"
              required
            />
          </v-flex>
          <v-flex
            style="text-align: right"
            xs9
          >
            <a href="#">Forgot Username?</a>
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
            <v-text-field
              v-model="email"
              v-validate="'required|email'"
              class="login__subtitle"
              name="password"
              :error-messages="errors.collect('email')"
              label="Password"
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
          >
            <v-btn
              :loading="loading"
              :disabled="loading"
              color="secondary"
              @click="process"
            >
              Login
            </v-btn>
          </v-flex>
          <v-flex
            style="text-align: center"
            xs9
          >
            <a
              href="#"
            >Sign up for PilotCity</a>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue"

export default{
    
}
</script>


<style>
.login-container {
  max-width: 50rem;
}
.login__icons {
  padding-right: 1rem;
}
</style>