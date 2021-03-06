import Vue from 'vue'
import App from './App'
import fly from './utils/fly'
import 'mpvue-weui/src/style/weui.css'

Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$fly = fly

const app = new Vue(App)
app.$mount()

Vue.prototype.globalData = getApp().globalData
