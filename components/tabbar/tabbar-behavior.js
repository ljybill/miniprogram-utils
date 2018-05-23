const app = getApp();
module.exports = Behavior({
  data: {
    isShow: true,
    routers: []
  },
  ready() {
    this.setData({
      routers: app.globalData.tabbarConfig
    })
  }
})