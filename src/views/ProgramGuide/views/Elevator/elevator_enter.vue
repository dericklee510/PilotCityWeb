<template>
  <v-row justify="center">
    <img
      id="elevator_enter__icon"
      src="@/assets/elevator_enter.png"
    >

    <v-col
      id="elevator_enter__contain"
      cols="7"
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
          class="mr-auto ml-auto mt-12 mb-12"
        >
          <ValidationProvider
            v-slot="{errors}"
            class="pt-1 pb-12 pl-5 pr-4 elevator_enter__paragraph"
            rules="required"
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
            class="elevator_enter__button"
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
        class="mt-8 elevator_enter__ratinglabel"
      >
        No rating yet
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <i class="far fa-star elevator_enter__unratedstar" />
        <i class="far fa-star elevator_enter__unratedstar" />
        <i class="far fa-star elevator_enter__unratedstar" />
        <i class="far fa-star elevator_enter__unratedstar" />
        <i class="far fa-star elevator_enter__unratedstar" />
      </v-row>

      <!-- RATING -->

      <v-row
        justify="center"
        class="mt-8 elevator_enter__ratinglabel"
      >
        Rating
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <i class="fas fa-star elevator_enter__ratedstar" />
        <i class="fas fa-star elevator_enter__ratedstar" />
        <i class="fas fa-star elevator_enter__ratedstar" />
        <i class="fas fa-star elevator_enter__ratedstar" />
        <i class="fas fa-star elevator_enter__ratedstar" />
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { TextEnter } from "../../components";
import { FbStore } from "../../../../store";

@Component
export default class elevator_enter extends TextEnter {
  text: string = FbStore.currentProject!.elevatorPitch || "";
  async submit(){
    this.loading=true
    await FbStore.updateCurrentProject({
      elevatorPitch: this.text
    });
    this.loading = false
  }
}
</script>