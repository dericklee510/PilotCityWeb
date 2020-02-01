<template>
  <v-row justify="center">
    <img
      id="demovideo_enter__icon"
      src="@/assets/demovideo_enter.png"
    >

    <v-col
      id="demovideo_enter__contain"
      cols="10"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto demovideo_enter__title"
      >
        ENTER 1-MINUTE PROTOTYPE DEMONSTRATION VIDEO
      </v-row>

      <v-col
        id="demovideo_enter__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto demovideo_enter__description"
      >
        Record and upload a video demonstration your project. This will give your employer a good understanding of how it works.
      </v-row>
      <ValidationObserver v-slot="{invalid}">
        <v-row
          justify="center"
          class="mr-auto ml-auto mt-12 mb-12"
          no-gutters
        >
          <v-col cols="9" md="7">
            <LinkChecker
              v-model="url"
              placeholder="https://"
              class="demovideo_enter__videolink"
            />
          </v-col>
        </v-row>
  
  
        <v-row
          justify="center"
          align="center"
          class="ml-auto mr-auto demovideo_enter__check"
        >
          <v-col cols="1">
            <v-checkbox
              v-model="checkbox"
              :readonly="invalid"
              class="demovideo_enter__checkbox"
            />
          </v-col><v-col cols="11">
            I acknowledge this link is set for the public to view and video length is within a reasonable range.
          </v-col>
        </v-row>
  
        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <v-btn
            solo
            depressed
            text
            height="55.88px"
            :disabled="invalid || !checkbox"
            class="demovideo_enter__button"
            @click="onSubmit"
          >
            SAVE
          </v-btn>
        </v-col>
      </ValidationObserver>
      <!-- NO RATING YET -->

      <v-row
        justify="center"
        class="mt-8 demovideo_enter__ratinglabel"
      >
        {{ rating || `No rating yet` }}
      </v-row>

      <v-row
        justify="center"
        class="mt-3 mb-6 pc-rating"
      >
        <v-rating
          v-model="rating"
          dense
          size="30px"
          readonly
        />
      </v-row>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { FbStore } from '../../../../store'
import { ValidationObserver } from 'vee-validate'
import { LinkChecker } from '../../components'
import {firebase} from '@/firebase/init'

@Component({
  components:{
    ValidationObserver,
LinkChecker
  }
})
export default class demovideo_enter extends Vue{
    url:string = FbStore.currentProject!.demoLink || ""
    checkbox=false
    onSubmit(){
      FbStore.updateCurrentProject({
        [`programSequence.${'demoVideo'}`]:firebase.firestore.FieldValue.serverTimestamp(),
        demoLink:this.url
      })
    }
    rating:number = FbStore.currentProject!.demoRatingT || FbStore.currentProject!.demoRatingE || 0
}
</script>