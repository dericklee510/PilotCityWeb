<template>
  <v-row
    justify="center"
    class="login2__background"
  >
    <v-col cols="3">
      <v-row
        justify="center"
        class="login2__header mb-12 mt-12"
      >
        Welcome back.
      </v-row>

      <v-row class="login2__email mt-5">
        Email
      </v-row>
      <v-row justify="center">
        <input class="login2__emailinput mt-2">
      </v-row>

      <v-row class="login2__password mt-5">
        Password
      </v-row>
      <v-row justify="center">
        <input class="login2__passwordinput mt-2">
      </v-row>

      <v-row justify="center">
        <button class="login2__button mt-10">
          Login
        </button>
      </v-row>

      <v-row
        justify="center"
        class="login2__forgotpassword mt-5"
      >
        No account yet? Signup.
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component
export default class Login2 extends Vue{
    
}
</script>