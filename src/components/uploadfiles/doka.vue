<template>
  <v-container>
    <v-layout
      column
      wrap
    >
      <v-flex style="text-align: center">
        <h1>This is as test page</h1>
      </v-flex>
      <v-flex>
        <!-- <Doka
          ref="doka"
          style="height:400px"
          crop-aspect-ratio="1"
          :crop-aspect-ratio-options="cropOptions"
          :src="src"
        /> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Component from "vue-class-component"
import Vue from "vue"
// import { doka } from "./const"
import { DokaModal, DokaOverlay, toURL }from './vue-doka/'

@Component({
    components: { DokaModal, DokaOverlay }
})

export default class Upload extends Vue {
    public name: string = 'demo-modal'
    public src = '@/assets/ACoE.jpeg'
    public cropOptions = [
        {
            label: 'Free',
            value: null
        },
        {
            label: 'Portrait',
            value: 1.5
        },
        {
            label: 'Square',
            value: 1
        },
        {
            label: 'Landscape',
            value: .75
        }
    ]
}
</script>
