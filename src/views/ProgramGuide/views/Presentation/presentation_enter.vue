<template>
  <v-container>
    <v-row justify="center">
      <img
        id="presentation_enter__icon"
        src="@/assets/presentation_enter.png"
      >
    
      <v-col
        id="presentation_enter__contain"
        cols="8"
      >
        <v-row
          justify="center"
          class="mr-auto ml-auto presentation_enter__title"
        >
          ENTER LINK TO PRESENTATION
          <!-- TOOLTIP TEMPLATE -->
          <v-tooltip
            v-model="show"
            top
          >
            <template v-slot:activator="{ on }">
              <v-btn
                href="https://www.pilotcity.com/library/what-should-i-include-in-my-final-presentation"
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
            <span>What should I include in my final presentation? Click to learn more.</span>
          </v-tooltip>
          <!-- TOOLTIP TEMPLATE END -->
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
            no-gutters
          >
            <v-col
              cols="9"
            >
              <LinkChecker
                v-model="url"
                placeholder="https://"
                class="presentation_enter__videolink"
              />
            </v-col>
          </v-row>
          <v-row
            justify="center"
            align="center"
            class="ml-auto mr-auto presentation_enter__check"
          >
            <v-col cols="1">
              <v-checkbox
                v-model="checkbox"
                :readonly="invalid"
                class="presentation_enter__checkbox"
              />
            </v-col><v-col cols="11">
              I acknowledge this link is set for the public to view.
            </v-col>
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
                text
                solo
                depressed
                outlined
                :disabled="invalid || !checkbox"
                height="73.5px"
                @click="setNext(onSubmit)"
              >
                NEXT
              </v-btn>
            </NextNode>
          </v-col>
        </ValidationObserver>
        <!-- NO RATING YET -->
    
        <v-row
          justify="center"
          class="mt-8 presentation_enter__ratinglabel"
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
            dense
            size="30px"
            readonly
          />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
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
import { NextNode } from '@/views/ProgramGuide/components'
@Component<PresentationEnter>({
  components: {
    ValidationObserver,
    ValidationProvider,
    LinkChecker,
    NextNode
  }
})
export default class PresentationEnter extends TextEnter {
    url:string = FbStore.currentProject!.presentationLink || ""
    checkbox=false
    async onSubmit(){
      await FbStore.updateCurrentProject({
         [`programSequence.${'presentation'}`]:firebase.firestore.FieldValue.serverTimestamp(),
        presentationLink:this.url
      })
    }
    rating:number = FbStore.currentProject!.presentationRatingE || FbStore.currentProject!.presentationRatingT || 0
}
</script>