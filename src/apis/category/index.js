import fly from '../../utils/fly'

export default {

  /**
   * 获得所有的2级类目
   * @returns {Promise<Array>}
   */
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
  },

  async get2rdCategoriesByName(name) {
    if (!name) {
      throw Error('name cannot be empty.')
    } else {
      let pcate = await fly.get('/api/categories/str1/' + name)
        if (pcate.data.list.length > 0) {
          let pid = pcate.data.list[0].id
          let res = await fly.get('/api/categories/pid/' + pid)
          return res.data.list
        }

    }
  }

}
