<template>
  <div class="container">
    <div class="content">
      <textarea autofocus @input="onTextChange" rows="5" class="textarea" placeholder="输入内容..."></textarea>
    </div>
    <i-button @click="onAddTap" class="btn" type="success" shape="circle" size="middle">添加评论</i-button>
  </div>
</template>

<script>
  import reviewService from '../../apis/review'

export default {
  data () {
    return {
      params: {
        review: {}
      }
    }
  },

  compute: {
    
  },

  components: {

  },

  methods: {
    onTextChange(e) {
      this.params.review.content = e.target.value
    },
    onAddTap() {
      let that = this
      if (this.params.review.content.length === 0) {
        mpvue.showToast({title: '请输入内容', icon: 'none'})
      } else {
        reviewService.addReview(this.params.target, this.params.targetId, this.params.review)
          .then(res => {
            console.log('onAddReviewSuccessed: ', res)
            mpvue.redirectTo({url: '../item/main?target=' + that.params.target + '&id=' + that.params.targetId})
          })
      }
    }
  },

  created () {

  },

  onLoad(params) {
    console.log(params)
    this.params.target = params.target
    this.params.targetId = params.targetId
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
