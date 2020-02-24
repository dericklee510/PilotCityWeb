<template>
  <v-container>
    <v-row justify="center">
      <img
        id="pitch_enter__icon"
        src="@/assets/pitch_enter.png"
      >
    
      <v-col
        id="pitch_enter__contain"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto pitch_enter__title"
        >
          YOUR ONE SENTENCE PROJECT PITCH


          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            v-model="show"
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/formatting-1-sentence-pitch"
                target="_blank"
                icon
                v-on="on"
              >
                <v-icon
                  class="pb-3"
                  color="grey lighten-1"
                >
                  info
                </v-icon>
              </v-btn>
            </template>
            <span>Click here to learn how to best format your pitch</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
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
          <v-col
            justify="center"
            cols="10"
            class="ml-auto mr-auto"
          >
            <ValidationProvider
              v-slot="{errors}"
              class="pt-5 pb-5 pl-5 pr-5 m-0"
              rules="required|max:144"
            >
              <v-textarea
                v-model="pitch"
                class="pitch_enter__onesentence"
                no-resize
                counter
                :error-messages="errors"
                placeholder=""
              />
            </ValidationProvider>
          </v-col>
    
    
    
          <v-col
            class="mr-auto ml-auto"
            cols="5"
          >
            <NextNode
              v-slot="{setNext}"
              @CallbackComplete="$emit('nextNode')"
            >
              <v-btn
                id="editcasestudies__button"
                class="mb-2 mt-2"
                text
                solo
                depressed
                outlined
                :loading="loading"
                :disabled="invalid"
                height="73.5px"
                @click="validate().then(valid => {if(valid) setNext(submit)})"
              >
                NEXT
              </v-btn>
            </NextNode>
          </v-col>
        </ValidationObserver>
        <!-- NO RATING YET -->
    
        <v-row
          justify="center"
          class="mt-8 pitch_enter__ratinglabel"
        >
          YOUR RATING
          <!-- {{ rating || `No rating yet` }} -->
        </v-row>
    
        <v-row
          justify="center"
          class="mt-3 mb-6 pc-rating"
        >
          <v-rating
            v-model="rating"
            color="yellow darken-3"            
            size="30"
            dense
            light
            readonly=""
          />
        </v-row>
    
        <!-- RATING -->
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import {ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import {max} from 'vee-validate/dist/rules';
import { FbStore } from '../../../../store';
import {firebase} from "@/firebase/init"
import { NextNode } from "@/views/ProgramGuide/components"
extend('max',{
    ...max,
    message: "Must not be greater than {length} characters"
})

@Component({
  components:{
    ValidationObserver,
    ValidationProvider,
    NextNode
  }
})
export default class pitch_enter extends Vue{
  
    pitch:string = FbStore.currentProject!.sentencePitch || ""
    loading:boolean = false
    upnext(){
      
    }
    async submit(){
      this.loading = true
      await FbStore.updateCurrentProject({
        [`programSequence.${'sentencePitch'}`]:firebase.firestore.FieldValue.serverTimestamp()
        ,
        sentencePitch:this.pitch
      })
      this.loading = false
    }
    rating:number = FbStore.currentProject!.sentencePitchRatingE || FbStore.currentProject!.sentencePitchRatingT || 0
}
</script>