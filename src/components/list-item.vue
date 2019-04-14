<template>
  <!-- 一般新闻模板 -->
  <div v-if="headImages.length === 0" class="item-container-1">
    <a class="title" :href="'../item/main?id=' + item.id + '&target=' + item.target">{{item.title}}</a>
    <div class="item-content-1">
      <i-tag
        v-if="item.isHot === 1"
        style="font-size: 32rpx; margin-right: 20rpx;"
        class="i-tags"
        name="置顶"
        type="border"
        color="red">
        置顶
      </i-tag>
      <i-tag
        v-if="isShowTag"
        style="font-size: 32rpx; margin-right: 20rpx;"
        class="i-tags"
        :name="item.str2"
        type="border"
        color="red">
        {{item.str2}}
      </i-tag>
      <span class="info">{{item.company}}</span>
      <span class="info">0评论</span>
      <span class="info">{{item.createTime}}</span>
    </div>
  </div>
  <div v-else-if="headImages.length === 1 || headImages.length === 2" class="item-container-2">
    <section class="con-l">
      <a class="title" :href="'../item/main?id=' + item.id + '&target=' + item.target">{{item.title}}</a>
      <div class="item-content-1">
        <i-tag
          v-if="item.isHot === 1"
          style="font-size: 32rpx; margin-right: 20rpx;"
          class="i-tags"
          name="置顶"
          type="border"
          color="red">
          置顶
        </i-tag>
        <i-tag
          v-if="isShowTag"
          style="font-size: 32rpx; margin-right: 20rpx;"
          class="i-tags"
          name="置顶"
          type="border"
          color="red">
          {{item.str2}}
        </i-tag>
        <span class="info" style="margin-right: 20rpx;">0评论</span>
        <span class="info" style="margin-right: 20rpx;">{{item.createTime}}</span>
      </div>
    </section>
    <section class="con-r" :style="headImages[0]">
    </section>
  </div>
  <div v-else-if="headImages.length === 3" class="item-container-3">
    <a class="title" :href="'../item/main?id=' + item.id">{{item.title}}</a>
    <div class="img-container">
      <div class="img" :style="headImages[0]"></div>
      <div class="img" :style="headImages[1]"></div>
      <div class="img" :style="headImages[2]"></div>
    </div>
    <div class="item-content-1" style="margin-top: 10rpx; margin-right: 10rpx;">
      <i-tag
        v-if="item.isHot === 1"
        style="font-size: 32rpx; margin-right: 20rpx;"
        class="i-tags"
        name="标签一"
        type="border"
        color="red">
        置顶
      </i-tag>
      <i-tag
        v-if="isShowTag"
        style="font-size: 32rpx; margin-right: 20rpx;"
        class="i-tags"
        name="置顶"
        type="border"
        color="red">
        {{item.str2}}
      </i-tag>
      <span class="info" style="margin-left: 0;">{{creator}}</span>
      <span class="info" style="margin-left: 20rpx;">2533评论</span>
      <span class="info" style="margin-left: 20rpx;">{{item.createTime}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        headImages: []
      }
    },
    computed: {
      creator() {
        const item = this.item
        return typeof item.company === 'undefined' ? item.createUser : item.company
      },
      isShowTag() {
        const tag = this.item.str2
        if (typeof tag === 'undefined' || tag === null || tag.length === 0) {
          return false
        } else {
          return true
        }
      }
    },
    props: {
      item: {
        type: Object,
        required: true
      }
    },
    created() {
      //console.log('list-item')
      let headImages = this.item.headImages
      for (const idx in headImages) {
        //console.log(headImages[idx])
        this.headImages[idx] = "background-image: url('" + headImages[idx] + "')"
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
    background: #eee center center no-repeat;
    background-size: cover;
    margin: 5rpx;
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
    margin-top: 15rpx;
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
    height: 300rpx;
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
    background: center center no-repeat;
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
