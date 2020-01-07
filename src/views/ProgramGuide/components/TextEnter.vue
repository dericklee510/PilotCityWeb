<template>
  <v-container>
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
            v-model="text"
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
  </v-container>
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
export default class TextEnter extends Vue{
    text:string = ""
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