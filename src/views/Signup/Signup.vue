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
         <ValidationObserver ref="Observer">
            <v-col
              cols="12"
            >
             <ValidationProvider vid="first_name" rules="required" v-slot ={errors}>
                <pcTextfield
                  v-model="firstName"
                  title="FIRST NAME"
                  :dark-mode="true"
                  placeholder="Enter your first name"
                  :error-messages="errors"
                  required
                />
             </ValidationProvider>
            </v-col> 
            <v-col
              cols="12"
            >
             <ValidationProvider vid="last_name" rules="required" v-slot ={errors}>
                <pcTextfield
                  v-model="lastName"
                  title="LAST NAME"
                  :dark-mode="true"
                  placeholder="Enter your last name"
                  :error-messages="errors"
                  required
                />
             </ValidationProvider>
            </v-col> 
            <v-col
              cols="12"
            >
            <ValidationProvider vid="email" rules="required|email" v-slot ={errors}>
               <pcTextfield
                id="email"
                v-model="email"
                :dark-mode="true"
                title="EMAIL"
                placeholder="Enter your email"
                :error-messages="errors"
                required
              />
            </ValidationProvider>
             
            </v-col>
            <v-col
              cols="12"
            >
            <ValidationProvider vid="password" rules="required|complex-password" v-slot ={errors}>
              <pcTextfield
                v-model="password"
                type="password"
                :dark-mode="true"
                title="PASSWORD"
                placeholder="Enter a password"
                :error-messages="errors"
                required
              />
            </ValidationProvider>
              
            </v-col> 
            <v-col
              cols="12"
            >
             <ValidationProvider vid="confirmPassword" rules="required|confirmed:password" v-slot="{errors}">
                <pcTextfield
                  v-model="confirmPassword"
                  type="password"
                  :dark-mode="true"
                  title="CONFIRM PASSWORD"
                  placeholder="Confirm your password"
                  :error-messages="errors"
                  @keyup.enter="process"
                />  
             </ValidationProvider>
            </v-col>
         </ValidationObserver>
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
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import {VeeObserver} from "vee-validate/dist/types/types"
declare type ObserverInstance = InstanceType<typeof ValidationObserver>

@Component({
    components:{
        pcSelect: PCselect,
        pcTextfield: PCtextfield,
        ValidationObserver,
        ValidationProvider
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
        this.loading = true;
        if(await (this.$refs.observer as ObserverInstance).validate()){
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
