<template>
  <v-row justify="center">
    <img
      id="pitch_enter__icon"
      src="@/assets/pitch_enter.png"
    >

    <v-col
      id="pitch_enter__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto pitch_enter__title"
      >
        YOUR ONE SENTENCE PROJECT PITCH
      </v-row>

      <v-col
        id="pitch_enter__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto pitch_enter__description"
      >
        In a tweet or less, describe what your solution is so it is clearly and concisely defined for others to quickly understand.
      </v-row>
      <ValidationObserver v-slot="{invalid, validate}">
        <v-row
          justify="center"
          class="mr-auto ml-auto mt-12 mb-12"
        >
          <ValidationProvider
            v-slot="{errors}"
            class="pt-1 pb-12 pl-5 pr-4 pitch_enter__onesentence"
            rules="required|max:255"
          >
            <v-textarea
              v-model="pitch"
              :error-messages="errors"
              placeholder="My pitch is..."
            />
          </ValidationProvider>
        </v-row>
  
        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <v-btn
            class="pitch_enter__button"
            :loading="loading"
            @click="validate().then(valid => {if(valid) submit()})"
          >
            SAVE
          </v-btn>
        </v-col>
      </ValidationObserver>
      <!-- NO RATING YET -->

      <v-row
        justify="center"
        class="mt-8 pitch_enter__ratinglabel"
      >
        No rating yet
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <i class="far fa-star pitch_enter__unratedstar" />
        <i class="far fa-star pitch_enter__unratedstar" />
        <i class="far fa-star pitch_enter__unratedstar" />
        <i class="far fa-star pitch_enter__unratedstar" />
        <i class="far fa-star pitch_enter__unratedstar" />
      </v-row>

      <!-- RATING -->

      <v-row
        justify="center"
        class="mt-8 pitch_enter__ratinglabel"
      >
        Rating
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <i class="fas fa-star pitch_enter__ratedstar" />
        <i class="fas fa-star pitch_enter__ratedstar" />
        <i class="fas fa-star pitch_enter__ratedstar" />
        <i class="fas fa-star pitch_enter__ratedstar" />
        <i class="fas fa-star pitch_enter__ratedstar" />
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import {max} from 'vee-validate/dist/rules';
extend('max',{
    ...max,
    message: "Must not be greater than {length} characters"
})

@Component({
  components:{
    ValidationObserver,
    ValidationProvider
  }
})
export default class pitch_enter extends Vue{
    pitch:string = ""
    loading:boolean = false
    async submit(){
      this.loading = true
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        },2000)
      })
      this.loading = false
    }
}
</script>