Component({
  data: {
    "selected": 0,
    "list": [{
        "text": "文章",
        "pagePath": "/pages/article/article",
        "iconPath": "/images/tab/article.png",
        "selectedIconPath": "/images/tab/article_hl.png"
      },
      {
        "text": "影视",
        "pagePath": "/pages/movie/movie",
        "iconPath": "/images/tab/movie.png",
        "selectedIconPath": "/images/tab/movie_hl.png"
      }
    ]
  },
  methods: {
    changeTab(e) {
      let {index, url} = e.currentTarget.dataset
      let {selected} = this.data
      if (selected == index) return
      wx.switchTab({url})
      this.setData({
        selected: index
      })
    }
  }
})