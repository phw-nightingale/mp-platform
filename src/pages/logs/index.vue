<template>
  <div class="container">
    <i-input class="input" @change="onUnChange" v-model="user.username" type="text" mode="wrapped" maxlength="11" placeholder="输入用户名"/>
    <i-input class="input" @change="onPhoneChange" v-model="user.phone" type="number" mode="wrapped" maxlength="11" placeholder="输入手机号"/>
    <i-input class="input" @change="onPassChange" v-model="user.password" type="password" mode="wrapped" maxlength="11" placeholder="输入密码"/>
    <i-button @click="onLoginClick" class="input" type="success" shape="circle" size="middle" open-type="getUserInfo" @getuserinfo="onGetUserInfo">确认</i-button>
  </div>
</template>

<script>
  import userService from "@/apis/user";

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
      onUnChange(e) {
        this.user.username = e.target.detail.value
      },
      onLoginClick() {
        let that = this
        userService.signUp(that.user)
          .then(res => {
            mpvue.showToast({title: res, icon: 'none'})
            mpvue.redirectTo({url: '../login/main'})
          })
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
</style>
