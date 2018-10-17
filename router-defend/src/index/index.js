const app = getApp()

Page({
  data: {

  },
  onLoad: function() {
    console.log('仿VueRouter的路由守卫功能')
  },
  gotoPage(evt) {
    let {
      path
    } = evt.currentTarget.dataset

    wx.navigateTo({
      url: path,
    })
  },
  handleSwitch(evt) {
    wx.setStorageSync('auth', evt.detail.value)
  }
})