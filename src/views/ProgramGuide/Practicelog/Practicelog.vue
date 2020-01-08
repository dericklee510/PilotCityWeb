<template>
  <v-row justify="center">
    <img
      id="logtime__icon"
      class="logtime__image"
      src="@/assets/log.png"
    >

    <v-col
      id="logtime__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto logtime__title"
      >
        PRACTICE LOG
      </v-row>

      <v-col
        cols="12"
        class="logtime__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto logtime__description"
      >
        As you practice, use and apply the employer's product or service, log how many minutes you use it each time.
      </v-row>



      <v-row
        justify="center"
        class=""
      >
        <v-col
          align-self="center"
          cols="8"
          sm="6"
          md="4"
        >
          <v-text-field
            label="Enter Time"
            outlined
            height="100px"
            class="logtime__input"
            placeholder="0m"
          />
        </v-col>
      </v-row>

      <v-row
        justify="center"
        class=""
      >
        <button class="logtime__button">
          LOG TIME
        </button>
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mt-10 logtime__label"
      >
        LOGGED TIME
      </v-row>

      <v-row
        justify="center"
        class="mr-auto ml-auto mt-2 mb-7 logtime__calculated"
      >
        1h 30m
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationObserver, ValidationProvider, extend} from 'vee-validate'
extend('isTime',{
  message: `Must end with an "h" or an "m"`,
  validate: ((val) => ["h","m"].map(char => char === val.charAt(val.length-1)).every(val => val))
})
@Component
export default class logtime extends Vue{
    time:string = ""
    
}
</script>