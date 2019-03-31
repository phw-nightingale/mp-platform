import fly from "../../utils/fly";

export default {

  async getListByPage(page) {
    if (Object.keys(page).length === 0) {
      throw new Error('分页参数异常')
    } else {
      let res = await fly.get('/api/courses', page)
      if (res.code === 200) {
        let list = res.data.list
        if (list.length === 0) {
          throw Error('没有数据')
        }
        for (const idx in list) {
          const item = list[idx]
          //console.log(item)
          if (item.header === null || item.header.length === 0) {
            continue;
          }
          item.headImages = item.header.split(';')
        }
        res.data.list = list
        return res.data
      } else {
        throw Error(res.message)
      }
    }
  }

}
