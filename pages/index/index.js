const app = getApp()
import { setRouterConfig } from '../../utils/util.js'
import tabbarApi from '../components/tabbar/tabbar'

const selfApi = {
  data: {
    tabbarConfig: app.globalData.tabbarConfig,
    isHideTabbar: app.globalData.isHideTabbar
  },
  onLoad: function () {
    wx.hideTabBar({
      success: () => {
        app.globalData.isHideTabbar = true
        this.setData({
          isHideTabbar: app.globalData.isHideTabbar
        })
      }
    })
    let path = this.route
    this.setData({
      tabbarConfig: setRouterConfig(app.globalData.tabbarConfig, path)
    })
  }
}
Page(Object.assign({}, tabbarApi, selfApi))
