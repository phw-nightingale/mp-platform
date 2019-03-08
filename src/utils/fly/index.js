import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()

const host = 'http://localhost:8080'

/**
 * 请求拦截器
 */
fly.interceptors.request.use(request => {
  mpvue.showLoading({
    title: '努力请求中...',
    mask: true
  })

  console.log(request)

  //添加token...

  request.headers = {
    Authorization: ''
  }

  return request
})

/**
 * 响应拦截器
 */
fly.interceptors.response.use(
  response => {

    mpvue.hideLoading()
    if (response.data.code !== 200) {
      mpvue.showToast(response.data.msg)
    }
    
    return response.data
}, err => {
    console.log(err)
    mpvue.hideLoading()
    if (err) {
      return '请求失败'
    }
})

fly.config.baseURL = host

export default fly;
