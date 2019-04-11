<template>
  <div class="container">
    <div class="title">{{detail.title}}</div>
    <div class="info">
      <span>{{detail.createUser}}</span>
      &nbsp;&nbsp;
      <span>{{detail.createTime}}</span>
      &nbsp;&nbsp;
      <span>{{detail.category === null ? '' : detail.category}}</span>
    </div>
    <div class="content" v-html="detail.content">

    </div>
    <div class="review">
      <review-item v-for="(item, idx) in reviewList" :key="idx" :review="item"></review-item>
      <i-load-more :tip="botTip" :loading="isLoad" />
    </div>
    <hover-toobar :url="'../../pages/addreview/main?targetId=' + detail.id + '&target=' + target"></hover-toobar>
  </div>
</template>

<script>
import courseService from '../../apis/course'
import topicService from '../../apis/topic'
import reviewService from '../../apis/review'
import reviewItem from '../../components/review-item'
import hoverToobar from '../../components/hoverToolbar'

export default {

  data () {
    return {
      detail: {},
      reviewList: [],
      botTip: '没有更多了',
      isLoad: false,
      target: ''
    }
  },

  components: {
    reviewItem, hoverToobar
  },

  methods: {

  },

  created () {
    // let app = getApp()
    let that = this
  },

  onLoad(params) {
    let that = this
    that.target = params.target
    switch (params.target) {
      case 'course':
        courseService.getCourseById(params.id)
          .then(res => {
            that.detail = res
            reviewService.getReviewList(params.target, params.id)
              .then(rep => {
                that.reviewList = rep
                console.log('onReviewListLoadComplete: ', rep)
              })
          })

        break;
      case 'topic':
        topicService.getTopicById(params.id)
          .then(res => {
            that.detail = res
            reviewService.getReviewList(params.target, params.id)
              .then(rep => {
                that.reviewList = rep
                console.log('onReviewListLoadComplete: ', rep)
              })
          })

        break;
      default:
        console.log('Unknown target: ', params.target)
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
    overflow: hidden;
  }

  .review {
    width: 100%;
    margin-top: 20rpx;
  }

</style>
