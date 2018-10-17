import extraNavigateTo from './extraNavigateTo.js'

const before = function(from, to, next) {
  if (to.path === '/index/open' && !wx.getStorageSync('auth')) {
    next({
      url: '/index/close'
    })
  } else {
    next()
  }
}

const after = function(path) {
  console.log('after', path)
}

App({
  onLaunch: function() {
    // 测试用
    wx.setStorageSync('auth', false)

    // 修改navigateTo
    extraNavigateTo(before, after)
  }
})