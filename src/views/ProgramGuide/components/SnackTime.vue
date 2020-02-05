<template>
  <div>
    <slot
      :updateSavedDate="updateSavedDate"
      :saving="saving"
    />
    <v-snackbar
      v-model="snackbar"
      top
      dark
    >
      <span v-if="(text instanceof Date)">
        {{ text | moment("calendar") }}
      </span>
      <span v-else="">
        {{ text }}
      </span>
      <v-btn
        color="pink"
        text
        @click="snackbar = false"
      >
        close
      </v-btn>
    </v-snackbar>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import moment from "moment";
import Component from 'vue-class-component'
import { Prop, Watch } from 'vue-property-decorator'

@Component
export default class SnackTime extends Vue{
snackbar:boolean = false
@Watch('snackbar')
async onSnackbar(newVal:boolean){
    if(newVal){
       await new Promise(resolve => {
            setTimeout(() => {
                this.snackbar = false
            }, 3000)
        })
    }
        
}
text:Date | string = ""
lastTimeStamp!:Date
updateSavedDate(timestamp:firebase.firestore.Timestamp){
    this.lastTimeStamp = timestamp.toDate()
    this.text = timestamp.toDate()
    this.snackbar=true
}
saving(bool:boolean){
    this.text = bool?'Saving':this.lastTimeStamp
    this.snackbar=true
}
}
 </script>   