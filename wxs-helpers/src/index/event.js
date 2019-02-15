// index/event.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    disabled: false
  },

  change() {
    this.setData({
      disabled: !this.data.disabled
    });
  }
});
