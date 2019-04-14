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
          item.target = 'advertises'
          if (item.header !== null && item.header.length !== 0) {
            item.headImages = item.header.split(';')
          }
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
  }

}
