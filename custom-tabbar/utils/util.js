const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

export const setRouterConfig = (config, path) => {
  config.forEach((item) => {
    item.active = item.pagePath === path ? true : false
  })
  return config
}

export default {
  formatTime: formatTime,
  setRouterConfig: setRouterConfig
}
