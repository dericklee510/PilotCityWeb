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
    @Prop({required: true})
    public value!: string;
    @Prop({ default: false})
    public darkMode?: boolean;
    @Prop({ required: true})
    public title!: string;
    @Prop({ required: true})
    public placeholder!: string;
    @Prop()
    public  type!: string
    @Prop()
    public errorMessages: string | string [] = ""
    public xcontent: string = '';
    get content(){
        return this.xcontent
    }
    set content(value: string){
        this.xcontent = value
    }
    public handleInput(){
        this.$emit('input', this.content)
    }
    get errorMessage() {
        return this.errorMessages
    }
    get error(): string{
        if (Array.isArray(this.errorMessage))
            return this.errorMessage.length?this.errorMessage[0]:""
        else {
            return this.errorMessage
        }
    }
}

</script>

