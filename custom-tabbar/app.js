const routerConfig = require('./config/router.js')
App({
  onLaunch: function () {
    console.log(routerConfig)
  },
  setRouterStatus(path) {
    this.globalData.tabbarConfig.forEach((item) => {
      if (item.pagePath !== path) {
        item.active = false
      } else {
        item.active = true
      }
    })
  },
  // 小程序的全局变量
  // 用他来管理全局的路由
  globalData: {
    tabbarConfig: routerConfig,
    isHideTabbar: false
  }
})