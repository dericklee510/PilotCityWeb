<template>
  <v-row justify="center">
    <img
      id="elevator_enter__icon"
      src="@/assets/elevator_enter.png"
    >

    <v-col
      id="elevator_enter__contain"
      cols="10"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto elevator_enter__title"
      >
        WRITE YOUR 60-SECOND ELEVATOR PITCH
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
        class="mt-12 mr-auto ml-auto pl-5 mb-4 elevator_enter__description__label"
      >
        Elevator Pitch
      </v-row>

      <ValidationObserver v-slot="{invalid, validate}">
        <v-row
          justify="center"
          class="mr-auto ml-auto mt-6 mb-12"
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
              placeholder="My pitch is..."
            />
          </ValidationProvider>
        </v-row>

        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <v-btn
            class="elevator_enter__button"
            solo
            depressed
            text
            height="55.88px"
            :loading="loading"
            :disabled="invalid"
            @click="validate().then(valid => {if(valid) submit()})"
          >
            SAVE
          </v-btn>
        </v-col>
      </ValidationObserver>

      <!-- NO RATING YET -->

      <v-row
        justify="center"
        class="mt-8 elevator_enter__ratinglabel"
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
@Component
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