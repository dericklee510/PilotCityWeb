<template>
  <v-col cols="10" lg="12">
    <v-row
      v-for="(obj, mod, index) in sequence"
      :key="index+mod"
      no-gutters
      class="mt-2 mb-2"
    >
      <v-col >
        <span class="module-status__row">
          <v-btn
            class="mr-3 text-uppercase module-status__button"
            x-small
            depressed
            :color="color(obj)"
          >
            {{ obj.status }}
          </v-btn>
          <span class="pitch_view__teamtitle3 text-capitalize">
            {{ mod }}
          </span>
        </span>
      </v-col>
    </v-row>
  </v-col>
</template>
<style lang="scss">
  .module-status__row{
    display: flex;
    .module-status__button{
      height: 40px;
      width: 90px;
    }
    .pitch_view__teamtitle3{
      max-width: 100%;
      flex: 1 0 auto;
      word-wrap: break-word;
    }
  }
</style>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'
import {AutoAppKeys, AutoAppValue, assignValidator, assignWeights, getCompletion} from '../utils'

@Component
export default class ModuleStatus extends Vue{
    @Prop()
    sequence: Record<AutoAppKeys, AutoAppValue> | undefined
    color(mod: Record<'status' | 'name', string>) {
        let msg = mod.status;
        return msg == 'complete'?'green':msg == 'missing'?'red':msg == 'incomplete'?'yellow':'grey'
    }

}
</script>
