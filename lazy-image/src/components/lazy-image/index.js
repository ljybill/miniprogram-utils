// components/lazy-image/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    src: {
      type: String,
      value: "default.png"
    },
    width: {
      type: Number,
      value: 640
    },
    height: {
      type: Number,
      value: 480
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    loaded: false,
    loading: false,
    _src: "default.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleLoad() {
      this.setData({
        loading: false
      });
    },
    handleError() {
      this.setData({
        loading: false,
        _src: "default.png"
      });
    }
  },
  ready() {
    this._observer = this.createIntersectionObserver();
    this._observer
      .relativeToViewport({
        top: 0,
        bottom: 0
      })
      .observe(".image-box", res => {
        if (res.intersectionRatio > 0 && !this.data.loaded) {
          this.data.loaded = true;
          this.setData({
            loading: true,
            _src: this.data.src
          });
        }
        this._observer.disconnect();
      });
  }
});
