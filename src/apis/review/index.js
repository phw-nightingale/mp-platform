import fly from "../../utils/fly"

export default {

  async getReviewList(target, targetId) {
    let res = fly.get('/api/reviews', {target, targetId})
    if (res.code === 200) {
      return res.data.list
    } else {
      throw Error(res.msg)
    }
  }

}
