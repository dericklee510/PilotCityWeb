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
    <v-text-field
      v-model="content"
      flat
      height="70px"
      outlined
      :type="type"
      :placeholder="placeholder"
      class="pc-input__textfield"
      background-color="transparent"
      :dark="darkMode"
      hide-selected
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import {Component, Prop} from "vue-property-decorator"


@Component
export default class PCtextfield extends Vue {
    @Prop({type: String})
    public value: string;
    @Prop({type: Boolean, default: false})
    public darkMode: boolean;
    @Prop({type: String, required: true})
    public title!: string;
    @Prop({type: String, required: true})
    public placeholder!: string;
    @Prop({type: String})
    public type!: string;

    public content: string = this.value;
    public handleInput(){
        this.$emit('input', this.content)
    }
}

</script>

