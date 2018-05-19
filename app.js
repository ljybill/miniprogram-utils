const routerConfig = require('./config/router.js')
App({
  onLaunch: function () {
    console.log(routerConfig)
  },
  // 小程序的全局变量
  // 用他来管理全局的路由
  globalData: {
    tabbarConfig: routerConfig,
    isHideTabbar: false
  }
})