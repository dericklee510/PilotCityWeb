<template>
  <v-row justify="center">
    <img
      id="businessmodelcanvas_enter__icon"
      src="@/assets/businessmodelcanvas_enter.png"
    >

    <v-col
      id="businessmodelcanvas_enter__contain"
      cols="7"
    >
      <!-- <v-row><i class="fas fa-chevron-left" id="businessmodelcanvas_enter__backbuttonicon"><button class="businessmodelcanvas_enter__backbutton">Back</button></i></v-row> -->

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_enter__title"
      >
        BUSINESS MODEL CANVAS
      </v-row>

      <v-col
        id="businessmodelcanvas_enter__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto businessmodelcanvas_enter__description"
      >
        Every idea has a model on the business side. Create and refine gameplan by developing your business model canvas.
      </v-row>

      <!-- <v-row class="mt-12 mr-auto ml-auto pl-5 mb-4 businessmodelcanvas_enter__description__label">Elevator Pitch</v-row> -->


      <!-- COMPONENT -->
      <v-row
        justify="center"
        class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
      >
        <v-col
          cols="8"
          class=""
        >
          Problem
        </v-col>
 
        <v-col cols="4">     
          <v-row class="">
            <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
              Rating
            </div>
            <v-rating />
          </v-row>
        </v-col>
      </v-row>

      <ValidationObserver v-slot="{invalid}">
        <v-row
          justify="center"
          class="mr-auto ml-auto mb-12"
        >
          <ValidationProvider
            v-slot="{errors,failedRules}"
            name="Problem"
            class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
            rules="required|max:255"
          >
            <v-textarea
              v-model="problem"
              :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
              counter
              placeholder="My pitch is..."
            />
          </ValidationProvider>
        </v-row>
  
  
        <!-- COMPONENT -->
        <v-row
          justify="center"
          class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
        >
          <v-col
            cols="8"
            class=""
          >
            Solution
          </v-col>
   
          <v-col cols="4">     
            <v-row class="">
              <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
                Rating
              </div>
              <v-rating />
            </v-row>
          </v-col>
        </v-row>
  
        <v-row
          justify="center"
          class="mr-auto ml-auto mb-12"
        >
          <ValidationProvider
            v-slot="{errors,failedRules}"
            class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
            rules="required|max:255"
          >
            <v-textarea
              v-model="solution"
              :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
              counter
              placeholder="My pitch is..."
            />
          </ValidationProvider>
        </v-row>
  
  
        <!-- COMPONENT -->
        <v-row
          justify="center"
          class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
        >
          <v-col
            cols="8"
            class=""
          >
            Innovation
          </v-col>
   
          <v-col cols="4">     
            <v-row class="">
              <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
                Rating
              </div>
              <v-rating />
            </v-row>
          </v-col>
        </v-row>
  
        <v-row
          justify="center"
          class="mr-auto ml-auto mb-12"
        >
          <ValidationProvider
            v-slot="{errors,failedRules}"
            class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
            rules="required|max:255"
          >
            <v-textarea
              v-model="innovation"
              :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
              counter
              placeholder="My pitch is..."
            />
          </ValidationProvider>
        </v-row>
  
        <!-- COMPONENT -->
        <v-row
          justify="center"
          class="businessmodelcanvas_enter__description__label mt-12 mr-auto ml-auto pl-2 mb-1"
        >
          <v-col
            cols="8"
            class=""
          >
            Cost
          </v-col>
   
          <v-col cols="4">     
            <v-row class="">
              <div class="businessmodelcanvas_enter__ratinglabel pt-2 pr-3">
                Rating
              </div>
              <v-rating />
            </v-row>
          </v-col>
        </v-row>
  
        <v-row
          justify="center"
          class="mr-auto ml-auto mb-12"
        >
          <ValidationProvider
            v-slot="{errors,failedRules}"
            rules="required|max:255"
            class="pt-1 pb-12 pl-5 pr-4 businessmodelcanvas_enter__paragraph"
          >
            <v-textarea
              v-model="cost"
              :error-messages="failedRules.max?`Must not be longer than 280 Characters`:errors"
              counter
              placeholder="My pitch is..."
            />
          </ValidationProvider>
        </v-row>
     


        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <v-btn
            class="businessmodelcanvas_enter__button mb-10"
            :disabled="invalid"
          >
            SAVE
          </v-btn>
        </v-col>
      </ValidationObserver>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationProvider, ValidationObserver } from 'vee-validate'
@Component({
  components:{
    ValidationProvider,
    ValidationObserver
  }
})
export default class businessmodelcanvas_enter extends Vue{
    problem:string = ""
    solution:string = ""
    innovation:string = ""
    cost:string = ""
}
</script>