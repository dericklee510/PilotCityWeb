<template>
  <v-row justify="center">
    <img
      id="posthack__icon"
      class="posthack__image"
      src="@/assets/Posthack.png"
    >
    <v-col
      id="posthack__contain"
      cols="8"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto posthack__title"
      >
        POST-HACK REFLECTION
      </v-row>

      <v-col
        cols="12"
        class="posthack__borderline"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto posthack__description"
      >
        Now that you’ve received feedback from your employer, it is time to evolve, iterate or pivot your project if necessary.
      </v-row>

      <v-col cols="12">
        <v-row
          id="posthack__check1"
          justify="center"
          no-gutters
        >
          <v-col
            cols="12"
            md="6"
            lg="5"
            xl="4"
            class="posthack__wholeline"
          >
            <input
              v-model="canvas"
              class="posthack__check"
              type="checkbox"
            >
            Update Business Model Canvas
            <span class="posthack__error">*</span>
            <span>
              <button class="posthack__exporticon">
                <img src="@/assets/greenexport.png">
              </button>
            </span>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          justify="center"
        >
          <v-col
            class="posthack__descriptionline"
            cols="12"
            md="6"
            lg="5"
            xl="4"
          >
            Description of business model canvas
          </v-col>
        </v-row>
      </v-col>

      

      <v-col cols="12">
        <v-row
          id="posthack__check2"
          justify="center"
          no-gutters
        >
          <v-col
            class="posthack__wholeline"
            cols="12"
            md="6"
            lg="5"
            xl="4"
          >
            <input
              v-model="sentencePitch"
              class="posthack__check"
              type="checkbox"
            >
            Update One Sentence Pitch
            <span class="posthack__error">*</span>
            <span>
              <button class="posthack__exporticon">
                <img src="@/assets/greenexport.png">
              </button>
            </span>
          </v-col>
        </v-row>
        <v-row
          justify="center"
          no-gutters
        >
          <v-col
            class="posthack__descriptionline"
            cols="10"
            md="6"
            lg="5"
            xl="4"
          >
            Description of one sentence pitch
          </v-col>
        </v-row>
      </v-col>

      

      <v-col cols="12">
        <v-row
          id="posthack__check2"
          justify="center"
          no-gutters
        >
          <v-col
            class="posthack__wholeline"
            cols="12"
            md="6"
            lg="5"
            xl="4"
          >
            <input
              v-model="elevatorPitch"
              class="posthack__check"
              type="checkbox"
            >
            Update Written Elevator Pitch
            <span class="posthack__error">*</span>
            <span>
              <button class="posthack__exporticon">
                <img src="@/assets/greenexport.png">
              </button>
            </span>
          </v-col>
        </v-row>
        <v-row
          no-gutters
          justify="center"
        >
          <v-col
            class="posthack__descriptionline"
            cols="12"
            md="6"
            lg="5"
            xl="4"
          >
            Description of written elevator pitch
          </v-col>
        </v-row>
      </v-col>

      

      <v-row
        justify="center"
        class="mt-6"
      >
        <v-col
          cols="10"
          md="3"
        >
          <NextNode
            v-slot="{setNext}"
            @CallbackComplete="$emit('nextNode')"
          >
            <v-btn
              id="editcasestudies__button"
              text
              solo
              depressed
              outlined
              :disabled="!pivotReady"
              height="73.5px"
              @click=" setNext(submit)"
            >
              NEXT
            </v-btn>
          </NextNode>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { FbStore } from '../../../../store';
import {firebase} from '@/firebase/init'
import { NextNode } from '@/views/ProgramGuide/components'
@Component({
  components:{
    NextNode
  }
})
export default class posthack extends Vue {
  created(){
    if(FbStore.currentProject!.postHackReflection){
      this.canvas = true
      this.sentencePitch = true
      this.elevatorPitch = true
    }
  }
  canvas: boolean = !!FbStore.currentProject!.programSequence.reflection ||false;
  sentencePitch: boolean = !!FbStore.currentProject!.programSequence.reflection || false;
  elevatorPitch: boolean = !!FbStore.currentProject!.programSequence.reflection || false;
  get pivotReady(){
    return [this.canvas, this.sentencePitch, this.elevatorPitch].every(val => val)
  }
  async submit(){
    await FbStore.updateCurrentProject({
      [`programSequence.${'reflection'}`]:firebase.firestore.FieldValue.serverTimestamp(),
      postHackReflection:firebase.firestore.FieldValue.serverTimestamp()
    })
  }
}
</script>