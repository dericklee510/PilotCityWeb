<template>
  <div class="briefcard__sontaincontainer">
    <v-card
      id="Contain"
      class="briefcard__container"
    >
      <!-- <img src="" alt="" id="programbrief__cover"> -->
      <v-row id="briefcard__rowcontain">
        <v-col
          class="mr-5"
          cols="12"
          md="2"
          xl="1"
        >
          <div class="briefcard__cover" />
        </v-col>
      
        <v-col
          class=""
          cols=""
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