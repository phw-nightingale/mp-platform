<template>
  <div class="container">
    <a :href="'../item/main?id=' + topic.id + '&target=topic'">
    <div class="title">{{topic.title}}</div>
    </a>
    <div class="bot-cont">
      <div class="cont-l">
        <img class="header" :src="headImage" alt=""> &nbsp;&nbsp;
        <span class="timer">{{topic.createTime}}</span>
      </div>
      <div class="cont-r">
        <img src="../../static/images/view.png" alt=""> <span>&nbsp; {{0}} &nbsp;&nbsp;</span>
        <img src="../../static/images/comment.png" alt=""> <span>&nbsp; {{reviewCount}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import reviewService from '../apis/review'
  import userService from '../apis/user'

  export default {

    data() {
      return {
        headImage: "../../static/images/user.png",
        reviewCount: 0
      }
    },
    props: {
      topic: {
        type: Object,
        required: true
      },
      style: {
        type: String,
        required: false
      }
    },

    created() {
      let that = this
      userService.getCreateUser(that.topic.createUserId)
        .then(res => {
          that.topic.createUserInfo = res
          that.headImage = res.str1
        })
      reviewService.getReviewList('topic', that.topic.id)
        .then(res => {
          that.topic.reviewList = res
          that.reviewCount = res.length
        })
    }

  };
</script>

<style scoped>
  .container {
    padding: 20rpx;
    width: 100%;
    justify-content: space-between;
    align-items: flex-start;
    border-top: 1rpx solid #aaa;

  }

  .title {
    font-size: 36rpx;
    font-weight: normal;
    margin-bottom: 20rpx;
  }

  .bot-cont {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cont-l {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  .timer {
    font-size: 32rpx;
    color: #aaa;
  }

  .header {
    height: 50rpx;
    width: 50rpx;
    border-radius: 50%;
    background: #aaaaaa center center no-repeat;
    background-size: cover;
  }

  .cont-r {
    font-size: 35rpx;
    color: #aaa;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .cont-r > img {
    width: 35rpx;
    height: 35rpx;
  }
</style>
