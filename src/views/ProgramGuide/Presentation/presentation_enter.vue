<template>
  <v-row justify="center">
    <img
      id="presentation_enter__icon"
      src="@/assets/presentation_enter.png"
    >

    <v-col
      id="presentation_enter__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto presentation_enter__title"
      >
        ENTER LINK TO PRESENTATION
      </v-row>

      <v-col
        id="presentation_enter__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto presentation_enter__description"
      >
        Develop a final presentation and enter the link. You can use it to present to employers, customers or who you wish.
      </v-row>
      <ValidationObserver v-slot="{invalid, validate, valid}">
        <v-row
          justify="center"
          class="mr-auto ml-auto mt-12 mb-12"
        >
          <ValidationProvider
            ref="inputValidation"
            v-slot="{errors}"
            class="presentation_enter__videolink"
            rules="required|url"
          >
            <v-text-field
              id="urlInput"
              v-model="inputUrl"
              v-stream:input="inputChange$"
              :error-messages="valid?result:errors"
              :success="valid"
              :success-messages="result"
              :loading="loading"
              :color="color"
              placeholder="https://"
            />
          </ValidationProvider>
        </v-row>
        <v-row
          justify="center"
          class="ml-auto mr-auto presentation_enter__check"
        >
          <v-checkbox
            v-model="checkbox"
            :disabled="invalid"
            type="checkbox"
            class="presentation_enter__checkbox"
          />
       
          <span>I acknowledge this link is set for the public to view</span>
        </v-row>
  
        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <v-btn
            class="presentation_enter__button"
            :disabled="!checkbox"
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
        class="mt-8 presentation_enter__ratinglabel"
      >
        No rating yet
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <i class="far fa-star presentation_enter__unratedstar" />
        <i class="far fa-star presentation_enter__unratedstar" />
        <i class="far fa-star presentation_enter__unratedstar" />
        <i class="far fa-star presentation_enter__unratedstar" />
        <i class="far fa-star presentation_enter__unratedstar" />
      </v-row>

      <!-- RATING -->

      <v-row
        justify="center"
        class="mt-8 presentation_enter__ratinglabel"
      >
        Rating
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <i class="fas fa-star presentation_enter__ratedstar" />
        <i class="fas fa-star presentation_enter__ratedstar" />
        <i class="fas fa-star presentation_enter__ratedstar" />
        <i class="fas fa-star presentation_enter__ratedstar" />
        <i class="fas fa-star presentation_enter__ratedstar" />
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { pluck, switchMap, debounceTime, filter } from "rxjs/operators";
import { Subject, from } from "rxjs";
import { ValidationObserver, ValidationProvider,validate } from 'vee-validate';
import { TextEnter } from '../components';
import {isLinkValid} from "@/api"
import {filterByPromise} from "filter-async-rxjs-pipe"
interface nativeEvent {
  data: undefined;
  event: {
    msg: string;
    name: string;
  };
}
@Component<PresentationEnter>({
  domStreams: ["inputChange$"],
  subscriptions() {
    return {
      result: this.inputChange$.pipe(
        debounceTime(300),
        pluck<nativeEvent,string>("event","msg"),
        filterByPromise(async (value) => (await validate(value,'url')).valid),
        switchMap(value => from(this.checkUrl(value)))
        )
    };
  },
  components:{
    ValidationObserver,
    ValidationProvider
  }
})
export default class PresentationEnter extends TextEnter {
  checkbox:boolean = false
  inputChange$!: Subject<nativeEvent>;
  result!: string;
  inputUrl:string = ""
  url: string = "";
  color: "success" |  "error" = "success"
  success?:boolean
  async checkUrl(URL: string) {
    this.loading = true;
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        reject("Could not verify URL, server timeout");
      },2000);
      try {
        isLinkValid(URL).then(value => value?resolve("Link is verified"):reject("Link does not exist"))
      }catch{
        reject("Could not verify URL, exception occured")
      }
    }).then(value => {
      this.success = true
      this.color = "success"
      return value
    }).catch(error => {
      this.success= false
      this.color = "error"
      return error
    }).finally(() =>{
      this.loading = false
    })
  }
}
</script>