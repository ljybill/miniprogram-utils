/**
 * 扩展原生的 navigateTo
 * @{params} Function  路由跳转前执行
 * @{params} Function  路由跳转后执行
 */
export const extraNavigateTo = function(before = null, after = null) {
  // 解析Url
  const parseUrl = function(url) {
    let [path, query] = url.split('?')

    if (query) {
      query = query.split('&').reduce(function(total, current) {
        let [name, value] = current.split('=')
        total[name] = value
      }, {})
    }

    return {
      fullPath: url,
      path,
      query
    }
  }

  // 获取当前页面的路径
  const getCurrentPage = function() {
    const pages = getCurrentPages()
    const currentPage = pages[pages.length - 1]
    const current = currentPage.route
    return current
  }

  const originNavigateTo = wx.navigateTo
  // options 结构同wx.navigateTo 的入参
  const navigateTo = function(options) {
    const next = function(opt = {}) {
      extraNavigateTo.execNext = true

      options = Object.assign(options, opt)
      if (opt.url) {
        navigateTo(options)
      } else {
        originNavigateTo(options)
        if (after && typeof after === 'function') {
          after(options.url)
        }
      }
    }

    let from = getCurrentPage()
    let to = parseUrl(options.url)

    if (before && typeof before === 'function') {
      before(from, to, next)
    }

  }

  Object.defineProperty(wx, 'navigateTo', {
    enumerable: true,
    configurable: true,
    writable: true,
    value: navigateTo
  })
}

export default extraNavigateTo