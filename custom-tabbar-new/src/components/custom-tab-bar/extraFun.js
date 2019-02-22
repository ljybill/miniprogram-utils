function index() {
  const showTabBarRedDot_old = wx.showTabBarRedDot;
  const hideTabBarRedDot_old = wx.hideTabBarRedDot;
  global.redDotList = Array.from(
    { length: __wxConfig.tabBar.list.length },
    () => false
  );
  global.redDotBus = [];
  const showTabBarRedDot_new = function(option) {
    const { index } = option;
    if (
      typeof index !== "number" ||
      index < 0 ||
      index >= global.redDotList.length
    ) {
      return;
    }
    global.redDotList[index] = true;
    global.redDotBus.forEach(fun => {
      if (typeof fun === "function") {
        fun();
      }
    });
    showTabBarRedDot_old(option);
  };
  const hideTabBarRedDot_new = function(option) {
    const { index } = option;
    if (
      typeof index !== "number" ||
      index < 0 ||
      index >= global.redDotList.length
    ) {
      return;
    }
    global.redDotList[index] = false;
    global.redDotBus.forEach(fun => {
      if (typeof fun === "function") {
        fun();
      }
    });
    hideTabBarRedDot_old(option);
  };
  Object.defineProperty(wx, "showTabBarRedDot", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: showTabBarRedDot_new
  });
  Object.defineProperty(wx, "hideTabBarRedDot", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: hideTabBarRedDot_new
  });
}

module.exports = index;
