<template>
  <v-row>
    <span class="mt-2 mb-2"><v-btn
      x-small
      depressed
      :color="green"
    >{{ isComplete }}</v-btn><span class="pitch_view__teamtitle3">{{ item }}</span></span>
  </v-row>
</template>
<script lang="ts">
import Vue from "vue";
import 'reflect-metadata'
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
@Component
export default class CompletionItem extends Vue {
    @Prop({required:true}) entry!:string | boolean
    @Prop({required:true}) item!:string
    @Prop() validation!:((val:any)=>'complete'|'incomplete'|'missing')
    get isComplete(){
        if(typeof this.entry === "boolean")
            return this.entry?'complete':'missing'
        return this.entry?this.entry.split(' ').length>2?'complete':'incomplete':'missing'
    }
    get color(){
        return this.isComplete === 'complete'?'green':this.isComplete === 'incomplete'?'yellow':'orange'
    }
}
</script>