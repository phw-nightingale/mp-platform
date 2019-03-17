<template>
  <div class="container">
    <i-input class="input" :value="user.phone" type="number" mode="wrapped" placeholder="输入手机号" />
    <i-input class="input" :value="user.password" type="password" mode="wrapped" placeholder="输入密码" />
    <i-button @click="handleLoginClick" class="input" type="success" shape="circle" size="middle">进入</i-button>
    <div class="href-container"><a href="../register/main">立即注册</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../repass/main">忘记密码？</a></div>
  </div>
</template>

<script>
import card from '@/components/card'
import userservice from '@/apis/user'

export default {
  data () {
    return {
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      },
      user: {}
    }
  },

  components: {
    card
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
    },
    handleLoginClick() {
      let that = this
      userservice.login(that.user).then(result => {
        that.globalData.user = result
        mpvue.showToast({title: '登录成功', icon: 'none'})
      }).catch(err => mpvue.showToast({title: '错误: ' + err, icon: 'none'}))
    }
  },

  created () {
    // let app = getApp()
    let that = this
  }
}
</script>

<style scoped>
  .container {
    padding: 2rem 0.5rem;
  }

  .input {
    width: 100%;
  }

  .href-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 28rpx;
  }

</style>
