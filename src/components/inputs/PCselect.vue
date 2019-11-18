<template>
  <div
    cols="12"
    class="pc-input"
  >
    <label
      for="citizen-title"
      class="pc-input__label"
    > 
      <h5 v-if="title" class="text-uppercase">
        {{ title }}
      </h5>
      <slot v-else></slot>
    </label>
    <v-select
      @input="handleInput"
      :multiple="multiselect"
      append-icon="mdi-chevron-down"
      flat
      :menu-props="{offsetY: true, 'close-on-click': true, 'offset-overflow':true}"
      height="70px"
      outlined
      :placeholder="placeholder"
      class="pc-input__select"
      background-color="transparent"
      :hide-selected="!multiselect"
      :items="items" 
      :dark="darkMode"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import 'reflect-metadata'
import {Component, Prop} from "vue-property-decorator"


@Component
export default class PCselect extends Vue {
    @Prop({required: true})
    public value!: string;
    @Prop({default: false})
    public darkMode!: boolean;
    @Prop({default: false})
    public multiselect!: boolean;
    @Prop({required: true})
    public title!: string;
    @Prop({required: true})
    public items!: string[];
    @Prop({required: true})
    public placeholder!: string;

    public handleInput(event:any){
        this.$emit('input', event)
    }
}
</script>

