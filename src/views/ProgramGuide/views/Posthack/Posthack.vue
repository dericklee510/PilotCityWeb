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


        <!-- TOOLTIP TEMPLATE -->
        <v-tooltip
          top
        >
          <template v-slot:activator="{ on }">
            <v-btn
              href="https://www.pilotcity.com/library/what-to-do-with-feedback-after-hack-day"
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
          <span>What do I do with feedback after Hack Day? Click here to learn more.</span>
        </v-tooltip>
        <!-- TOOLTIP TEMPLATE END -->
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

      <v-row no-gutters>
        <v-col cols="3" />
        <v-col cols="8">
          <v-row
            id="posthack__check1"
            justify="center"
            no-gutters
            class="mt-12 mb-12"
          >
            <v-col
              cols="12"
              class="posthack__wholeline"
            >
              <input
                v-model="canvas"
                class="posthack__check"
                type="checkbox"
              >
              Update Business Model Canvas
              <span class="posthack__error">*</span>
              <router-link :to="{name:'stud-project-canvas-edit'}">
                <span>
                  <button class="posthack__exporticon">
                    <img src="@/assets/greenexport.png">
                  </button>
                </span>
              </router-link>
            </v-col>
          </v-row>

          <v-row
            id="posthack__check2"
            justify="center"
            no-gutters
            class="mt-12 mb-12"
          >
            <v-col
              class="posthack__wholeline"
              cols="12"
            >
              <input
                v-model="sentencePitch"
                class="posthack__check"
                type="checkbox"
              >
              Update One Sentence Pitch
              <span class="posthack__error">*</span>
              <router-link :to="{name:'stud-project-ospitch-edit'}">
                <span>
                  <button class="posthack__exporticon">
                    <img src="@/assets/greenexport.png">
                  </button>
                </span>
              </router-link>
            </v-col>
          </v-row>

          <v-row
            id="posthack__check2"
            justify="center"
            no-gutters
            class="mt-12 mb-12"
          >
            <v-col
              class="posthack__wholeline"
              cols="12"
            >
              <input
                v-model="elevatorPitch"
                class="posthack__check"
                type="checkbox"
              >
              Update Written Elevator Pitch
              <span class="posthack__error">*</span>
              <router-link :to="{name:'stud-project-elevator-edit'}">
                <span>
                  <button class="posthack__exporticon">
                    <img src="@/assets/greenexport.png">
                  </button>
                </span>
              </router-link>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <v-row
        justify="center"
        class="mt-1 mb-12"
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
import { FbStore } from "../../../../store";
import { firebase } from "@/firebase/init";
import { NextNode } from "@/views/ProgramGuide/components";

@Component({
  components: {
    NextNode
  }
})
export default class posthack extends Vue {
  created() {
    if (FbStore.currentProject!.postHackReflection) {
      this.canvas = true;
      this.sentencePitch = true;
      this.elevatorPitch = true;
    }
  }
  canvas: boolean =
    !!FbStore.currentProject!.programSequence.reflection || false;
  sentencePitch: boolean =
    !!FbStore.currentProject!.programSequence.reflection || false;
  elevatorPitch: boolean =
    !!FbStore.currentProject!.programSequence.reflection || false;
  get pivotReady() {
    return [this.canvas, this.sentencePitch, this.elevatorPitch].every(
      val => val
    );
  }
  async submit() {
    await FbStore.updateCurrentProject({
      [`programSequence.${"reflection"}`]: firebase.firestore.FieldValue.serverTimestamp(),
      postHackReflection: firebase.firestore.FieldValue.serverTimestamp()
    });
  }
}
</script>