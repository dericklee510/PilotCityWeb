<template>
      <file-pond
    ref="pond"
    class="filepond"
    name="filepond"
    :labelIdle="html"
    :imagePreviewHeight="170"
    imageCropAspectRatio="1:1"
    :imageResizeTargetWidth="200"
    :imageResizeTargetHeight="200"
    stylePanelLayout="compact circle"
    styleLoadIndicatorPosition="center bottom"
    styleButtonRemoveItemPosition="right"

    v-bind:files="myFiles"
    :imageEditEditor="Doka.create({cropMask:mask})"
  />
</template>

<script lang="ts">
import FilePondProfileInstance from "./utilities/FilePondInstance"
import * as Doka from "../esm/lib/doka.esm.min.js"
import "../esm/lib/doka.min.css";

import Vue from "vue";
import Component from 'vue-class-component';

//temp
import firebase from "firebase"

import * as CONST from "./const"
@Component({
  components:{
    FilePond: FilePondProfileInstance
  }
})
export default class ProfileUpload extends Vue{
  myFiles:any[] = []
  html:string = CONST.ACTION_HTML
  Doka = Doka
  mask = (root:Object, setInnerHTML: (root:Object,html:string)=>Object) => {
        // https://pqina.nl/doka/docs/patterns/api/doka-instance/#setting-the-crop-mask
        setInnerHTML(
          root,
          CONST.MASK_HTML
        );
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
