<template>
  <div>
    <!--<swiper indicator-dots="true"-->
    <!--interval="5000"-->
    <!--autoplay="true"-->
    <!--duration="500"-->
    <!--class="banner">-->

    <!--<swiper-item v-for="(item, index) in topNews" :key="item" :item-id="index">-->
    <!--<a href="../logs/main">-->
    <!--<div>{{item}}</div>-->
    <!--</a>-->
    <!--</swiper-item>-->
    <!--</swiper>-->
    <mp-searchbar :isFocus=true v-model="keywords" :inputValue="keywords" :placeholder="placeholder" @input="onKeywordInput"
                  @blur="onSearchBlur" @focus="onSearchFocus" @confirm="onSearchConfirm"></mp-searchbar>

    <i-tabs :current="current_scroll" scroll @change="onChangeScroll" color="#00E9A3">
      <i-tab key="tab1" title="选项1"></i-tab>
      <i-tab key="tab2" title="选项2"></i-tab>
      <i-tab key="tab3" title="选项3"></i-tab>
      <i-tab key="tab4" title="选项4"></i-tab>
      <i-tab key="tab5" title="选项5"></i-tab>
      <i-tab key="tab6" title="选项6"></i-tab>
      <i-tab key="tab7" title="选项7"></i-tab>
      <i-tab key="tab8" title="选项8"></i-tab>
      <i-tab key="tab9" title="选项9"></i-tab>
    </i-tabs>

    <div class="container">
    </div>
  </div>
</template>

<script>
  import mpSearchbar from "mpvue-weui/src/searchbar";

  export default {
    data() {
      return {
        keywords: '',
        current_scroll: 'tab1',
        menuTabs: []
      };
    },

    components: {
      mpSearchbar
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
      onSearchBlur(e) {
        console.log(this.keywords)
      },
      onKeywordInput(e) {

      },
      onSearchFocus(e) {

      },
      onSearchConfirm(e) {

      },
      onChangeScroll(e) {
        this.current_scroll = e.target.key
      }
    },

    created() {
      let app = getApp();
      let that = this;
    }
  };
</script>

<style scoped>
  .banner {
    width: 100%;
    height: 200rpx;
  }

</style>
