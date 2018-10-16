// components/tabbar/tabbar.js
// 组件中也是可以使用这个方法获取全局app的
const app = getApp();
const tabbarBehavior = require('./tabbar-behavior.js')

Component({
  /**
   * 组件的属性列表
   */
  behaviors: [tabbarBehavior],
  properties: {
    auth: {
      type: Number,
      value: 1
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
  }
})
