const app = getApp();

const list = Array.from(
  { length: 40 },
  (v, i) => `http://lorempixel.com/200/200?hash=${i + 1}`
);

Page({
  data: {
    list
  },
  onLoad: function() {}
});
