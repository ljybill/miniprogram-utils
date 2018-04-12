App({
  onLaunch: function () {
  },
  globalData: {
    tabbarConfig: [
      {
        "active": true,
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