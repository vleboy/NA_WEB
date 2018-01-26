<template>
  <div class="video" v-show="showVideo">
    <div class="video-box">
      <video :src="showUrl" autoplay controls></video>
      <span @click="closeView">X</span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'video',
  computed: mapGetters([
    'showVideo',
    'showUrl'
  ]),
  methods: mapActions([
    'closeView'
  ])
}
</script>

<style lang="less" scoped>
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 1000;
  .video-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    video {
      width: 100%
    }
    span {
      position: absolute;
      top: 0;
      right: -40px;
      font-size: 40px;
      color: #fff;
      background: #000;
      cursor: pointer
    }
  }
}
</style>

