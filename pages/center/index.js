const app = getApp()
import { setRouterConfig } from '../../utils/util.js'
import tabbarApi from '../components/tabbar/tabbar'

const selfApi = {
  data: {
    tabbarConfig: app.globalData.tabbarConfig,
    isHideTabbar: app.globalData.isHideTabbar
  },
  onLoad: function () {
    let path = this.route
    this.setData({
      tabbarConfig: setRouterConfig(app.globalData.tabbarConfig, path),
      isHideTabbar: app.globalData.isHideTabbar
    })
  }
}
Page(Object.assign({}, tabbarApi, selfApi))
