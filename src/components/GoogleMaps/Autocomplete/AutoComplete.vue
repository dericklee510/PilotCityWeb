<template>
  <div>
    <label class="pc-input__label">
      <h4 class="text-uppercase">
        {{ `Your Address` }}
      </h4>
    </label>
    <vuetify-google-autocomplete
      id="map"
      ref="address"
      :enable-geolocation="true"
      types=""
      :hide-details="true"
      class="pc-input__autocomplete"
      :error-messages="error"
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
import { Prop, PropSync } from 'vue-property-decorator'

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
    public title?: string;

  @Prop()
  public value?: string

  @Prop()
  public errorMessages?: string | string[] | {errors: string[]}

  get errorMessage() {
      return (this.errorMessages as {errors: string[]}).errors
  }

  get error(): string[] | undefined {
      return this.errorMessage
  }

  address: string | Record<string, any> = ''
  /* eslint-disable-next-line */
  getAddressData(addressData: Record<string, any>, placeResultData: Record<string, any>, id: string) {
      this.address = addressData
      this.$emit('input', this.address)
  }

  created() {
      console.log(this.$refs.address, 'OVER HERE')
  }
}
</script>
