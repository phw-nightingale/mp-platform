<template>
  <div class="container">
    <section class="c-header">
      <div class="c-header-1"></div>
      <div class="c-header-2">
        <div class="c-un">夜莺</div>
        <div class="c-sign">
          放下执念，微笑现在。
        </div>
      </div>
    </section>
    <!--
    <section class="c-override">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </section>
    -->
    <div class="line"></div>

    <i-cell-group class="cell">
      <i-cell title="只显示箭头" is-link></i-cell>
      <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
      <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
      <i-cell title="开关">
        <switch slot="footer" checked />
      </i-cell>
    </i-cell-group>

    <div class="line"></div>

    <i-cell-group class="cell">
      <i-cell title="只显示箭头" is-link></i-cell>
      <i-cell title="跳转到首页" is-link url="/pages/dashboard/index"></i-cell>
      <i-cell title="只有 footer 点击有效" is-link url="/pages/dashboard/index" only-tap-footer></i-cell>
    </i-cell-group>

    <div class="line-2"></div>

  </div>
</template>

<script>

export default {

  components: {

  },

  data () {
    return {

    }
  },

  created () {

  }
}
</script>

<style scoped>
  .container {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }

  .c-header {
    display: flex;
    padding: 20rpx;
  }

  .c-header-1 {
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    margin-right: 20rpx;
    background-color: #eeeeee;
  }

  .c-header-2 {
    height: 150rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .c-un {
    font-size: 48rpx;
  }

  .c-sign {
    font-size: 24rpx;
    color: #666;
  }

  .c-override {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .cell {
    width: 100%;
  }

  .line {
    width: 100%;
    height: 50rpx;
    background-color: #eeeeee;
  }

  .line-2 {
    width: 100%;
    height: 400rpx;
    background-color: #eeeeee;
  }
</style>
