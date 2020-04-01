<template>
  <v-col>
    <v-row
      v-for="(mod, index) in seq"
      :key="mod+index"
      class="mt-2 mb-2"
    >
      <v-btn
        class="mr-3 text-uppercase"
        x-small
        depressed
        :color="color(mod)"
      >
        {{ mod.status }}
      </v-btn>
      <span class="pitch_view__teamtitle3 text-capitalize">
        {{ mod.name }}
      </span>
    </v-row>
  </v-col>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component
export default class ModuleStatus extends Vue{
    @Prop({default:[{status: 'N/A', name: 'default module'}]})
    sequence: Array<Record<'status' | 'name', string | null>> | undefined

    get seq() {
        let seq = this.sequence;
        return seq
    }
    color(mod: Record<'status' | 'name', string>) {
        let msg = mod.status;
        return msg == 'complete'?'green':msg == 'missing'?'red':msg == 'incomplete'?'yellow':'grey'
    }

}
</script>
