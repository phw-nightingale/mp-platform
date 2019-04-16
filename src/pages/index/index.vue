<template>
  <div>
    <mp-searchbar :isFocus=false v-model="keywords" :inputValue="keywords" :placeholder="placeholder" @input="onKeywordInput"
                  @blur="onSearchBlur" @focus="onSearchFocus" @confirm="onSearchConfirm"></mp-searchbar>

    <i-tabs :current="current_scroll" scroll @change="onChangeScroll" color="#00E9A3">
      <i-tab v-for="(item, idx) in menuTabs" :key="idx" :title="item.name"></i-tab>
    </i-tabs>

    <div class="container">
      <list-item v-for="item in items" :key="item.id" :item="item"></list-item>
    </div>
    <i-load-more :tip="botTip" :loading="isLoad" />
  </div>
</template>

<script>
  import mpSearchbar from 'mpvue-weui/src/searchbar'
  import listItem from '../../components/list-item'
  import courseservice from '../../apis/course'
  import topicService from '../../apis/topic'
  import userservice from '../../apis/user'
  import categoryService from '../../apis/category'
  import hoverToolbar from '../../components/hoverToolbar'
  import fly from '../../utils/fly'

  export default {
    data() {
      return {
        keywords: '',
        current_scroll: 0,
        menuTabs: [],
        botTip: '下拉加载更多',
        page: {
          page: 1,
          limit: 5,
          over: false
        },
        items: [

        ],
        isLoad: false
      };
    },

    components: {
      mpSearchbar,
      listItem
    },

    methods: {
      onSearchBlur() {
        console.log(this.keywords)
      },
      onKeywordInput(e) {

      },
      onSearchFocus(e) {

      },
      onSearchConfirm(e) {

      },
      onChangeScroll(e) {
        let that = this
        this.current_scroll = e.target.key
        that.page.page = 1
        that.page.categoryId = that.menuTabs[that.current_scroll].id
        console.log('page detail: ', that.page)
        // courseservice.getListByPage(that.page)
        //   .then(res => {
        //     if (res.list.length > 0) {
        //       that.items = res.list
        //     }
        //   })
        //
        // topicService.getTopicList(that.page)
        //   .then(res => {
        //     if (res.list.length > 0) {
        //       that.items = res.list
        //     }
        //   })

        function getCourseList() {
          return fly.get('/api/courses', that.page)
        }

        function getTopicList() {
          return fly.get('/api/topics', that.page)
        }

        fly.all([getCourseList(), getTopicList()])
          .then(fly.spread(function(courses, topics) {
            if (courses.code === 200 && courses.data.list.length > 0) {
              for (const idx in courses.data.list) {
                courses.data.list[idx].target = 'course'
              }
              that.items = courses.data.list
            } else if (topics.code === 200 && topics.data.list.length > 0) {
              for (const idx in topics.data.list) {
                topics.data.list[idx].target = 'topic'
              }
              that.items = topics.data.list
            } else {
              that.items = []
            }
          }))
      }
    },

    created() {
      let app = getApp();
      let that = this;
      courseservice.getListByPage(that.page)
        .then(res => that.items = res.list)

      //获取当前用户
      //userservice.getWxUserInfo().then(res => console.log(res))
      //获取所有二级目录
      categoryService.get2rdCategories()
        .then(res => that.menuTabs = res)
    },

    /**
     * 下拉加载更多
     */
    onReachBottom() {
      console.log('下拉加载更多...')
      let that = this
      if (!that.page.over) {
        that.page.page++

        courseservice.getListByPage(that.page)
          .then(res => {
            let length = res.list.length
            if (length > 0) {
              that.items = that.items.concat(res.list)
            }
            console.log('onReachBottom: ', length)
            if (length < that.page.limit) {
              that.botTip = '没有更多了';
              that.page.over = true
            }
          })
      }
    }
  };
</script>

<style scoped>
  .container {
    flex-direction: column;
    align-items: flex-start;
    padding: 20rpx;
    width: 100%;
  }
</style>
