<template>
  <div>
    <label
      class="pc-input__label"
    > 
      <h4 class="text-uppercase">
        {{ `Your Address` }}
      </h4>
    </label>
    <vuetify-google-autocomplete
      id="map"
      ref="address"
      :enable-geolocation="true"
      types=""
      class="pc-input__autocomplete"
      classname="form-control"
      placeholder="Please type your address"
      @placechanged="getAddressData"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
/* eslint-disable-next-line */
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
import 'reflect-metadata'
import { Prop } from 'vue-property-decorator'

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
  @Prop()
    public value?: string
  address: string | Record<string, any> = ""
  /* eslint-disable-next-line */
  getAddressData(addressData: Record<string, any>, placeResultData: Record<string, any>, id: string) {
      this.address = addressData
      this.$emit('input',this.address)
  }
}
</script>
