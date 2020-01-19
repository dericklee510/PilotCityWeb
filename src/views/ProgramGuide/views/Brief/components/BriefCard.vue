<template>
  <div class="briefcard__sontaincontainer">
    <v-card
      id="Contain"
      class="briefcard__container"
    >
      <!-- <img src="" alt="" id="programbrief__cover"> -->
      <v-row id="briefcard__rowcontain">
        <v-col
          cols="12"
          md="3"
          lg="2"
        >
          <iframe
            class="briefcard__cover"
            :src="`https://docs.google.com/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true`"
          />
        </v-col>
      
        <v-col
        class="pl-5"
          cols="12"
          md="9"
          lg="10"
        >
          <v-col
            class=""
            cols="12"
          >
            <div class="briefcard__header">
              Request for Pilot (RFP)
            </div>
            <span class="briefcard__check"><input
              v-model="acknowledged"
              class="checkbox_itself"
              type="checkbox"
            >I acknowledge I have fully read and understand the included document</span>
            <v-col style="padding:0">
              <v-btn
                class="briefcard__buton"
                :disabled="!acknowledged"
              >
                CONFIRM
              </v-btn>
            </v-col>
          </v-col>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from "vue-class-component"

@Component
export default class BriefCard extends Vue{
    acknowledged:boolean = false
}
</script>

<style scoped>

</style>