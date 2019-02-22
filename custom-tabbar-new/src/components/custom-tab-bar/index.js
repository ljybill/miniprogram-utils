require("./extraFun")();
const fixListConfig = function(item, index) {
  const result = {}; // 使用新对象，类似浅拷贝
  result.pagePath = "/" + item.pagePath.replace(/.html$/g, "");
  result.iconPath = item.iconData
    ? "data:image/png;base64," + item.iconData
    : "/" + item.iconPath;
  result.selectedIconPath = item.selectedIconData
    ? "data:image/png;base64," + item.selectedIconData
    : "/" + item.selectedIconPath;
  result.idx = index;
  result.redDot = false;
  result.text = item.text;
  return result;
};
const _tabBar = __wxConfig.tabBar;

wx.hideTabBar();

Component({
  properties: {},
  data: {
    activeIdx: -1,
    config: _tabBar,
    list: _tabBar.list.map(fixListConfig)
  },
  methods: {
    switchTab(evt) {
      const { pagePath } = evt.currentTarget.dataset;
      wx.switchTab({
        url: pagePath
      });
    },
    updateRedDot() {
      if (Array.isArray(global.redDotList)) {
        this.setData({
          list: this.data.list.map(item => {
            item.redDot = global.redDotList[item.idx];
            return item;
          })
        });
      }
    },
    handleError(e) {
      console.log(e);
    }
  },
  ready() {
    console.log(this.data.list);
    this.updateRedDot();
    global.redDotBus.push(this.updateRedDot.bind(this));
  },
  pageLifetimes: {
    show() {
      const pages = getCurrentPages();
      const page = pages[pages.length - 1];
      const route = page.__route__;
      const idx = this.data.list.find(item => item.pagePath === `/${route}`)
        .idx;
      if (this.data.activeIdx !== idx) {
        this.setData({
          activeIdx: idx
        });
      }
    }
  }
});
