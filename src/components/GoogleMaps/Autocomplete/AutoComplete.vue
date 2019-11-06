<template>
  <div>
    <h2>Your Address</h2>
    <vuetify-google-autocomplete :enable-geolocation="true" types="" ref="address" id="map" classname="form-control" placeholder="Please type your address" v-on:placechanged="getAddressData">
    </vuetify-google-autocomplete>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
import 'reflect-metadata'
import { Prop } from 'vue-property-decorator';

@Component({

})
export default class AutoComplete extends Vue {
  $refs!: {
    vue: Vue,
    element: HTMLInputElement,
    vues: Vue[],
    elements: HTMLInputElement[],
    address: any
  }
  @Prop()
  public value?:string
  address: string | Object = ""

  getAddressData(addressData: Object, placeResultData: Object, id: string) {
    this.address = addressData
    this.$emit('input',this.address)
  }
}
</script>
