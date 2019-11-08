<template>
  <div
    cols="12"
    class="pc-input"
  >
    <label
      for="citizen-title"
      class="pc-input__label"
    > 
      <h5 class="text-uppercase">
        {{ title }}
      </h5>
    </label>
    <v-select
      v-model="content"
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
import {Component, Prop} from "vue-property-decorator"


@Component
export default class PCselect extends Vue {
    @Prop({type: String, required: true})
    public value!: string;
    @Prop({type: Boolean, default: false})
    public darkMode!: boolean;
    @Prop({type: Boolean, default: false})
    public multiselect!: boolean;
    @Prop({type: String, required: true})
    public title!: string;
    @Prop({type: Array, required: true})
    public items!: string[];
    @Prop({type: String, required: true})
    public placeholder!: string;

    public xcontent: string = '';
    get content(){
        return this.xcontent
    }
    set content(value: string){
        this.xcontent = value
    }
    public handleInput(){
        this.$emit('change', this.content)
    }
}
</script>

