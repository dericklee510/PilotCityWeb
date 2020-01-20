<template>
  <div
    cols="12"
    class="pc-input"
  >
    <label
      for="citizen-title"
      class="pc-input__label"
    >
      <h5
        class="text-uppercase"
      >
        {{ title }}
      </h5>
    </label>
    <v-select
      v-model="syncValue"
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
      :error-messages="error"
      :dark="darkMode"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import 'reflect-metadata'
import { Component, Prop, PropSync } from 'vue-property-decorator'


@Component
export default class PCselect extends Vue {
    @PropSync('value')
    public syncValue!: string;

    @Prop({ default: false })
    public darkMode!: boolean;

    @Prop({ default: false })
    public multiselect!: boolean;

    @Prop()
    public title!: string;

    @Prop({ required: true })
    public items!: string[];

    @Prop()
    public placeholder!: string;

    @Prop()
    public errorMessages?: string | string []

    get errorMessage() {
        return this.errorMessages
    }

    get error(): string | undefined {
      if (Array.isArray(this.errorMessage)) return this.errorMessage.length ? this.errorMessage[0] : ''

      return this.errorMessage
    }
}
</script>
