<template>
  <vuetify-google-autocomplete
    id="map"
    ref="address"
    :enable-geolocation="true"
    :dense="dense"
    :filled="filled"
    :label="label"
    classname="form-control"
    placeholder="Please type your address"
    :outlined="outlined"
    :value="address"
    :selection-required="true"
    :error-messages="errorMessages"
    @placechanged="getAddressData"
  />
</template>

<script lang="ts">
import Vue from 'vue'
import 'reflect-metadata'
import Component from 'vue-class-component'
/* eslint-disable-next-line */
import VuetifyGoogleAutocomplete from 'vuetify-google-autocomplete'
import googleMaps from "node_modules/@types/google__maps/"
import { Prop } from 'vue-property-decorator'
Vue.use(VuetifyGoogleAutocomplete, {
  apiKey:process.env.VUE_APP_MAPS_API_KEY
})
@Component({
})
export default class AutoComplete extends Vue {
  created(){
    if(this.value)
      this.address = this.value
  }
    $refs!: {
        vue: Vue;
        element: HTMLInputElement;
        vues: Vue[];
        elements: HTMLInputElement[];
        address: any;
    }
  @Prop()
  public dense?: false;
  @Prop()
  public filled?: false;
  @Prop()
  public label?: "";
  @Prop()
  public title?: string;
  @Prop()
  public value?: string

  @Prop()
  public errorMessages?: string | string[] 
  @Prop()
  outlined?:""
  
  get address(){
    return this.value
  }
  set address(newVal){
    this.$emit('input', newVal)
  }
  /* eslint-disable-next-line */
  getAddressData(addressData: Record<string, any>, placeResultData:googleMaps.PlaceDetailsResult, id: string) {
      this.address = placeResultData.formatted_address

  }
  
}
</script>
