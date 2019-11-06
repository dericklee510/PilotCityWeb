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
      :error-messages="error"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import 'reflect-metadata'
import {Component, Prop} from "vue-property-decorator"


@Component
export default class PCtextfield extends Vue {
    @Prop()
    public value?: string;
    @Prop({ default: false})
    public darkMode?: boolean;
    @Prop({ required: true})
    public title!: string;
    @Prop({ required: true})
    public placeholder!: string;
    @Prop()
    public  type!:string
    @Prop()
    public errorMessages:string | string [] = ""

    public content?: string = this.value;
    public handleInput(){
        this.$emit('input', this.content)
    }
    get error():string{
      var error_prop = this.errorMessages
      if (Array.isArray(error_prop))
        return error_prop.length?error_prop[0]:""
      else {
        return error_prop
      }
    }
}

</script>

