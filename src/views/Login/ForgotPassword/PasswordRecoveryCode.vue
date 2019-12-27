<template>
  <div />
  <!-- <v-container
    fill-height
    class="recoverPassword__container"
  >
    <v-layout
      row
      wrap
    >
      <v-flex
        style="text-align: center"
        xs12
        class="recoverPassword__title"
      >
        <h1>
          Enter Recovery Code
        </h1>
      </v-flex>
      <v-flex
        style="text-align: center"
        xs12
        class="recoverPassword__desc"
      >
        <p>
          Enter the verification code sent to your email
        </p>
      </v-flex>
      <v-flex
        xs12
      >
        <v-layout
          justify-center
          class="recoverPassword__input"
        >
          <v-text-field
            v-model="input_email"
            name="email"
            outlined
            placeholder="Enter your email"
            required
            single-line
          />
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout
          justify-center
        >
          <v-btn
            class="recoverPassword__btn"
            text
            :loading="loading"
            :disabled="loading"
            @click="queryEmail"
          >
            Recover Password
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container> -->
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component
export default class PasswordRecoveryCode extends Vue {
    public input_email: string | undefined
}
</script>
