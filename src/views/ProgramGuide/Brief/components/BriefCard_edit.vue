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

            <v-row class="mt-5 pl-3">
              <button class="briefcard__buton mr-3">
                VIEW
              </button>
              <button class="briefcard__buton mr-3">
                RE-UPLOAD
              </button>
              <button class="briefcard__buton mr-3">
                DELETE
              </button>

              <v-col
                cols="2"
                style="padding:0"
              />
              <v-col
                cols="2"
                style="padding:0"
              />
              <v-col
                cols="2"
                style="padding:0"
              />
            </v-row>
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
    
}
</script>

<style scoped>

</style>