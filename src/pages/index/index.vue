<template>
  <div class="container">
    <swiper indicator-dots="true"
           interval="5000"
           autoplay="true"
           duration="500"
           class="banner">

      <swiper-item v-for="(item, index) in topNews" :key="item" :item-id="index">
        <a href="../logs/main"><div>{{item}}</div></a>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
  import userservice from "../../apis/user";

  export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      topNews: [1, 2, 3]
    }
  },

  components: {

  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    },
    clickHandle (ev) {
      console.log('clickHandle:', ev)
      // throw {message: 'custom test'}
    }
  },

  created () {
    // let app = getApp()
    let that = this
    userservice.login({phone: '17776304754', password: '199798'})
  }
}
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 200rpx;
  }
</style>
