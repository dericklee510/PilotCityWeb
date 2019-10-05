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
    <v-select
      id="citizen-title"
      append-icon="mdi-chevron-down"
      flat
      height="70px"
      outlined
      :placeholder="placeholder"
      class="pc-input__select"
      background-color="transparent"
      hide-selected
      :items="items" 
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component, Prop} from "vue-property-decorator"


@Component
export default class PCselect extends Vue {
    @Prop({type: String, required: true})
    public title!: string;
    @Prop({type: Array, required: true})
    public items!: string[];
    @Prop({type: String, required: true})
    public placeholder!: string;
}
</script>

