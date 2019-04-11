<template>
  <div class="container">
    <div class="content">
      <textarea autofocus rows="5" class="textarea" placeholder="输入内容..."></textarea>
    </div>
    <i-button @click="onAddTap" class="btn" type="success" shape="circle" size="middle">添加评论</i-button>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  compute: {
    
  },

  components: {
  },

  methods: {
    onAddTap() {

    }
  },

  created () {

  },

  onLoad(params) {
    console.log(params)
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
    padding: 0;
  }
  .content {
    width: 100%;
  }
  .textarea {
    padding: 20rpx;
    width: 100%;
    font-size: 32rpx;
  }
  .btn {
    width: 100%;
  }
</style>
