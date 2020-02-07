<template>
  <span>
    <slot :setNext="setNext" />
  </span>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'


@Component({
  components:{

  }
})
export default class NextNode extends Vue{
async setNext<CB>(callback: (...args: any[]) => Promise<CB>,){
    await callback()
    this.$emit('CallbackComplete')
}
}
</script>