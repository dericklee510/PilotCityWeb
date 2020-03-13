<template>
  <ValidationObserver ref="Observer">
    <div class="pc-background--dark signup-container">
      <v-container style="padding-top: 48px; padding-bottom: 25vh">
        <v-row
          justify="center"
          no-gutters
        >
          <v-col cols="4"> 
            <v-col
              class="text-center signup__header pa-0"
            >
              Join the family.
            </v-col>
            <v-col class="signup__label pa-0">
              First Name
            </v-col>
            <v-col class="pa-0 mt-2">
              <ValidationProvider
                v-slot="{errors}"  
                slim
                vid="first_name"
                rules="required"
              >
                <v-text-field
                  v-model="firstName"
                  :error-messages="errors"
                  placeholder="First Name"
                  class="signup__field-input pt-2"
                />
              </ValidationProvider>
            </v-col>
            <v-col class="signup__label mt-5 pa-0">
              Last Name
            </v-col>
            <v-col class="pa-0 mt-2">
              <ValidationProvider
                v-slot="{errors}"
                slim
                vid="last_name"
                rules="required"
              >
                <v-text-field
                  v-model="lastName"
                  placeholder="Last Name"
                  class="signup__field-input pt-2"
                  :error-messages="errors"
                  @keyup.enter="process()"
                />
              </ValidationProvider>
            </v-col>
            <v-col class="signup__label mt-5 pa-0">
              Email
            </v-col>
            <v-col class="pa-0 mt-2">
              <ValidationProvider
                v-slot="{errors}"
                slim
                vid="email"
                rules="required|email"
              >
                <v-text-field
                  v-model="email"
                  placeholder="Email"
                  class="signup__field-input pt-2"
                  :error-messages="errors"
                  @keyup.enter="process()"
                />
              </ValidationProvider>
            </v-col>
            <v-col class="signup__label mt-5 pa-0">
              Password
            </v-col>
            <v-col class="pa-0 mt-2">
              <ValidationProvider
                v-slot="{errors}"
                slim
                vid="password"
                rules="required|complex-password"
              >
                <div>
                  <v-text-field
                    v-model="password"
                    type="password"
                    placeholder="Password"
                    class="signup__field-input pt-2"
                    @keyup.enter="process()"
                  />
                  <Password
                    v-model="password"
                    :strength-meter-only="true"
                  /><div style="padding-left: 15px">
                    <span
                      style="color: #B71C1C; font-size: 12px; font-family: Raleway; font-weight: 800"
                    >
                      {{
                        errors[0]
                      }}
                      <span />
                    </span>
                  </div>
                </div>
              </ValidationProvider>
            </v-col>
            <v-col class="signup__label mt-5 pa-0">
              Confirm Password
            </v-col>
            <v-col class="pa-0 mt-2">
              <ValidationProvider
                v-slot="{errors}"
                slim
                vid="confirmPassword"
                rules="required|confirmed:password"
              >
                <v-text-field
                  v-model="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  class="signup__field-input pt-2"
                  :error-messages="errors"
                  @keyup.enter="process()"
                />
              </ValidationProvider>
            </v-col>

            <v-col
              justify="center"
              class="pl-0 pr-0"
            >
              <v-row no-gutters>
                <v-checkbox
                  v-model="checkbox"
                  dark
                >
                  <template v-slot:label>
                    <div class="signup__termstext">
                      I agree to the following
                      <v-tooltip
                        dark
                        bottom
                      >
                        <template v-slot:activator="{ on }">
                          <a
                            dark
                            small
                            target="_blank"
                            href="https://www.iubenda.com/terms-and-conditions/32542296"
                            @click.stop
                            v-on="on"
                          >
                            Terms & Conditions
                          </a>
                        </template>
                        Opens in new window
                      </v-tooltip>
                      and
                      <v-tooltip
                        dark
                        bottom
                      >
                        <template v-slot:activator="{ on }">
                          <a
                            dark
                            small
                            target="_blank"
                            href="https://www.iubenda.com/privacy-policy/32542296"
                            @click.stop
                            v-on="on"
                          >
                            Privacy Policy
                          </a>
                        </template>
                        Opens in new window
                      </v-tooltip>
                    </div>
                  </template>
                </v-checkbox>
              </v-row>
            </v-col>

            <v-col class="mt-0 pa-0">
              <v-btn
                id="signup-button"
                block
                depressed
                :loading="loading"  
                :disabled="loading || !checkbox"
                class="mb-6"
                @click="process()"
              >
                <h3 class="text-uppercase">
                  signup
                </h3>
              </v-btn>
              <router-link :to="{name: 'login'}">
                <!-- <h4
                  class="text-center pc-background--dark"
                  style="display: block"
                >
                  {{ authResponse }}
                </h4> -->
                <h4
                  class="text-center signup__forgotpassword"
                  style="display: block"
                >
                  Have an account? Login
                </h4>
              </router-link>
            </v-col>
          </v-col>
        </v-row>
      </v-container> 
      <v-dialog
        v-model="dialog"
        max-width="50vw"
        persistent
      >
        <template>
          <v-container
            class="code-modal pa-0" 
            style="color: #fff"
          >
            <v-row
              no-gutters
              justify="center"
              style="background-color: #404142"
            >
              <v-col
                cols="10"
                class="code-modal__container"
                style="height: 285px"
              >
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-col
                    class="code-modal__title"
                    cols="12"
                  >
                    <span>Email verification sent.</span> 
                  </v-col>
                  <v-col
                    class="code-modal__subtitle text-center"
                    style="font-size: .8em"
                    cols="12"
                  >
                    Please verify through the link sent to your email to proceed with logging in.
                  </v-col>
                </v-row>
                <v-row
                  no-gutters
                  justify="center"
                  class="mt-12"
                >
                  <v-col
                    cols="8"
                    md="4"
                    class="code-modal__button"
                  >
                    <v-btn
                      style="color: #fff; background-color: #6eba7f"
                      width="100%"
                      height="100%"
                      text
                      depressed
                      outlined
                      @click="$router.push({name:'login'})"
                    >
                      Close
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </v-container>
        </template>
      </v-dialog>
    </div>
  </ValidationObserver>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationObserver } from 'vee-validate'
import { AuthStore, FbStore } from '@/store'
/* eslint-disable-next-line */
import _ from "lodash"
import PCselect from '@/components/inputs/PCselect.vue'
import PCtextfield from '@/components/inputs/PCtextfield.vue'
import { ValidationProvider } from './validation'
import { ObserverInstance } from '@/utilities/validation'

import { AutoComplete } from '@/components/GoogleMaps'
import Fb from '../../store/Database'
import { GeneralUser } from '../../store/Database/types/types'
import {firebase} from '@/firebase/init'
import { Watch } from 'vue-property-decorator'
import Password from 'vue-password-strength-meter'
@Component<Signup>({
    components: {
        pcSelect: PCselect,
        pcTextfield: PCtextfield,
        ValidationObserver,
        ValidationProvider,
        AutoComplete,
        Password
    }
})
export default class Signup extends Vue {
    dialog = false
    private confirmPassword: string = '';
    private password: string = ''
    public email: string = '';
    public firstName: string = '';
    public lastName: string = '';
    public loading: boolean = false;
    public authResponse: string = ''
    checkbox = false
    public async process(): Promise<void> {
        this.loading = true
        if (await (this.$refs.Observer as ObserverInstance).validate()) {
            this.authResponse = await AuthStore.createAccount({
                email: this.email,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName
            })
            this.dialog = true
        }
        this.loading = false
    }

}
</script>

<style lang="scss">


</style>
