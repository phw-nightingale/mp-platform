import fly from "../../utils/fly";

export default {

  async getListByPage(page) {

    let res = await fly.get('/api/courses', page)
    if (res.code === 200) {
      let list = res.data.list
      if (list.length !== 0) {
        for (let idx in list) {
          const item = list[idx]
          //console.log(item)
          item.target = 'course'
          if (item.header !== null) {
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

  async getCourseById(id) {
    let res = await fly.get('/api/courses/' + id)
    if (res.code === 200) {
      return res.data
    } else {
      throw Error(res.msg)
    }
  },

  async addCourse(course) {
    let res = await fly.post('/api/courses', course)
    mpvue.showToast({title: res.msg, icon: 'none'})
    return 'OK'
  }

}
