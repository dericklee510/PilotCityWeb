<template>
  <v-row justify="center">
    <img
      id="posthack__icon"
      class="posthack__image"
      src="@/assets/Posthack.png"
    >

    <v-col
      id="posthack__contain"
      cols="7"
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

      <v-row id="posthack__check1">
        <span class="posthack__wholeline">
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
        </span>
      </v-row>

      <v-row>
        <span class="posthack__descriptionline">Description of business model canvas</span>
      </v-row>

      <v-row id="posthack__check2">
        <span class="posthack__wholeline">
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
        </span>
      </v-row>

      <v-row>
        <span class="posthack__descriptionline">Description of one sentence pitch</span>
      </v-row>

      <v-row id="posthack__check2">
        <span class="posthack__wholeline">
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
        </span>
      </v-row>

      <v-row>
        <span class="posthack__descriptionline">Description of written elevator pitch</span>
      </v-row>

      <v-row>
        <v-btn
          class="posthack__acknowledgebutton"
          :disabled="!pivotReady"
        >
          ACKNOWLEDGE
        </v-btn>
      </v-row>
    </v-col>
  </v-row>
</template>



<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
@Component
export default class posthack extends Vue {
  canvas: boolean = false;
  sentencePitch: boolean = false;
  elevatorPitch: boolean = false;
  get pivotReady(){
    return [this.canvas, this.sentencePitch, this.elevatorPitch].every(val => val)
  }
}
</script>