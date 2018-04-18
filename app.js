App({
  onLaunch: function () {
  },
  // 小程序的全局变量
  // 用他来管理全局的路由
  globalData: {
    // tabbarConfig 里面的内容可以copy app.json中tabbar的配置
    tabbarConfig: [
      {
        "active": true, // active是这里独有的，通过它可以判断哪个页面是当前的
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "/icon/home_nor.png",
        "selectedIconPath": "/icon/home_pre.png"
      },
      {
        "active": false,
        "pagePath": "pages/center/index",
        "text": "发现",
        "iconPath": "/icon/center_nor.png",
        "selectedIconPath": "/icon/center_pre.png"
      },
      {
        "active": false,
        "pagePath": "pages/mine/index",
        "text": "我的",
        "iconPath": "/icon/mine_nor.png",
        "selectedIconPath": "/icon/mine_pre.png"
      }
    ],
    isHideTabbar: false
  }
})