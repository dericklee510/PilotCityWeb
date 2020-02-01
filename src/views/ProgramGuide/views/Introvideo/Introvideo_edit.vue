<template>
  <v-container>
    <v-row
      justify="center"
      no-gutters
    >
      <img
        id="introvideo_edit__icon"
        src="@/assets/watchintrovideo_edit.png"
      >
    
      <v-col
        id="introvideo_edit__contain"
        cols="10"
      >
        <v-col
          justify="center"
          class="programguide__title"
        >
          EDIT INTRODUCTION VIDEO
        </v-col>
    
        <v-col
          class="programguide__description"
        >
          Record, upload and enter link for an introduction video to your project challenge for students to view.
        </v-col>
    
        <v-col>
          <ValidationObserver v-slot="{invalid}">
            <v-row
              no-gutters
              justify="center"
            >
              <v-col
                class="mt-12 mb-12"
                cols="12"
              >
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-col cols="7">
                    <LinkChecker
                      v-model="url"
                      :success="success"
                      class="introvideo_edit__videolink"
                    />
                    <v-col />
                  </v-col>
                </v-row>
              </v-col>
                
                
              <v-col
                cols="6"
              >
                <v-row
                  no-gutters
                  justify="center"
                  align="center"
                >
                  <v-col cols="1">
                    <v-checkbox
                      v-model="checkbox"
                      type="checkbox"
                      :readonly="invalid"
                    />
                  </v-col>
                    
                  <v-col
                    cols="11"
                    class="introvideo_edit__check"
                  >
                    I confirm this video is set for public view
                  </v-col>
                </v-row>
              </v-col>
              <v-col
                cols="12"
                class="mt-10"
              >
                <v-row
                  no-gutters
                  justify="center"
                >
                  <v-col
                    cols="5"
                  >
                    <v-btn
                      text
                      solo
                      depressed
                      class="introvideo_edit__button"
                      :disabled="invalid || !checkbox"
                      @click="onSubmit"
                    >
                      CONFIRM
                    </v-btn>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </ValidationObserver>
        </v-col>
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { LinkChecker } from '../../components'
import { ValidationObserver } from 'vee-validate'
import { FbStore } from '../../../../store'

@Component({
  components:{
    LinkChecker,
    ValidationObserver
  }
})
export default class introvideo_edit extends Vue{
    url:string = FbStore.currentEmployerProgram?.introVideo || ""
    success:boolean=false
    showerr = false
    checkbox = false
    onSubmit(){
      FbStore.updateCurrentEmployerProgram({
        introVideo:this.url
      })
    }
}
</script>