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
      <ValidationObserver v-slot="{invalid}">
        <v-row
          justify="center"
          class="mr-auto ml-auto mt-12 mb-12"
        >
          <LinkChecker
            v-model="url"
            class="presentation_enter__videolink"
          />
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
            :disabled="invalid || !checkbox"
            @click="onSubmit"
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
        {{ rating || `No rating yet` }}
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6"
      >
        <v-rating
          v-model="rating"
          readonly
        />
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { pluck, switchMap, debounceTime, filter } from "rxjs/operators";
import { Subject, from } from "rxjs";
import { ValidationObserver, ValidationProvider, validate } from "vee-validate";
import { TextEnter, LinkChecker } from "../../components";
// import {isLinkValid} from "@/api"
import { filterByPromise } from "filter-async-rxjs-pipe";
import { isLinkValid } from "../../../../api";
import { FbStore } from "../../../../store";
import {firebase} from '@/firebase/init'
@Component<PresentationEnter>({
  components: {
    ValidationObserver,
    ValidationProvider,
LinkChecker
  }
})
export default class PresentationEnter extends TextEnter {
    url:string = FbStore.currentProject!.presentationLink || ""
    checkbox=false
    onSubmit(){
      FbStore.updateCurrentProject({
         [`programSequence.${'presentation'}`]:firebase.firestore.FieldValue.serverTimestamp(),
        presentationLink:this.url
      })
    }
    rating:number = FbStore.currentProject!.presentationRatingE || FbStore.currentProject!.presentationRatingT || 0
}
</script>