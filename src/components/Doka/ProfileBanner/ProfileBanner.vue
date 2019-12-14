<template>
  <div>
    <file-pond
      ref="pond"
      name="test"
      label-idle="Upload Here"
      accepted-file-types="image/jpeg, image/png"
      image-edit-instant-edit="true"
      image-crop-aspect-ratio=".223"
      :image-edit-editor="Doka.create()"
    />
  </div>

  <!-- <file-pond ref="pond" class="filepond" name="filepond" :label-idle="html" :image-preview-height="170" image-crop-aspect-ratio="1:1" :image-resize-target-width="200" :image-resize-target-height="200" style-panel-layout="compact circle" style-load-indicator-position="center bottom" style-button-remove-item-position="right" :server="{process, load}" :files="ProfilePicture" :image-edit-editor="Doka.create({cropMask:mask})" /> -->
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import FilePondProfileInstance from '../utilities/FilePondInstance'
import * as Doka from '../esm/lib/doka.esm.min.js'
@Component({
    components: {
        FilePond: FilePondProfileInstance
    }
})
export default class ProfileBanner extends Vue {
    Doka = Doka
}
</script>
<style lang="scss" scoped>
@media (min-width: 40em) {
    .filepond--item {
        width: calc(50% - .5em);
    }
}

@media (min-width: 50em) {
    .filepond--item {
        width: calc(33.33% - .5em);
    }
}
</style>
