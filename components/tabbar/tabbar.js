// components/tabbar/tabbar.js
// 组件中也是可以使用这个方法获取全局app的
const app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: true,
    routers: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleRouterSwitch(event) {
      let path = event.currentTarget.dataset.path
      wx.switchTab({
        url: `/${path}`,
        success: function () {
          // 修改全局变量的状态
          app.setRouterStatus(path)
        }
      })
    }
  },
  ready() {
    this.setData({
      routers: app.globalData.tabbarConfig
    })
  }
})
