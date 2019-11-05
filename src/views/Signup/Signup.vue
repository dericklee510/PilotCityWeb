<template>
  <div class="pc-background--dark">
    <v-container style="padding-top: 10vh; padding-bottom: 25vh">
      <v-row justify="center">
        <v-col cols="12">
          <v-row
            justify="center"
          >
            <v-col
              cols="12"
              md="4"
            >
              <img
                id="signup-image"
                src="@/assets/Family.png"
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
                id="signup-title"
                class="text-center"
                style="display:block"
              >
                JOIN THE FAMILY
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
          <v-col
            cols="12"
          >
            <pcTextfield
              id="first_name"
              v-model="firstName"
              v-validate="'required'"
              title="FIRST NAME"
              :dark-mode="true"
              placeholder="Enter your first name"
              :error-messages="errors.collect('First Name')"
              required
            />
          </v-col> 
          <v-col
            cols="12"
          >
            <pcTextfield
              id="last_name"
              v-model="lastName"
              v-validate="'required'"
              title="LAST NAME"
              :dark-mode="true"
              placeholder="Enter your last name"
              :error-messages="errors.collect('Last Name')"
              required
            />
          </v-col> 
          <v-col
            cols="12"
          >
            <pcTextfield
              id="email"
              v-model="email"
              v-validate="'required|email'"
              :dark-mode="true"
              title="EMAIL"
              placeholder="Enter your email"
              :error-messages="errors.collect('email')"
              required
            />
          </v-col>
          <v-col
            cols="12"
          >
            <pcTextfield
              id="password"
              v-model="password"
              v-validate="'required|complex-password'"
              type="password"
              :dark-mode="true"
              title="PASSWORD"
              placeholder="Enter a password"
              :error-messages="errors.collect('password')"
              required
            />
          </v-col> 
          <v-col
            cols="12"
          >
            <pcTextfield
              v-model="confirmPassword"
              v-validate="'required|confirmed:password'"
              type="password"
              :dark-mode="true"
              title="CONFIRM PASSWORD"
              placeholder="Confirm your password"
              :error-messages="errors.collect(`Confirm Password`)"
              @keyup.enter="process"
            />  
          </v-col>
          <v-col cols="12">
            <v-btn
              id="signup-button"
              block
              :loading="loading"
              :disabled="loading"
              class="mb-6"
              @click="process"
            >
              <h3 class="text-uppercase">
                SIGN-UP
              </h3>
            </v-btn>
            <router-link
              :to="{name: 'login'}"
            >
              <h4
                class="text-center pc-background--dark"
                style="display: block"
              >
                Already have an account? Login Here
              </h4>
            </router-link>
          </v-col>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script lang="ts">
import { AuthStore } from "@/store"
import _ from "lodash"
import Vue from "vue"
import PCselect from "@/components/inputs/PCselect.vue"
import PCtextfield from "@/components/inputs/PCtextfield.vue"
import Component from "vue-class-component"

@Component({
    components:{
        pcSelect: PCselect,
        pcTextfield: PCtextfield
    }
})
export default class Signup extends Vue {
    private confirmPassword: string = "";
    private password: string = ""
    public email: string = "";
    public firstName: string = "";
    public lastName: string = "";
    public loading: boolean = false;
    public authResponse: string = ""
    public async process(): Promise<void> {
        this.loading = true
        if (await this.$validator.validateAll()){
            this.authResponse = await AuthStore.createAccount({
                email: this.email,
                password: this.password,
                firstName:this.firstName,
                lastName:this.lastName
            })
        }
        this.loading = false
    }
    
}
</script>

<style lang="scss">


</style>
