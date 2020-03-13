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
      :value="value"
      text
      height="70px"
      outlined
      :type="type"
      :placeholder="placeholder"
      class="pc-input__textfield"
      background-color="transparent"
      :dark="darkMode"
      hide-selected
      :error-messages="error"
      :readonly="disabled"
      @input="handleInput"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'reflect-metadata'
import {
    Component,
    Prop,
    Watch,
    PropSync
} from 'vue-property-decorator'


@Component
export default class PCtextfield extends Vue {
    @Prop({ required: true })
    public value!: string;

    @Prop({ default: false })
    public darkMode?: boolean;

    @Prop({ required: false })
    public title!: string;

    @Prop()
    public placeholder!: string;

    @Prop()
    public type!: string;

    @Prop()
    public errorMessages?: string | string []

    @Prop({ default: false })
    public disabled!: boolean;

    public handleInput(new_input: string) {
        this.$emit('input', new_input)
    }

    get errorMessage() {
        return this.errorMessages
    }

    get error(): string | undefined {
      if (Array.isArray(this.errorMessage)) return this.errorMessage.length ? this.errorMessage[0] : ''

      return this.errorMessage
    }
}

</script>
