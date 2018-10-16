/**
 * CMD 导出方式
 */
module.exports = [
  {
    "active": true, // active是这里独有的，通过它可以判断哪个页面是当前的
    "pagePath": "pages/index/index",
    "text": "首页",
    "iconPath": "/icon/home_nor.png",
    "selectedIconPath": "/icon/home_pre.png",
    "auth": 0
  },
  {
    "active": false,
    "pagePath": "pages/center/index",
    "text": "发现",
    "iconPath": "/icon/center_nor.png",
    "selectedIconPath": "/icon/center_pre.png",
    "auth": 0
  },
  {
    "active": false,
    "pagePath": "pages/auth/index",
    "text": "权限",
    "iconPath": "/icon/auth_nor.png",
    "selectedIconPath": "/icon/auth_pre.png",
    "auth": 5
  },
  {
    "active": false,
    "pagePath": "pages/mine/index",
    "text": "我的",
    "iconPath": "/icon/mine_nor.png",
    "selectedIconPath": "/icon/mine_pre.png",
    "auth": 0
  }
]