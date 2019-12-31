<template>
  <div class="briefcard__sontaincontainer">
    <v-card
      id="Contain"
      class="briefcard__container"
    >
      <!-- <img src="" alt="" id="programbrief__cover"> -->
      <v-row
        v-for="entry in entries"
        id="briefcard__rowcontain"
        :key="entry.id"
      >
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
              {{ entry.file?entry.file.name:"Emptry Program Brief" }}
            </div>

            <v-row
              
              class="mt-5 pl-3"
            >
              <button
                v-if="entry.link"
                class="briefcard__buton mr-3"
              >
                <a :href="link">VIEW </a>
              </button>
              <button class="briefcard__buton mr-3">
                {{ entry.link?"RE-UPLOAD":"UPlOAD" }}
              </button>
              <button
                v-if="entries.length>1"
                class="briefcard__buton mr-3"
                @click="deleteEntry(entry.id)"
              >
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
import { PCmultiinput } from '../../../../components/inputs'


interface ProgramBrief {
  file?:File
  link:string
}
const emptyBrief = {
  file:undefined,
  link:""
}
const app = PCmultiinput.createMultiInput(emptyBrief)
@Component
export default class BriefCard extends app{
    
}
</script>

<style scoped>

</style>