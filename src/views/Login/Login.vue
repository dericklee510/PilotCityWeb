<template>
  <div class="pc-background--dark">
    <v-container style="padding-top: 10vh; padding-bottom: 25vh">
      <v-row justify="center">
        <v-col cols="12">
          <v-row justify="center">
            <v-col
              cols="12"
              md="4"
            >
              <img
                id="login-image"
                src="@/assets/Knock_knock.png"
              >
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12">
          <v-row justify="center">
            <v-col
              cols="12"
              md="3"
            >
              <h2
                id="login-title"
                class="text-center text-uppercase"
                style="display:block"
              >
                Who's There
              </h2>
            </v-col>
          </v-row>
        </v-col>
        <v-col
          cols="12"
          sm="7"
          md="6"
          lg="4"
        >
          <ValidationObserver ref="Observer">
            <v-col cols="12">
              <ValidationProvider
                ref="email"
                v-slot="{errors}"
                rules="required|email"
              >
                <pcTextfield
                  v-model="email"
                  :dark-mode="true"
                  title="EMAIL"
                  placeholder="Enter your email"
                  name="email"
                  :error-messages="errors"
                  required
                  @keyup.enter="$refs.password.focus()"
                />
              </ValidationProvider>
            </v-col>
            <v-col cols="12">
              <ValidationProvider
                ref="password"
                v-slot="{errors}"
                rules="required"
              >
                <pcTextfield
                  ref="password"
                  v-model="password"
                  type="password"
                  :dark-mode="true"
                  title="PASSWORD"
                  placeholder="Enter a password"
                  :error-messages="errors"
                  required
                  @keyup.enter="process()"
                />
              </ValidationProvider>
            </v-col>
          </ValidationObserver>
          <v-col cols="12">
            <v-btn
              id="login-button"
              block
              :loading="loading"
              :disabled="loading"
              class="mb-6"
              @click="process()"
            >
              <h3 class="text-uppercase">
                LOGIN
              </h3>
            </v-btn>
            <router-link :to="{name: 'signup'}">
              <h4
                class="text-center pc-background--dark"
                style="display: block"
              >
                {{ authResponse }}
              </h4>
              <h4
                class="text-center pc-background--dark label_annotate"
                style="display: block"
              >
                Don't have an account yet? Sign-up here
              </h4>
            </router-link>
          </v-col>
        </v-col>
      </v-row>
    </v-container> 
  </div>
</template>


<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import { AuthStore, FbStore } from '@/store'
import {
  /* eslint-disable-next-line */
    SUCCESSFUL_SIGNUP_RESP,
  SUCCESSFUL_LOGIN_RESP
} from '../../store/Auth/const'
import PCselect from '@/components/inputs/PCselect.vue'
import PCtextfield from '@/components/inputs/PCtextfield.vue'
import { ObserverInstance } from '@/utilities/validation'

@Component({
    components: {
        pcSelect: PCselect,
        pcTextfield: PCtextfield,
        ValidationProvider,
        ValidationObserver
    }
})
export default class Login extends Vue {
    private password: string = '';

    public email: string = '';

    public loading: boolean = false;

    public authResponse: string = '';

    public async process(): Promise<void> {
        this.loading = true
        if (await (this.$refs.Observer as ObserverInstance).validate()) {
            this.authResponse = await AuthStore.login({
                email: this.email,
                password: this.password
            })
        }
        if (this.authResponse == SUCCESSFUL_LOGIN_RESP && AuthStore.user && !AuthStore.user.photoURL) {
            await FbStore.initCurrentUserProfile(AuthStore.user.uid)
            this.$router.push({
                name: 'signup.type'
            })
        }
        this.loading = false
    }
}
</script>


<style>
</style>
