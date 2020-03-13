<template>
  <v-row justify="center">
    <img
      id="elevator_enter__icon"
      src="@/assets/elevator_enter.png"
    >

    <v-col
      id="elevator_enter__contain"
      cols="8"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto elevator_enter__title"
      >
        WRITE YOUR 60-SECOND ELEVATOR PITCH


        <!-- TOOLTIP TEMPLATE -->
        <v-tooltip
          top
        >
          <template v-slot:activator="{ on }">
            <v-btn
              href="https://www.pilotcity.com/library/tips-to-prep-60-second-pitch"
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
          <span>Click here for tips on preparing your elevator pitch</span>
        </v-tooltip>
        <!-- TOOLTIP TEMPLATE END -->
      </v-row>

      <v-col
        id="elevator_enter__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto elevator_enter__description"
      >
        Before you run into a customer or investor, you have to know your solution in detail. Write out what you will say in an elevator pitch.
      </v-row>

      <v-row
        class="mr-auto ml-auto pl-5 mb-4 elevator_enter__description__label"
      >
        Elevator Pitch

        <!-- TOOLTIP TEMPLATE -->
        <v-tooltip
          right
        >
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              v-on="on"
            >
              <v-icon
                small
                class="pb-1"
                color="grey lighten-1"
              >
                info
              </v-icon>
            </v-btn>
          </template>
          <span>Write as if you're speaking from your heart</span>
        </v-tooltip>
        <!-- TOOLTIP TEMPLATE END -->
      </v-row>

      <ValidationObserver v-slot="{invalid, validate}">
        <v-row
          justify="center"
          class="mr-auto ml-auto"
        >
          <ValidationProvider
            v-slot="{errors}"
            class="pt-1 pb-12 pl-5 pr-4 elevator_enter__paragraph"
            rules="required"
          >
            <v-textarea
              v-model="text"
              no-resize
              :error-messages="errors"
              placeholder=""
            />
          </ValidationProvider>
        </v-row>

        <v-col
          class="mr-auto ml-auto mt-7 mb-7"
          cols="5"
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
        class="elevator_enter__ratinglabel"
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
          readonly
        />
      </v-row>

      <!-- RATING -->
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { TextEnter } from "../../components";
import { FbStore } from "../../../../store";
import {firebase} from "@/firebase/init"
import { NextNode } from "@/views/ProgramGuide/components"
@Component({
  components:{
    NextNode
  }
})
export default class elevator_enter extends TextEnter {
  text: string = FbStore.currentProject!.elevatorPitch || "";
  async submit(){
    this.loading=true

    await FbStore.updateCurrentProject({
      [`programSequence.${'elevatorPitch'}`]:firebase.firestore.FieldValue.serverTimestamp(),
      elevatorPitch: this.text
    });
    this.loading = false
  }
  rating:number = FbStore.currentProject!.elevatorPitchRatingE || FbStore.currentProject!.elevatorPitchRatingT || 0
}
</script>