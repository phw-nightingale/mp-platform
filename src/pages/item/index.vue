<template>
  <div class="container">
    <div class="title">{{detail.title}}</div>
    <div class="info">
      <span>{{detail.createUser}}</span>
      &nbsp;&nbsp;
      <span>{{detail.createTime}}</span>
      &nbsp;&nbsp;
      <span>{{detail.category}}</span>
    </div>
    <div class="content" v-html="detail.content">

    </div>
    <div class="review">
      <review-item></review-item>
    </div>
  </div>
</template>

<script>
import courseService from '../../apis/course'
import topicService from '../../apis/topic'
import reviewService from '../../apis/review'
import reviewItem from '../../components/review-item'

export default {
  data () {
    return {
      detail: {}
    }
  },

  components: {
    reviewItem
  },

  methods: {

  },

  created () {
    // let app = getApp()
    let that = this
  },

  onLoad(params) {
    let that = this
    switch (params.target) {
      case 'course':
        courseService.getCourseById(params.id)
          .then(res => {
            that.detail = res
            reviewService.getReviewList(params.target, params.id)
              .then(rep => console.log('onReviewListLoadComplete: ', rep))
              .catch(err => console.log('Error occurred in onReviewListLoad: ', err))
          })
          .catch(err => console.log(err))

        break;
      case 'topic':
        topicService.getTopicById(params.id)
          .then(res => {
            that.detail = res
            reviewService.getReviewList(params.target, params.id)
              .then(rep => console.log('onReviewListLoadComplete: ', rep))
              .catch(err => console.log('Error occurred in onReviewListLoad: ', err))
          })
          .catch(err => console.log(err))

        break;
      default:
        break;
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 20rpx;
  }

  .title {
    width: 100%;
    font-size: 48rpx;
    font-weight: bold;
    margin-bottom: 20rpx;
  }

  .info {
    width: 100%;
    font-size: 28rpx;
    color: #666;
    margin-bottom: 20rpx;
  }

  .content {
    width: 100%;
    font-size: 36rpx;
  }
</style>
