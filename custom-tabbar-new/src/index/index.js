const app = getApp();

Page({
  data: {},
  onLoad: function() {},
  setRedDot() {
    wx.showTabBarRedDot({
      index: 1
    });
  },
  hideRedDot() {
    wx.hideTabBarRedDot({
      index: 1
    });
  }
});
