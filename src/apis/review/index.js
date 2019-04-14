import fly from "../../utils/fly"

export default {

  async getReviewList(target, targetId) {
    let res = await fly.get('/api/reviews', {target, targetId})
    if (res.code === 200) {
      return res.data.list
    } else {
      throw Error(res.msg)
    }
  },

  async addReview(target, targetId, review) {
    let res = await fly.post('/api/reviews/' + target + '/' + targetId, review)
    if (res.code === 200) {
      return res.data
    } else {
      throw Error(res.msg)
    }
  }

}
