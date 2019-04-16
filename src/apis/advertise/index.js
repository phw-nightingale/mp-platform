import fly from '../../utils/fly'

export default {

  async getListByPage(page) {

    let res = await fly.get('/api/advertises', page)
    if (res.code === 200) {
      let list = res.data.list
      if (list.length !== 0) {
        for (let idx in list) {
          const item = list[idx]
          //console.log(item)
          item.target = 'advertise'
        }
        res.data.list = list
        return res.data
      } else {
        return res.data
      }
    } else {
      throw Error(res.msg)
    }

  },

  async addAdvertise(advertise) {
    let res = await fly.post('/api/advertises', advertise)
    mpvue.showToast({title: res.msg, icon: 'none'})
    return 'OK'
  },

  async getAdById(id) {
    let res = await fly.get('/api/advertises/' + id)
    if (res.code === 200) {
      return res.data
    } else {
      throw Error(res.msg)
    }
  }

}
