<template>
  <div class="container">
    <a :href="url">
      <div class="btn" id="btn" :style="btnStyle" @click="handleShowBtnTap">
        <i-icon type="add" size="28" color="#fff" />
      </div>
    </a>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isOpen: false,
        btnStyle: ''
      }
    },

    props: {
      url: {
        type: String,
        required: true
      }
    },

    methods: {
      handleShowBtnTap() {
        // let that = this
        // if (that.isOpen) {
        //   that.btnStyle = 'animation: btnRecovery 500ms;animation-fill-mode: forwards;'
        //   that.isOpen = false
        // } else {
        //   that.btnStyle = 'animation: btnRotate 500ms;animation-fill-mode: forwards;'
        //   that.isOpen = true
        // }
      }
    }

  };
</script>

<style scoped>
  .container {
    height: auto;
    position: fixed;
    bottom: 20rpx;
    right: 20rpx;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0;
  }

  .nav {
    width: 175rpx;
    height: 250rpx;
    background: #00E9A3;
    margin-bottom: 20rpx;
    color: #fff;
    font-size: 24rpx;
  }

  .nav li {
    margin: 10rpx 0;
    border-bottom: 1rpx #fff solid;
  }

  .btn {
    height: 75rpx;
    width: 75rpx;
    line-height: 75rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #00E9A3;
    border-radius: 50%;
  }

  @keyframes btnRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(45deg);
    }
  }

  @-webkit-keyframes btnRotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(45deg);
    }
  }

  @-webkit-keyframes btnRecovery {
    0% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }

  @keyframes btnRecovery {
    0% {
      transform: rotate(45deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
  
  @keyframes showNav {
    0% {
      width: 0;
      height: 0;
    }

    100% {
      width: 50rpx;
      height: 100rpx;
    }
  }

</style>
