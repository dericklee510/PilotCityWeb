<template>
  <div>
    <slot
      :updateSavedDate="updateSavedDate"
      :saving="saving"
    />
    <v-snackbar
      v-model="snackbar"
      class="guide-snackbar"
      left
      :timeout="60000"
      multi-line
      color="#f1f2f2"
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
import {debounce} from 'lodash'
@Component
export default class SnackTime extends Vue{
snackbar:boolean = true;
// @Watch('snackbar')
// async onSnackbar(newVal:boolean){
//     if(newVal){
//        await new Promise(resolve => {
//             setTimeout(() => {
//                 this.snackbar = false
//             }, 60000)
//         })
//     }
        
// }
text:Date | string = ""
lastTimeStamp!:Date
updateSavedDate(timestamp:firebase.firestore.Timestamp){
  debounce(()=> {
  this.saving(false)
    this.lastTimeStamp = timestamp.toDate()
    this.text = timestamp.toDate()
    this.snackbar=true
     },2000)()
}
saving(bool:boolean){
  
    this.text = bool?'Saving':this.lastTimeStamp
    this.snackbar=true
  
    
}
}
 </script>   

 <style lang="scss">
 .guide-snackbar{
   height: 5vh;
   .v-snack__content{
    color: #404142;
    font-family: "Raleway";
    font-weight:700;
    font-size: 15px;
    color: lighten($color: #404142, $amount: 20);
   }
 }
 </style>