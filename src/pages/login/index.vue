<template>
  <div class="container">
    <i-input class="input" @change="onPhoneChange" v-model="user.phone" type="number" mode="wrapped" maxlength="11" placeholder="输入手机号"/>
    <i-input class="input" @change="onPassChange" v-model="user.password" type="password" mode="wrapped" maxlength="11" placeholder="输入密码"/>
    <i-button @click="onLoginClick" class="input" type="success" shape="circle" size="middle" open-type="getUserInfo" @getuserinfo="onGetUserInfo">进入</i-button>
    <div class="href-container"><a href="../register/main">立即注册</a>&nbsp;&nbsp; | &nbsp;&nbsp;<a href="../repass/main">忘记密码？</a></div>
  </div>
</template>

<script>
  import userservice from "@/apis/user";

  export default {
  data () {
    return {
      user: {},
    }
  },

  components: {},

  methods: {
    onPhoneChange (ev) {
      this.user.phone = ev.target.detail.value
    },
    onPassChange (ev) {
      this.user.password = ev.target.detail.value
    },
    onLoginClick() {
      let that = this
      userservice.login(that.user).then(result => {
        that.globalData.user = result
        mpvue.showToast({title: '登录成功', icon: 'none'})
        mpvue.switchTab({url: '../index/main'})
      }).catch(err => mpvue.showToast({title: '错误: ' + err, icon: 'none'}))
    },
    onGetUserInfo(e) {
      this.globalData.wxUser = JSON.parse(e.target.rawData)
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
