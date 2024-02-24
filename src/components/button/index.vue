<template>
  <div class="cmp_button_wrap">
    <button
      class="cmp_button"
      :class="{disable:disable==true}"
      :style="btnStype"
      @click="handleClick">
      {{text}}
      <i
        class="cmp_button_dot"
        v-show="(dot*1)>0">{{dot}}</i>
    </button>
  </div>
</template>

<script>
  export default {
    name: "Button",
    props: {
      text: {
        type: String,
        default: '确定'
      },
      width: {
        type: String,
        default: '6.5rem'
      },
      color: {
        type: String,
        default: '#FFC900'
      },
      bg: {
        type: String,
        default: '#333'
      },
      top: {
        type: String,
        default: '0'
      },
      bottom: {
        type: String,
        default: '0'
      },
      disable: {
        type: Boolean,
        default: false
      },
      dot: {
        type: [Number],
        default: 0
      }
    },
    data() {
      return {
        clicked: false
      }
    },
    computed: {
      btnStype() {
        return {
          backgroundColor: this.bg,
          color: this.color,
          width: this.width,
          marginTop: this.top,
          marginBottom: this.bottom,
          letterSpacing: this.text.length > 2 ? '0.02rem' : '0.1rem'
        }
      }
    },
    methods: {
      handleClick() {

        if (this.disable) return

        if (this.clicked) {
          return;
        }
        this.clicked = true;
        this.$emit('click')
        setTimeout(() => {
          this.clicked = false;
        }, 1000);
      }
    }
  }
</script>

<style scoped lang="less">
  .cmp_button_wrap {
    width: 100%;
    text-align: center;
    .cmp_button {
      width: 6.5rem;
      height: 1.12rem;
      background-color: #333;
      border-radius: 1rem;
      color: #FFC900;
      font-size: 0.32rem;
      letter-spacing: 0.1rem;
      font-weight: bold;
      &.disable {
        opacity: 0.5;
        &:active {
          opacity: 0.4;
        }
      }
      &:active {
        opacity: 0.9;
      }
    }
    .cmp_button_dot {
      min-width: 0.32rem;
      height: 0.32rem;
      background-color: #FF3131;
      font-size: 0.2rem;
      line-height: 0.32rem;
      text-align: center;
      border-radius: 0.32rem;
      padding: 0 0.08rem;
    }
  }
</style>
