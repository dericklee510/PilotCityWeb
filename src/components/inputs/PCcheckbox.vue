<template>
  <div class="pc-checkbox">
    <v-checkbox
      v-for="(option,index) in options"
      :key="option+index"
      v-model="selected"
      :value="option"
      :label="option"
      hide-details
    />
    <!-- <v-row align="center"> -->
    <v-checkbox
      :id="'other'"
      v-model="otherChecked"
      hide-details
    >
      <template v-slot:append>
        <v-text-field
          v-model="otherInput"
          style="padding: 0; margin: 0"
          class="pc-input__textfield"
          background-color="transparent"
          :disabled="!otherChecked"
          dark
          placeholder="Other"
          title=""
        />
      </template>
    </v-checkbox>
    <!-- </v-row> -->
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import 'reflect-metadata'
import { Component, Prop, Watch } from 'vue-property-decorator'

@Component
export default class PCcheckbox extends Vue {
  @Prop()
    public checked!: string[]

  @Prop()
  public options!: any[]

  @Prop({ default: false })
  public other!: boolean

  public otherChecked: boolean = false

  public otherInput: string = ''

  public selected: any[] = []

  get checkedOptions() {
      if (this.other && this.otherChecked) {
          return [
        ...this.selected,
              this.otherInput
          ]
      }
      return this.selected
  }

  @Watch('checkedOptions')
  onCheckedOptionsChanged(newval: any[]) {
      this.$emit('input', newval)
  }
}
</script>
