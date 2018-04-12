const app = getApp()
export default {
  handleSwitchRouter(event) {
    let path = event.currentTarget.dataset.url
    app.globalData.tabbarConfig.forEach((item) => {
      item.active = item.pagePath === path ? true : false
    })
    wx.switchTab({
      url: '/' + path,
    })
  }
} 