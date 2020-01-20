<template>
  <v-row no-gutters>
    <v-col cols="12">
      <v-select />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component, Prop} from 'vue-property-decorator'

import {PCselect} from '@/components/inputs'
@Component({
    components: {
        select :PCselect,
    }
})
export default class Switcher extends Vue {
    
}
</script>