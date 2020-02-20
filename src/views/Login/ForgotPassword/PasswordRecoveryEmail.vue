<template>
  <div class="pc-background--dark">
    <v-container style="padding-top: 10vh; padding-bottom: 25vh">
      <v-row
        justify="center"
        no-gutters
      >
        <v-col cols="4">
          <v-col
            class="text-center recovery__header pa-0"
          >
            Forgot Password?
          </v-col>
          <v-col class="mb-15 text-center">
            <p>
              Enter your email address to send a recovery email
            </p>
          </v-col>
          <v-col class="recovery__email pa-0">
            Email
          </v-col>
          <v-col class="pa-0 mt-2">
            <ValidationProvider
              ref="email"
              v-slot="{errors}"
              rules="required|email"
            >
              <input
                v-model="email"
                placeholder="Email"
                class="recovery__email-input"
                @keyup.enter="process()"
              >
            </ValidationProvider>
          </v-col>
          <v-col class="mt-5 pa-0">
            <v-btn
              id="recovery-button"
              block
              depressed
              :loading="loading"  
              :disabled="loading"
              class="mb-6"
              @click="process()"
            >
              <h3 class="text-uppercase">
                Recover Password
              </h3>
            </v-btn>
            <v-alert
              v-if="authResponse"
              text
              type="success"
            >
              <!-- Use for above if you want red error box color="error" -->
              <h4
                class="text-center pc-background--dark"
                style="display: block"
              >
                {{ authResponse }}
              </h4>
            </v-alert> 
          </v-col>
        </v-col>
      </v-row>
    </v-container> 
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ProviderInstance } from 'vee-validate/dist/types/types'
import { AuthStore } from '@/store'
import { ValidationProvider } from 'vee-validate'
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
