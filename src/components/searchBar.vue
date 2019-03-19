<template>
    <div class="container">
      <input type="text" v-model="keyword" placeholder="搜索">
    </div>
</template>

<script>
  export default {
    data() {
      return {
        keyword: ''
      }
    }
  };
</script>

<style scoped>
  .container {
    background-color: #00E9A3;
    padding: 20rpx 30rpx;
  }

  .container > input {
    height: 70rpx;
    text-align: center;
    background-color: aliceblue;
    border-radius: 5rpx;
    font-size: 32rpx;
    color: #aaa;
    width: 100%;
  }
</style>
