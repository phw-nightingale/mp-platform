<template>
  <div class="container">
    <div class="header">
      <div class="avatar"></div>
      <div class="un">{{review.createUser}}</div>
      <div class="ct">{{review.createTime}}</div>
    </div>
    <div class="content">
      {{review.content}}
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {

      }
    },

    props: {
      review: {
        type: Object,
        required: true
      }
    },

    created() {
      console.log('onReviewItemCreated: ', this.review)
    }

  };
</script>

<style scoped>
  .container {
    padding: 20rpx 0 0 0;
    border-top: 1px solid #aaa;
  }

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  }
.avatar {
  height: 50rpx;
  width: 50rpx;
  border-radius: 50%;
  background: #eee center center no-repeat;
  background-size: cover;
  margin-right: 20rpx;
}

  .un {
    font-size: 28rpx;
    color: #666;
    margin-right: 20rpx;
  }
  
  .ct {
    font-size: 28rpx;
    color: #666;
  }
  
  .content {
    width: 100%;
    margin: 20rpx 0;
    font-size: 28rpx;
    color: #666;
  }
</style>
