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
            v-model="input_email"
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
            flat
            :loading="loading"
            :disabled="loading"
            @click="queryEmail"
          >
            Recover Password
          </v-btn>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>



<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class PasswordRecoveryEmail extends Vue {
    public input_email: string | undefined
    
    private queryEmail() {
        //compares email 

        // if(email==email){
        //     sendRecoveryCode()
        // }
        // else return error
    }
    private sendRecoveryCode() {
        //sends SMS to enter code
        // if(phone){
        // sendSMS
        // }
        // else sendEmail
    }
  
    
}
</script>
