<template>
  <div
    cols="12"
    class="pc-input"
  >
    <label
      for="citizen-title"
      class="pc-input__label"
    > 
      {{ title }}
    </label>
    <v-text-field
      flat
      height="70px"
      outlined
      :placeholder="placeholder"
      class="pc-input__textfield"
      background-color="transparent"
      hide-selected
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component, Prop} from "vue-property-decorator"


@Component
export default class PCtextfield extends Vue {
    @Prop({type: String, required: true})
    public title!: string;
    @Prop({type: String, required: true})
    public placeholder!: string;
}
</script>

