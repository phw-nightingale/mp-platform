<template>
  <div class="container">
    <topic-item v-for="(item, idx) in topicList" :key="idx" :topic="item"></topic-item>
    <div style="width: 100%;">
      <i-load-more :tip="botTip" :loading="isLoad" />
    </div>
  </div>
</template>

<script>
  import topicItem from '../../components/topic-item'
  import topicService from '../../apis/topic'

export default {
  data () {
    return {
      page: {
        page: 1,
        limit: 5,
        over: false,
        orderBy: 'create_time'
      },
      botTip: '加载更多',
      topicList: [
        {
          id: 1,
          title: '职场太累',
          createTime: '2016-9-9',
          createUserId: 1,
        }
      ]
    }
  },

  compute: {
    
  },

  components: {
    topicItem
  },

  methods: {

  },

  created () {
    // let app = getApp()
    let that = this
    console.log('onGetTopicListReady: ')
    topicService.getTopicList(that.page)
      .then(res => {
        console.log('onGetTopicList: ', res)
        that.topicList = res.list
        if (that.topicList.length === 0)  {
          that.botTip = '空空如也'
        }
      })
      .catch(err => console.error(err))
  }
}
</script>

<style scoped>
  .container {
    width: 100%;
  }
</style>
