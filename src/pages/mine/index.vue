<template>
  <div class="container">
    <section class="c-header">
      <div class="c-header-1" :style="'background-image: url(' + wxUser.avatarUrl + ')'"></div>
      <div class="c-header-2">
        <div class="c-un">{{wxUser.nickName}}</div>
        <div class="c-sign">
          放下执念，微笑现在。
        </div>
      </div>
    </section>
    <!--
    <section class="c-override">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
    -->
    <div class="line"></div>

    <i-cell-group class="cell">
      <i-cell title="我的课程" is-link></i-cell>
      <i-cell title="我的招聘" is-link url="/pages/dashboard/index"></i-cell>
      <i-cell title="我的话题" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
      <i-cell title="允许通知">
        <switch slot="footer" checked />
      </i-cell>
    </i-cell-group>

    <div class="line"></div>

    <i-cell-group class="cell">
      <i-cell title="我的评论" is-link></i-cell>
      <i-cell title="留言板" is-link url="/pages/dashboard/index"></i-cell>
      <i-cell title="关于..." is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
    </i-cell-group>

    <div class="line-2"></div>

  </div>
</template>

<script>
import userservice from '../../apis/user'

export default {

  components: {

  },

  data () {
    return {
      wxUser: {}
    }
  },

  created () {
    console.log('wxUser:', this.globalData.wxUser)
    let that = this
    if (!this.globalData.wxUser) {
      userservice.getWxUserInfo()
        .then(wxUser => {
          that.wxUser = wxUser
        })
    } else {
      that.wxUser = that.globalData.wxUser
    }
  },

}
</script>

<style scoped>
  .container {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .c-header {
    display: flex;
    padding: 20rpx;
  }

  .c-header-1 {
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    margin-right: 20rpx;
    background: #eee center center;
    background-size: cover;
  }

  .c-header-2 {
    height: 150rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .c-un {
    font-size: 48rpx;
  }

  .c-sign {
    font-size: 24rpx;
    color: #666;
  }

  .c-override {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cell {
    width: 100%;
  }

  .line {
    width: 100%;
    height: 50rpx;
    background-color: #eeeeee;
  }

  .line-2 {
    width: 100%;
    height: 400rpx;
    background-color: #eeeeee;
  }
</style>
