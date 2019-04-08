<template>
  <div class="container">
    <div class="header">
      <div class="avatar"></div>

    </div>
    <div class="content">
      这是一个评论
    </div>
  </div>
</template>

<script>
  export default {

    data() {
      return {

      }
    },

    props: {
      review: {
        type: Object,
        required: true
      }
    },

    created() {

    }

  };
</script>

<style scoped>
  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
.avatar {
  height: 50rpx;
  width: 50rpx;
  border-radius: 50%;
  background: #eee center center no-repeat;
  background-size: cover;
}
</style>
