// 获取app实例，里面有app.js定义的各个对象
const app = getApp()
// 将公共方法提取出来
import { setRouterConfig } from '../../utils/util.js'
// 将底部导航栏用template方式实现，并把其api引入进来
// 此处是因为小程序对于组件化开发的支持实在太弱了
// 可以考虑下小程序的开发框架: wepy、mpvue
import tabbarApi from '../components/tabbar/tabbar'
// 定义页面自己的js逻辑
const selfApi = {
  // 虽然我们使用了全局变量存储状态，但是他不是响应式的
  // 所以要在本地data中copy一个副本
  data: {
    tabbarConfig: app.globalData.tabbarConfig,
    isHideTabbar: app.globalData.isHideTabbar
  },
  onLoad: function () {
    // 调用hideTabBar方法
    wx.hideTabBar({
      success: () => {
        // 如果成功就将全局的状态修改，此处主要是防止调用失败后出现两个导航栏
        app.globalData.isHideTabbar = true
        this.setData({
          isHideTabbar: app.globalData.isHideTabbar
        })
      }
    })
    // 获取当前页面路由
    let path = this.route
    this.setData({
      tabbarConfig: setRouterConfig(app.globalData.tabbarConfig, path)
    })
  }
}
Page(Object.assign({}, tabbarApi, selfApi))