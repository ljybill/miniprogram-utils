// index/base.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    currentTime: Date.now()
  },
  updateCurrent() {
    this.setData({
      currentTime: Date.now()
    });
  }
});
