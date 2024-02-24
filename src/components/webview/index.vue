<template>
  <van-popup
    closeable
    :close-icon="require('./images/close.png')"
    position="bottom"
    :style="{ height: '100%',width: '100%' }"
    @closed="onCancel"
    @click-overlay="onCancel"
    v-model="showWebWiew">
    <iframe
      frameborder="0"
      hspace="0"
      vspace="0"
      scrolling="auto"
      class="webview"
      :src="url">
    </iframe>
  </van-popup>
</template>

<script>
  import {Popup} from 'vant'

  export default {
    name: "Webview",
    components: {
      vanPopup: Popup
    },
    props: {
      url: {
        type: String
      },
      show: {
        type: Boolean
      }
    },
    data() {
      return {
        showWebWiew: false
      }
    },
    watch: {
      show(val) {
        this.showWebWiew = val
      }
    },
    methods: {
      onCancel() {
        this.showWebWiew = false
        this.$emit('cancel')
      }
    }
  }
</script>

<style scoped lang="less">
  iframe::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  .webview {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    overflow-x: hidden;
    overflow-y: scroll;
    border: none;
    .quit {
      position: absolute;
      right: 1rem;
      top: 1rem;
      border: 1px solid #333;
      width: 1rem;
      height: 1rem;
      border-radius: 1rem;
    }
  }
</style>
