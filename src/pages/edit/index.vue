<template>
  <div class="container">
    <div class="title">
      <input style="padding: 20rpx;" type="text" @input="onTitleInput" placeholder="输入标题...">
    </div>
    <div class="category">
      <div style="padding: 20rpx;">选择类目</div>
      <radio-group @change="onCategoryChange" style="padding: 0 20rpx 20rpx 20rpx;">
        <radio v-for="(it, idx) in categories" :key="idx" :value="idx">{{it.name}}&nbsp;</radio>
      </radio-group>
    </div>
    <div class="content">
      <textarea autofocus rows="5" @change="onTextChange" class="textarea" placeholder="输入内容..."></textarea>
    </div>
    <i-button @click="onAddTap" class="btn" type="success" shape="circle" size="middle">确认添加</i-button>
  </div>
</template>

<script>
  import categoryService from '../../apis/category'
  import courseService from '../../apis/course'
  import topicService from '../../apis/topic'
  import advertiseService from '../../apis/advertise'

  export default {
    data () {
      return {
        selectedCategory: null,
        categories: [],
        target: '',
        text: '',
        addItem: {}
      }
    },

    compute: {

    },

    components: {

    },

    methods: {
      onTitleInput(e) {
        this.addItem.title = e.target.value
      },
      onTextChange(e) {
        this.text = e.target.value
        this.addItem.content = e.target.value
      },
      onAddTap() {
        let that = this
        if (that.text.length > 0) {
          switch (that.target) {
            case 'advertise':
              advertiseService.addAdvertise(that.addItem)
                .then(() => mpvue.redirectTo({url: '../advertise/main'}))
                .catch(err => console.log(err))
              break;

            case 'course':
              courseService.addCourse(that.addItem)
                .then(() => mpvue.redirectTo({url: '../course/main'}))
                .catch(err => console.log(err))
              break;

            case 'topic':
              topicService.addTopic(that.addItem)
                .then(() => mpvue.redirectTo({url: '../topic/main'}))
                .catch(err => console.log(err))
              break;

            default:
              break;
          }
        }
      },
      onCategoryChange(e) {
        let that = this
        let value = e.target.value
        that.selectedCategory = that.categories[value]
        that.addItem.category = that.selectedCategory.name
        that.addItem.categoryId = that.selectedCategory.id
      }
    },

    created () {

    },

    onLoad(params) {
      console.log(params)
      let that = this
      that.target = params.target
      categoryService.get2rdCategoriesByName(params.target)
        .then(res => that.categories = res)
        .catch(err => mpvue.showToast({title: err, icon: 'none'}))
    }
  }
</script>

<style scoped>
  .title {
    width: 100%;
  }
  .category {
    width: 100%;
    font-size: 32rpx;
  }
  .container {
    width: 100%;
    padding: 0;
  }
  .content {
    width: 100%;
  }
  .textarea {
    padding: 20rpx;
    width: 100%;
    font-size: 32rpx;
  }
  .btn {
    width: 100%;
  }
</style>
