<template>
  <div class="container">
    <nav class="nav">
      <ul>
        <li><a href=""><span></span></a></li>
        <li><a href=""><span></span></a></li>
        <li><a href=""><span></span></a></li>
      </ul>
    </nav>
    <div class="btn" @click="handleShowBtnTap">
      <i-icon type="add" size="28" color="#fff" />
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        isOpen: false
      }
    },

    methods: {
      handleShowBtnTap(e) {
        let that = this
        console.log(e)
      }
    }

  };
</script>

<style scoped>
  .container {
    height: 75rpx;
    width: 75rpx;
    position: fixed;
    bottom: 20rpx;
    right: 20rpx;
    border-radius: 50%;
    background-color: #00E9A3;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    line-height: 75rpx;
    box-shadow: 5rpx 5rpx 2rpx #666;
  }
</style>
