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
          <ValidationProvider
            ref="email"
            v-slot="{errors}"
            rules="required|email"
          >
            <v-text-field
              v-model="email"
              :error-messages="errors"
              name="email"
              outlined
              placeholder="Enter your email"
              required
              single-line
            />
          </ValidationProvider>
        </v-layout>
      </v-flex>
      <v-flex xs12>
        <v-layout
          justify-center
        >
          <v-btn
            class="recoverPassword__btn"
            text
            rounded
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
import Vue from 'vue'
import Component from 'vue-class-component'
import { ProviderInstance } from 'vee-validate/dist/types/types'
import { AuthStore } from '@/store'
import ValidationProvider from '@/utilities/validation'
@Component({
    components: {
        ValidationProvider
    }
})
export default class PasswordRecoveryEmail extends Vue {
    public email: string = '';

    public authResponse: string = '';

    public loading: boolean = false;

    private async process(): Promise<void> {
        this.loading = true
        if ((await (this.$refs.email as ProviderInstance).validate()).valid) {
            this.authResponse = await AuthStore.sendPassReset(
                this.email
            )
        }
        this.loading = false
    }
}
</script>
