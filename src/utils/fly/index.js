import Fly from 'flyio/dist/npm/wx'
import qs from 'qs'

const fly = new Fly()

const host = 'http://192.168.1.107:8080'

fly.config.baseURL = host
fly.config.timeout = 5000

/**
 * 请求拦截器
 */
fly.interceptors.request.use(request => {
  mpvue.showLoading({
    title: '努力请求中...',
    mask: true
  })

  console.log(request)

  if (request.body) {
    request.body = qs.stringify(request.body)
  }

  //添加token...

  request.headers = {
  }

  return request
})

/**
 * 响应拦截器
 */
fly.interceptors.response.use(
  response => {

    mpvue.hideLoading()
    if (response.data.code === 401) {
      //跳转到登录页

    } else if (response.data.code !== 200) {
      mpvue.showToast({title: response.data.msg, icon: 'none'})
      reject(response.data.msg)
    }
    console.log(response.data)
    return response.data
}, err => {
    console.log(err)
    mpvue.hideLoading()
    if (err) {
      return '请求失败'
    }
})

export default fly;
