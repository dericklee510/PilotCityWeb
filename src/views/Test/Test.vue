<template>
  <v-container fluid>
    <v-row
      no-gutters
      justify="center"
      align="center"
    >
      <v-col cols="12">
        <h2>Enter Your Phone Number For Verification</h2>
        <v-text-field
          v-model="phone"
          @keyup.enter="sendCode(phone)"
        />
      </v-col>
      <v-col cols="12">
        <h2>Enter Verification Code</h2>
        <v-text-field
          :code="code"
          @keyup.enter="verifyPhone(phone, code)"
        />
      </v-col>
    </v-row>    
  </v-container>
</template>
<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { SMSsendCode, isValidSMS } from "@/api"


@Component({
  async beforeRouteEnter(to, from, next) {
    if (process.env.NODE_ENV === 'development') next()
  }
})
export default class Test extends Vue {
  public code: string = ""
  public phone: string = ""

  async sendCode(phone: string){
    try {
      const data = await SMSsendCode({to: phone});
      console.info('%c Code has been sent!', 'background: green; color: white; display: block; text-align: center')
    } catch(err) {
      console.error(`${err} \nThere was an error sending code to ${phone} \n Please try again later`)
    }
  }
  async verifyPhone( phone: string, code: string,) {
    try {
      const val = await isValidSMS({to: phone, code: code});
      console.log(val)
      console.info('%c Code has been verified!', 'background: green; color: white; display: block; text-align: center')
      console.log(val)
    } catch(err) {
      console.error(`${err} \n There was an error verifying code: ${code} \n Please try again later`)
    }
  }

 
}
</script>