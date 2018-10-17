# custom-tabbar （18.10.17更新）
自定义底部导航栏组件

## 代码片段地址

## 效果预览图

![](http://blog.ljybill.com/images/custom-tabbar.gif)

此预览图是作者通过底部导航栏实现的效果并不是本代码的效果

## 起步

目前大部分小程序是有底部导航栏的，用户可以通过底部导航栏进入不同业务的页面，小程序实际上是可以通过简单的配置实现一个这样的东西(app.json)，简单使用的够用的，不过如果想进行更多的骚操作(比如通过判断用户身份，展示不同的导航，突出中间的导航栏引导用户点击...)，就需要自己自定义了。

## 实现思路

首先我们先了解下微信的路由api和微信的路由机制，微信一共提供了5个路由api：`wx.navigateTo`、`wx.redirectTo`、`wx.switchTab`、`wx.navigateBack`、`wx.reLaunch`，具体文档位于[https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html)。

其中我们用哪个呢？很显然`wx.switchTab`很合我们的口味，因为他的切换效果是没有推入推出动画的，更符合我们的习惯，那使用他的前提是我们需要在`app.json`文件中配置`tabBar`属性，而只要一配置了`tabBar`属性，系统原生的导航栏就出现了，幸好微信有一个隐藏原生导航栏的api：[wx.hideTabBar](https://developers.weixin.qq.com/miniprogram/dev/api/ui-tabbar.html#wxhidetabbarobject)。看到这里相信聪明的你已经知道了实现思路，就是隐藏掉原生的然后自己去实现一个导航栏贴在最下面。

![](./gitpic/微信小程序页面栈.png)

前面提到过，导航栏的作用就是切换路由，原生使用`wx.switchTab`方法进行切换，这个也作为我们的首选，因为他的交互是最符合习惯的。那使用他的前提是我们需要在`app.json`文件中配置`tabBar`属性，而只要一配置了`tabBar`属性，系统原生的导航栏就出现了，幸好微信有一个隐藏原生导航栏的api：[wx.hideTabBar](https://developers.weixin.qq.com/miniprogram/dev/api/ui-tabbar.html#wxhidetabbarobject)。看到这里相信大家已经知道了实现思路，就是我们在`app.js`文件的`onLaunch`事件钩子中调用`wx.hideTabBar()`隐藏掉原生的然后自己去实现一个导航栏贴在最下面。

## 总结

已经工作24小时头昏脑热的写这个文档，再加上本来表达能力就不好，可能写的不好，如果大家对实现有什么疑问可以给我提issue，如果大家有更好的实现方式也可以联系我，或者在小程序中有什么开发的心得和疑惑也可以和我交流。

> [关于自定义组件博客文章](http://blog.ljybill.com/2018/05/23/%E5%B0%8F%E7%A8%8B%E5%BA%8F%E8%87%AA%E5%AE%9A%E4%B9%89%E5%BA%95%E9%83%A8%E5%AF%BC%E8%88%AA%E6%A0%8F/)

## TODO

研究下mpvue开发小程序
