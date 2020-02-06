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
            class="mr-auto ml-auto mt-12 mb-8"
          >
            <ValidationProvider
              v-slot="{errors}"
              class="pt-1 pb-6 pl-5 pr-4 pitch_enter__onesentence"
              rules="required|max:255"
            >
              <v-textarea
                v-model="pitch"
                no-resize
                :error-messages="errors"
                placeholder="My pitch is..."
              />
            </ValidationProvider>
          </v-row>
    
    
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
                class="mb-10 mt-8"
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
          {{ rating || `No rating yet` }}
        </v-row>
    
        <v-row
          justify="center"
          class="mt-3 mb-6 pc-rating"
        >
          <v-rating
            v-model="rating"
            size="30"
            dense
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