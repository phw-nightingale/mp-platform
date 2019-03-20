<template>
  <!-- 一般新闻模板 -->
  <div v-if="tempType === 1" class="item-container-1">
    <a class="title" :href="'../item/main?id=' + item.id">{{item.title}}</a>
    <div class="item-content-1">
      <i-tag
        v-if="item.isHot === 1"
        style="font-size: 32rpx; margin-right: 10rpx;"
        class="i-tags"
        name="置顶"
        type="border"
        color="red">
        置顶
      </i-tag>
      <span class="info">{{item.company}}</span>
      <span class="info">0评论</span>
      <span class="info">{{item.createTime}}</span>
    </div>
  </div>
  <div v-else-if="tempType === 1 || tempType === 2" class="item-container-2">
    <section class="con-l">
      <a class="title" :href="'../item/main?id=' + item.id">{{item.title}}</a>
      <div class="item-content-1">
        <i-tag
          v-if="item.isHot === 1"
          style="font-size: 32rpx; margin-right: 10rpx;"
          class="i-tags"
          name="置顶"
          type="border"
          color="red">
          置顶
        </i-tag>
        <span class="info">0评论</span>
        <span class="info">{{item.createTime}}</span>
      </div>
    </section>
    <section class="con-r">
    </section>
  </div>
  <div v-else-if="tempType === 3" class="item-container-3">
    <a class="title" :href="'../item/main?id=' + item.id">{{item.title}}</a>
    <div class="img-container">
      <div class="img" :style="headImage[0]"></div>
      <div class="img" :style="headImage[1]"></div>
      <div class="img" :style="headImage[2]"></div>
    </div>
    <div class="item-content-1" style="margin-top: 10rpx;">
      <i-tag
        v-if="item.isHot === 1"
        style="font-size: 32rpx; margin-right: 10rpx;"
        class="i-tags"
        name="标签一"
        type="border"
        color="red">
        置顶
      </i-tag>
      <span class="info">{{item.company}}</span>
      <span class="info">2533评论</span>
      <span class="info">{{item.createTime}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headImage: [
          "background-image: url('../../static/images/user.png')",
          "background-image: url('../../static/images/user.png')",
          "background-image: url('../../static/images/user.png')"
        ]
      }
    },
    computed: {
    },
    props: {
      tempType: {
        type: String,
        required: true
      },
      item: {
        type: Object,
        required: true
      }
    }

  };
</script>

<style scoped>
  h3 {
    width: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .img-container {
    width: 100%;
    height: 160rpx;
    display: flex;
  }

  .img-container > .img {
    width: 33%;
    height: 100%;
    padding: 5rpx;
    background: center center no-repeat;
    background-size: contain;
  }

  .item-container-1 {
    height: 160rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 20rpx;
  }

  .item-content-1 {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .info {
    font-size: 26rpx;
    color: #666;
    margin: 0 10rpx;
  }

  .item-container-2 {
    height: 160rpx;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    margin-top: 20rpx;
  }

  .item-container-3 {
    height: 230rpx;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20rpx;
  }

  .con-l {
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
  }

  .con-r {
    width: 30%;
    height: 100%;
    background: url('../../static/images/user.png') center center no-repeat;
    background-size: cover;
  }

  .con-r > img {
    max-width: 100%;
    max-height: 100%;
  }

  .title {
    font-size: 36rpx;
    font-weight: bold;
  }
</style>
