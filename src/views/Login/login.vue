<template>
  <v-container class="login-container" 
               fill-height 
               xs6
  >
    <v-layout row wrap>
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
            xs11
            md5
          >
            <v-spacer />
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
      </v-flex>
    </v-layout>
  </v-container>
</template>


<script lang="ts">
import Vue from "vue"

export default {
    
}
</script>


<style>

</style>