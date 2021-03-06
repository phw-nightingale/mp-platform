import fly from "../../utils/fly"

export default {

  async getTopicList(page) {
    let res = await fly.get('/api/topics', page)
    if (res.code === 200) {
      let list = res.data.list
      if (list.length !== 0) {
        for (let idx in list) {
          const item = list[idx]
          item.target = 'topic'
          //console.log(item)
          if (item.header === null || item.header.length === 0) {
            continue;
          }
          item.header = item.header.split(';')
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

  async getTopicById(id) {
    let res = await fly.get('/api/topics/' + id)
    if (res.code === 200) {
      return res.data
    } else {
      throw Error(res.msg)
    }
  },

  async addTopic(topic) {
    let res = await flt.post('/api/topics', topic)
    mpvue.showToast({title: res.msg, icon: 'none'})
    return 'OK'
  }
}
