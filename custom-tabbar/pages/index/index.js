// 获取app实例，里面有app.js定义的各个对象
const app = getApp()
// 将公共方法提取出来
// 定义页面自己的js逻辑
const selfApi = {
  // 虽然我们使用了全局变量存储状态，但是他不是响应式的
  // 所以要在本地data中copy一个副本
  data: {
    auth: 1
  },
  onLoad: function () { },
  onReady: function () {
  },
  switchAuth() {
    this.setData({
      auth: this.data.auth === 1 ? 10 : 1
    })
  }
}
Page(selfApi)