const app = getApp()

const getDataAsync = function(delay = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data')
    }, delay)
  })
}

Page({
  data: {

  },
  onLoad: function() {
    console.log('%c有任何问题欢迎和我交流:ljybill@aliyun.com', 'color: #333;font-size:16px;font-weight: bold;')

    console.log('%c\n修改app.js的代码然后点击按钮观察有无polyfill的区别', 'color: #333;font-size:16px;')
  },
  handleTap() {
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    getDataAsync().then((res) => {
      wx.hideLoading()
    }).finally(() => {
      wx.showToast({
        title: 'finally'
      })
    })
  }
})