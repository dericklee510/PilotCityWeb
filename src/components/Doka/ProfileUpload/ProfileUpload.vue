<template>
  <file-pond ref="pond" class="filepond" name="filepond" :labelIdle="html" :imagePreviewHeight="170" imageCropAspectRatio="1:1" :imageResizeTargetWidth="200" :imageResizeTargetHeight="200" stylePanelLayout="compact circle" styleLoadIndicatorPosition="center bottom" styleButtonRemoveItemPosition="right" :server="{process,load}" v-bind:files="myFiles" :imageEditEditor="Doka.create({cropMask:mask})" />
</template>

<script lang="ts">
//
import FilePondProfileInstance from "./utilities/FilePondInstance"
import * as Doka from "../esm/lib/doka.esm.min.js"
import "../esm/lib/doka.min.css";

import Vue from "vue";
import Component from 'vue-class-component';


import filepond from "filepond"
import * as CONST from "./const"
import { StorageStore, AuthStore } from '@/store';




@Component({
  components: {
    FilePond: FilePondProfileInstance
  }
})
export default class ProfileUpload extends Vue {
  get ProfilePicture(): filepond.ServerFileReference[] {
    if (AuthStore.user && AuthStore.user.photoURL)
      return [{
        source: AuthStore.user.photoURL,
        options: { type: 'local' }
      }]
    return []
  }
  html: string = CONST.ACTION_HTML
  Doka = Doka
  mask = (root: Object, setInnerHTML: (root: Object, html: string) => Object) => {
    // https://pqina.nl/doka/docs/patterns/api/doka-instance/#setting-the-crop-mask
    setInnerHTML(
      root,
      CONST.MASK_HTML
    );
  }
  process: filepond.server.process = async (fieldName, file, metadata, load, error, progress, abort) => {
    let uploadTask = StorageStore.uploadProfilePicture(file)
    uploadTask.on("state_changed", snapshot => {
      progress(true, snapshot.bytesTransferred, snapshot.totalBytes)
    }),
      (error: any) => {
        console.log(error)
        error("Upload error")
      },
      async () => {
        load(await uploadTask.snapshot.ref.getDownloadURL())
      }
    return {
      abort: () => {
        uploadTask.cancel()
        abort()
      }
    }
  }
  load: filepond.server.load = (source, load, error, progress, abort, headers) => {
    var myRequest = new Request(source);
    fetch(myRequest).then(function (response) {
      response.blob().then(function (myBlob) {
        load(new File([myBlob], 'Profile_Image'))
      });
    });
  }
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
  // border-radius: 100px;
}
/**
 * Page Styles
 */
.filepond--root {
  width: 170px;
  margin: 0 auto;
}
</style>
