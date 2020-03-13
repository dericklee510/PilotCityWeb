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
        cols="8"
      >
        <v-row
          justify="center"
          no-gutters
          style="border-bottom: solid 0.75px #404142;"
        >
          <v-col
            cols="9"
            class="programguide__title mb-8"
            style="border-bottom: 0px;"
          >
            UPLOAD INTRODUCTION VIDEO
          
            <!-- TOOLTIP TEMPLATE -->
            <v-tooltip
              top
            >
              <template v-slot:activator="{ on }">
                <v-btn
                  href="https://www.pilotcity.com/library/what-is-the-intro-video"
                  target="_blank"
                  icon
                  v-on="on"
                >
                  <v-icon
                    class="pb-2"
                    color="grey lighten-1"
                  >
                    info
                  </v-icon>
                </v-btn>
              </template>
              <span>How do I create an introduction video? Click here.</span>
            </v-tooltip>
            <!-- TOOLTIP TEMPLATE END -->
          </v-col>
        </v-row>

        <v-row
          justify="center"
          no-gutters
        >
          <v-col
            cols="9"
            class="programguide__description"
          >
            Record, upload and enter link for an introduction video to your project challenge for students to view.
          </v-col>
        </v-row>

        <ValidationObserver v-slot="{invalid}">
          <v-row
            justify="center"
            class="mr-auto ml-auto mt-12 mb-12"
            no-gutters
          >
            <v-col
              cols="9"
              md="7"
            >
              <LinkChecker
                v-model="url"
                :success="success"
                placeholder="https://"
                class="introvideo_edit__videolink"
              />
            </v-col>
          </v-row>
          <v-row
            no-gutters
            justify="center"
            align="center"
          >
            <v-col
              cols="9"
              class="introvideo_edit__check"
            >
              <v-row
                justify="center"
                align="center"
              >
                <v-checkbox
                  v-model="checkbox"
                  type="checkbox"
                  :readonly="invalid"
                  :ripple="false"
                  dense
                />I confirm this video is set for public view
              </v-row>
            </v-col>
          </v-row>
          <v-row
            no-gutters
            justify="center"
          >
            <v-col cols="4">
              <NextNode
                v-slot="{setNext}"
                @CallbackComplete=" $emit('nextNode')"
              >
                <v-btn
                  id="editcasestudies__button"
                  class="mb-10 mt-4"
                  :disabled="invalid || !checkbox"
                  text
                  solo
                  depressed
                  outlined
                  height="73.5px"
                  @click="setNext(onSubmit)"
                >
                  NEXT
                </v-btn>
              </NextNode>
            </v-col>
          </v-row>
        </ValidationObserver>
      </v-col>
    </v-row>
  </v-container>
</template>





<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { LinkChecker, NextNode } from "../../components";
import { ValidationObserver } from "vee-validate";
import { FbStore } from "../../../../store";

@Component({
  components: {
    LinkChecker,
    ValidationObserver,
    NextNode
  }
})
export default class introvideo_edit extends Vue {
  url: string = FbStore.currentEmployerProgram?.introVideo || "";
  success: boolean = false;
  showerr = false;
  checkbox = false;
  async onSubmit() {
    FbStore.updateCurrentEmployerProgram({
      introVideo: this.url
    });
  }
}
</script>