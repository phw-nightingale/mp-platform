import fly from "../../utils/fly";

export default {

  async login(user) {
    const sessionKey = mpvue.getStorageSync('session_key')
    if (typeof sessionKey !== 'undefined' && sessionKey.length !== 0) {
      user.wxToken = sessionKey;
    } else {

    await mpvue.login({
        timeout: 5000,
        success(res) {
          if (res.code) {
            user.str1 = res.code;
          }
        }
      });
    }
    console.log(user)
    // fly.post("/api/sign-in", user).then(result => {
    //   console.log(result.data);
    //   mpvue.setStorage({key: 'session_key', data: result.wxToken});
    //   mpvue.showToast({title: '登录成功', icon: 'none'})
    //   mpvue.switchTab({url: '../../pages/index/main'})
    // }).catch(err => {
    //   console.log(err)
    //   mpvue.showToast({title: '登录失败:' + err, icon: 'none'})
    // });
  },

  logout() {
    return new Promise((resolve, reject) => {

    });
  }


};
