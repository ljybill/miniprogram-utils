# 图片懒加载组件

## 代码片段地址

可直接点击链接在微信开发者工具上查看 [https://developers.weixin.qq.com/s/JwRyKEmp7i5U](https://developers.weixin.qq.com/s/JwRyKEmp7i5U)

## 效果预览图

![](./gitpic/preview.gif)

建议使用微信开发者工具直接打开上面的代码片段查看效果

## 起步

小程序图片的懒加载只能在page或scrollView中使用，通过阅读小程序api，发现一个`createIntersectionObserver`接口[此处是介绍文档](https://developers.weixin.qq.com/miniprogram/dev/api/wx.createIntersectionObserver.html)，他可以监听某个页面元素在视口的位置，这样我们就可以监听图片组件是否进入了用户视线中，进入之后再去加载网络图片，实现懒加载的功能。

## 实现思路

本次代码比较简单，主要还是对于小程序接口的使用和理解，可以直接看源码理解，代码中有两个页面`index/index`是用自定义组件做的懒加载，`index/native`是小程序提供的图片懒加载功能。

说一点代码之外的吧，我试了试两种写法的体验评分(小程序开发者工具自带的体验评分)，两个都是B级，因为图片太多了，超过了并发量，所以具体性能如何还是要在实际项目中观察。

## 总结

老样子，代码只是简单实现，具体业务具体分析，所以组件没有做成第三方组件，通过这个功能，我们不光可以实现图片懒加载功能，更可以获取某一项的曝光量，比如一个商品列表页，监听他进入用户视线中，就认为他被用户看到了，具体应用也需要发挥大家想象力的:-D。