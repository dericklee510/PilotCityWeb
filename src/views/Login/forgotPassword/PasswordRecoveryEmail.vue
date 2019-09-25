<template>
  <v-container 
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
          Forgot Password?
        </h1>
      </v-flex>
      <v-flex
        style="text-align: center"
        xs12
        class="recoverPassword__desc"
      >
        <p>
          Enter your email address you’re using for your account below to send a recover password email
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
            v-model="email"
            v-validate="'required|email'"
            :error-messages="errors.collect('email')"
            name="email"
            outline
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
            round
            :loading="loading"
            :disabled="loading"
            @click="process"
          >
            Recover Password
          </v-btn>
        </v-layout>
      </v-flex>
      <v-flex
        v-show="authResponse"
        xs12
        class="signup__message"
        align-self-center
      >
        <v-layout justify-center>
          <h4>{{ authResponse }}</h4>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component" 
import { AuthStore } from "@/store"

@Component
export default class PasswordRecoveryEmail extends Vue {
    public email: string = ``;
    public authResponse: string = ``;
    public loading: boolean = false;

    private async process(): Promise<void> {
        this.loading = true
        if (await this.$validator.validateAll()){
            this.authResponse = await AuthStore.sendPassReset(
                this.email
            )
        }
        this.loading = false
    }
    
}
</script>
