<template>
  <div>
    <h2>Your Address</h2>
    <vuetify-google-autocomplete
      id="map"
      ref="address"
      :enable-geolocation="true"
      types=""
      classname="form-control"
      placeholder="Please type your address"
      @placechanged="getAddressData"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'

@Component({
})
export default class AutoComplete extends Vue {
    $refs!: {
        vue: Vue;
        element: HTMLInputElement;
        vues: Vue[];
        elements: HTMLInputElement[];
        address: any;
    }


    address: string | Record<string, any> = ""
    getAddressData(addressData: Record<string, any>, placeResultData: Record<string, any>, id: string) {
        this.address = addressData
    }
}
</script>
