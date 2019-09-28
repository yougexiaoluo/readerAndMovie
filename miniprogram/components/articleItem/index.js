// components/articleImte/articleItem.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    data: {
      type: Object,
      default: {}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */

  methods: {
    // 文章详情
    articleDetail: function(e) {
      let { id } = e.currentTarget.dataset
      wx.navigateTo({
        // url: '/pages/reader/index?data=' + JSON.stringify(this.data.data)
        url: '/pages/reader/index?id=' + id
      })
    }
  }
})