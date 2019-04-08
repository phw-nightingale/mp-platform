import fly from '../../utils/fly'

export default {

  async get2rdCategories() {
    let resp = await fly.get('/api/categories')
    if (resp.code === 200) {
      let res = resp.data.list
      console.log('onGet2rdCategories: ', res)
      let res2 = []
      let index = 0
      for (const idx in res) {
        if (res[idx].pid != null) {
          res2[index] = res[idx]
          index++
        }
      }
      return res2
    } else {
      throw Error(resp.msg)
    }
  },

  async getCategories(params) {
    let resp = await fly.get('/api/categories', params);
    if (resp.code === 200) {
      return resp.data.list
    } else {
      throw Error(resp.msg)
    }
  }

}
