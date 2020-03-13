<template>
  <video-player
    ref="player"
    v-bind="attrs"
    :options="options"
    v-on="listeners"
  />
</template>

<script>
import { videoPlayer } from 'vue-video-player'
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from 'vue-property-decorator';
@Component({
    components:{
        videoPlayer
    },
  props: {
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
//   data() {
//     return {
//       player: null
//     };
//   },
//   mounted() {
//     this.player = videojs(
//       this.$refs.videoPlayer,
//       this.options,
//       function onPlayerReady() {
//         console.log("onPlayerReady", this);
//       }
//     );
//   },
   computed: {
    listeners() {
      const { ...listeners } = this.$listeners;
      return listeners;
    },
    attrs() {
      const { ...attrs } = this.$attrs;
      return attrs;
    }
  },
  beforeDestroy() {
      // console.log(this.$refs.player)
    this.$refs.player.nativeView.destroy();
  }
})
export default class VideoPlayer extends Vue {

}
</script>