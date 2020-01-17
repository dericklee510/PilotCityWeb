<template>
  <v-row justify="center">
    <img
      id="introvideo_edit__icon"
      src="@/assets/watchintrovideo_edit.png"
    >

    <v-col
      id="introvideo_edit__contain"
      cols="7"
    >
      <v-row
        justify="center"
        class="mr-auto ml-auto introvideo_edit__title"
      >
        EDIT INTRODUCTION VIDEO
      </v-row>

      <v-col
        id="introvideo_edit__borderline"
        cols="12"
      />

      <v-row
        justify="center"
        class="mr-auto ml-auto introvideo_edit__description"
      >
        Record, upload and enter link for an introduction video to your project challenge for students to view.
      </v-row>

      <ValidationObserver v-slot="{invalid}">
        <v-row
          justify="center"
          class="mr-auto ml-auto mt-12 mb-12"
        >
          <LinkChecker
            v-model="url"
            :success="success"
            class="introvideo_edit__videolink"
          />
        </v-row>
     
     
        <v-row
          justify="center"
          class="ml-auto mr-auto introvideo_edit__check"
        >
          <v-checkbox
            v-model="checkbox"
            type="checkbox"
            class="introvideo_edit__checkbox"
            :readonly="invalid"
          />
          I confirm this video is set for public view
        </v-row>
     
        <v-col
          class="mr-auto ml-auto"
          cols="5"
        >
          <v-btn
            class="introvideo_edit__button"
            :disabled="invalid || !checkbox"
          >
            CONFIRM
          </v-btn>
        </v-col>
      </ValidationObserver>
    </v-col>
  </v-row>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { LinkChecker } from '../../components'
import { ValidationObserver } from 'vee-validate'

@Component({
  components:{
    LinkChecker,
    ValidationObserver
  }
})
export default class introvideo_edit extends Vue{
    url:string = ""
    success:boolean=false
    showerr = false
    checkbox = false
}
</script>