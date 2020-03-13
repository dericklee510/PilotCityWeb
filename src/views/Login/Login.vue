<template>
  <div class="pc-background--dark">
    <v-container style="padding-top: 10vh; padding-bottom: 25vh">
      <v-row
        justify="center"
        no-gutters
      >
        <v-col cols="4">
          <v-col
            class="text-center login__header pa-0"
          >
            Welcome back.
          </v-col>
          <v-col class="login__email pa-0">
            Email
          </v-col>
          <v-col class="pa-0 mt-2">
            <input
              v-model="email"
              placeholder="Email"
              class="login__email-input"
              @keyup.enter="$refs.password.focus()"
            >
          </v-col>
          <v-col class="login__password mt-5 pa-0">
            Password
          </v-col>
          <v-col class="pa-0 mt-2">
            <input
              ref="password"
              v-model="password"
              type="password"
              placeholder="Password"
              class="login__password-input "
              @keyup.enter="process()"
            >
          </v-col>
          <v-col
            class="login__forgotpassword pl-0 pr-0"
            @click="$router.push({name: 'reset-email'})"
          >
            <a style="color: #fff">
              Forgot Password
            </a>
          </v-col>



          <v-col class="mt-5 pa-0">
            <v-btn
              id="login-button"
              block
              depressed
              :loading="loading"  
              :disabled="loading"
              class="mb-6"
              @click="process()"
            >
              <h3 class="text-uppercase">
                LOGIN
              </h3>
            </v-btn>
            <v-alert
              v-if="authResponse"
              text
              color=""
            >
              <!-- Use for above if you want red error box color="error" -->
              <h4
               
                class="text-center pc-background--dark"
                style="display: block"
                color="error"
              >
                {{ authResponse }}
              </h4>
            </v-alert> 
            <router-link :to="{name: 'signup'}">
              <h4
                class="text-center login__noaccount"
                style="display: block"
              >
                No account yet? Signup.
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
import { Prop } from 'vue-property-decorator'
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

@Component<Login>({
    components: {
        pcSelect: PCselect,
        pcTextfield: PCtextfield,
        ValidationProvider,
        ValidationObserver
    }, 
})
export default class Login extends Vue {
    private password: string = "";

    public email: string = "";

    public loading: boolean = false;

    public authResponse: string = '';

    public async process(): Promise<void> {
        this.loading = true
        // if (await (this.$refs.Observer as ObserverInstance).validate()) {
            this.authResponse = await AuthStore.login({
                email: this.email,
                password: this.password
            }).then(resp => resp).catch(err => `The entered credentials do not exist`)
        // }
        if (this.authResponse == SUCCESSFUL_LOGIN_RESP && AuthStore.user && localStorage.PILOTCITY_EMPLOYERPROGRAMID) {
            await FbStore.initCurrentUserProfile(AuthStore.user.uid)
            this.$router.push({
                path: '/'
            })
        }
        else if (this.authResponse == SUCCESSFUL_LOGIN_RESP && AuthStore.user){
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
