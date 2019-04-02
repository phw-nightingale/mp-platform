<template>
  <div>
    <i-tabs :current="current_scroll" scroll @change="onChangeScroll" color="#00E9A3">
      <i-tab v-for="(item, idx) in menuTabs" :key="idx" :title="item"></i-tab>
    </i-tabs>
    <swiper indicator-dots="true"
            interval="5000"
            autoplay="true"
            duration="500"
            class="banner">

      <swiper-item v-for="(item, index) in topNews" :key="item" :item-id="index">
        <a href="../logs/main" style="width: 100%; height: 300rpx;">
          <div class="top-container" :style="'background-image: url(' + item.headImages[0] + ')'">
            <h3 style="margin-left: 20rpx;">{{item.title}}</h3>
          </div>
        </a>
      </swiper-item>
    </swiper>
    <div class="container">
      <list-item v-for="item in items" :key="item.id" :item="item" :temp-type="item.headImages.length"></list-item>
    </div>
    <i-load-more :tip="botTip" :loading="isLoad" />
  </div>
</template>

<script>
  import listItem from '../../components/list-item'
  import courseservice from '../../apis/course'

  export default {
    data() {
      return {
        current_scroll: 0,
        menuTabs: ['选项1','选项2','选项3','选项4'],
        topNews: [1, 2, 3, 4],
        botTip: '下拉加载更多',
        page: {
          page: 1,
          limit: 5,
          over: false,
          category: '',
          orderBy: 'create_time'
        },
        items: [
          // {
          //   id: 1,
          //   title: "测试新闻",
          //   createTime: "2016-9-9",
          //   company: "phw",
          //   isHot: 1,
          //   headImages: ["../../static/images/user.png", "../../static/images/user.png", "../../static/images/user.png"]
          // },
          // {
          //   id: 2,
          //   title: "测试新闻",
          //   createTime: "2016-9-9",
          //   company: "phw",
          //   isHot: 1,
          //   headImages: ["../../static/images/user.png", "../../static/images/user.png"]
          // }
        ],
        isLoad: false
      };
    },

    components: {
      listItem
    },

    methods: {
      bindViewTap() {
        const url = "../logs/main";
        if (mpvuePlatform === "wx") {
          mpvue.switchTab({ url });
        } else {
          mpvue.navigateTo({ url });
        }
      },
      clickHandle(ev) {
        console.log("clickHandle:", ev);
        // throw {message: 'custom test'}
      },
      onChangeScroll(e) {
        let that = this
        this.current_scroll = e.target.key
        that.page.page = 1
        that.page.category = that.menuTabs[that.current_scroll]
        console.log('page detail: ', that.page)
        courseservice.getListByPage(that.page)
          .then(res => {
            that.items = res.list
          })
      }
    },

    created() {
      // let app = getApp()
      let that = this;
      courseservice.getListByPage(that.page)
        .then(res => {that.items = res.list;that.topNews = res.list})
    },

    /**
     * 下拉加载更多
     */
    onReachBottom() {
      console.log('下拉加载更多...')
      let that = this
      that.page.page++
      if (!that.page.over) {

        courseservice.getListByPage(that.page)
          .then(res => {
            console.log(res)
            if (res.list.length > 0) {
              that.items = that.items.concat(res.list)
            }
            if (res.list.length < that.page.limit) {
              that.botTip = '没有更多了';
              that.page.over = true
            }

          })
      }
    }

  };
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 300rpx;
  }
  .container {
    flex-direction: column;
    align-items: flex-start;
    padding: 20rpx;
    width: 100%;
  }
  .top-container {
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    width: 100%;
    height: 300rpx;
    background: #eee center center no-repeat;
    background-size: cover;
  }
</style>
