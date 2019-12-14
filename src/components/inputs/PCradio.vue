<template>
  <div class="pc-radio">
    <v-radio />
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class PCradio extends Vue {
    @Prop({ required: true })
    checked!: boolean;

    public xcontent = false;

    get content() {
        return this.xcontent
    }

    set content(value: boolean) {
        this.content = value
    }

    private handleChange(e: any) {
        this.content = this.checked
        this.$emit('change', this.content)
    }
}
</script>
