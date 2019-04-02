import fly from "../../utils/fly";

export default {

  login(user) {
    return new Promise((resolve, reject) => {
      if (typeof user === 'undefined' || user === null) {
        const sessionKey = mpvue.getStorageSync('session_key')
        console.log(sessionKey)
        if (typeof sessionKey !== 'undefined' && sessionKey.length !== 0) {
          console.log('session_key登录')
          user = {}
          user.wxToken = sessionKey;
          fly.post("/api/sign-in", user).then(result => {
            console.log(result.data);
            mpvue.setStorage({key: 'session_key', data: result.data.wxToken});
            resolve(result.data)
          }).catch(err => {
            reject('登录失败:' + err)
          });
        } else {
          reject('参数无效')
        }
      } else {
        if (Object.keys(user).length === 0) {
          reject('请输入手机号和密码')
        }
        const phone = user.phone;
        const password = user.password
        if (phone.length === 0 || password.length === 0) {
          reject('请输入手机号和密码')
        }
        console.log('手机号登录')
        mpvue.login({
          timeout: 5000,
          success(res) {
            if (res.code) {
              user.str1 = res.code;
              fly.post("/api/sign-in", user).then(result => {
                console.log(result.data);
                mpvue.setStorage({key: 'session_key', data: result.data.wxToken});
                resolve(result.data)
              }).catch(err => {
                reject('登录失败：' + err)
              });
            }
          }
        });
      }
    })
  },

  getWxUserInfo() {
    return new Promise((resolve, reject) => {
      mpvue.getUserInfo({
        success(res) {
          //console.log('getWxUserInfo:', res)
          if (res.errMsg === 'getUserInfo:ok') {
            resolve(res.userInfo)
          } else {
            reject(res.errMsg)
          }
        },
        fail(err) {
          reject(err)
        }
      })
    })
  },

  async getCreateUser(userid) {
    let res = await fly.get('/api/users/' + userid)
    if (res.code === 200) {
      return res.data
    } else {
      throw Error(res.msg)
    }
  },


  logout() {
    return new Promise((resolve, reject) => {

    })
  }

};
