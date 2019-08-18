<template>
  <file-pond ref="pond" class="filepond" name="filepond" :label-idle="html" :image-preview-height="170" image-crop-aspect-ratio="1:1" :image-resize-target-width="200" :image-resize-target-height="200" style-panel-layout="compact circle" style-load-indicator-position="center bottom" style-button-remove-item-position="right" :server="{process}" :files="ProfilePicture" :image-edit-editor="Doka.create({cropMask:mask})" />
</template>

<script lang="ts">
//
import FilePondProfileInstance from "./utilities/FilePondInstance"
import * as Doka from "../esm/lib/doka.esm.min.js"
import "../esm/lib/doka.min.css"

import Vue from "vue"
import Component from 'vue-class-component'


import filepond from "filepond"
import * as CONST from "./const"
import { StorageStore, AuthStore } from '@/store'
import { process, createProfilePictureObservable } from './wrapper';
import { getDownloadURL } from 'rxfire/storage/';
import { switchMap, map, tap } from 'rxjs/operators';
import { from, empty } from 'rxjs';




@Component({
  components: {
    FilePond: FilePondProfileInstance
  },
  subscriptions() {
    return {
      ProfilePicture: createProfilePictureObservable()
    }
  }
})
export default class ProfileUpload extends Vue {
  ProfilePicture: File[] = []
  html: string = CONST.ACTION_HTML
  Doka = Doka
  mask = (root: Record<string, any>, setInnerHTML: (root: Record<string, any>, html: string) => Record<string, any>) => {
    // https://pqina.nl/doka/docs/patterns/api/doka-instance/#setting-the-crop-mask
    setInnerHTML(
      root,
      CONST.MASK_HTML
    )
  }
  process: filepond.server.process = process
}
</script>

<style lang="scss">
.filepond--drop-label {
  color: #4c4e53;
}
.filepond--label-action {
  text-decoration-color: #babdc0;
}
.filepond--panel-root {
  background-color: #edf0f4;
}
.filepond {
}
.filepond--root {
  width: 170px;
  margin: 0 auto;
}
</style>
