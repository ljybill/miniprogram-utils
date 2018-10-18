# custom-tabbar （18.10.17更新）
自定义底部导航栏组件

## 代码片段地址

可直接点击链接在微信开发者工具上查看 [wechatide://minicode/d3Cfrfmi7L3v](wechatide://minicode/d3Cfrfmi7L3v)

## 效果预览图

![](http://blog.ljybill.com/images/custom-tabbar.gif)

此预览图是作者通过底部导航栏实现的效果并不是本代码的效果

## 起步

目前大部分小程序是有底部导航栏的，用户可以通过底部导航栏进入不同业务的页面，小程序实际上是可以通过简单的配置实现一个这样的东西(app.json)，简单使用的够用的，不过如果想进行更多的骚操作(比如通过判断用户身份，展示不同的导航，突出中间的导航栏引导用户点击...)，就需要自己自定义了。

## 实现思路

首先我们先了解下微信的路由api和微信的路由机制，微信一共提供了5个路由api：`wx.navigateTo`、`wx.redirectTo`、`wx.switchTab`、`wx.navigateBack`、`wx.reLaunch`，具体文档位于[https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html](https://developers.weixin.qq.com/miniprogram/dev/api/ui-navigate.html)。

![](./gitpic/微信小程序页面栈.png)

其中我们用哪个呢？很显然`wx.switchTab`很合我们的口味，因为他的切换效果是没有推入推出动画的，更符合我们的习惯，那使用他的前提是我们需要在`app.json`文件中配置`tabBar`属性，而只要一配置了`tabBar`属性，系统原生的导航栏就出现了，幸好微信有一个隐藏原生导航栏的api：[wx.hideTabBar](https://developers.weixin.qq.com/miniprogram/dev/api/ui-tabbar.html#wxhidetabbarobject)。看到这里相信聪明的你已经知道了实现思路，就是隐藏掉原生的然后自己去实现一个导航栏贴在最下面。

## 分享一些我觉得需要注意的点

- 首先，微信的tab配置，支持2-5项，同时只有配置了tab的才能通过`wx.switchTab`方法跳转过去，因此我们自定义的导航栏数量也被限制在了2-5项，正常使用没什么，但是如果大家要基于权限判断做动态路由，就要慎重了；举个例子，有a,b两种身份，a可以看到的页面是A、B、C，b可以看到的页面是D、E、F，这种情况就不能通过本项目的代码实现了，好在通过观察发现，并不是不同身份的人看到的页面完全不一样(如果完全不一样可以做两个小程序啊)，比如 a : A、B、C，b: A、B、D，这就完全没问题了😁

- 如果有过SPA页面开发经验的小伙伴注意，小程序并不是单页面的，拿本例来说，tabbar组件在各个页面都会渲染一次，大家互不影响，这也是我为何在wxml中写死`activeIdx`的原因，所以这点需要注意，你改了这个页面的tabbar，别的页面不一定会变的。关于这个问题我能想到的解决办法是用全局store管理状态，这样能保证多个组件的表现一致

- 还有就是config/router.js存在的必要，主要原因是我们无法通过代码获取到app.json的配置，这就相当于我们的配置要写两份并且大部分值是一样的，这个目前还没想到很好的解决办法。

## 总结

代码大家可以直接打开上面的小程序片段或者下载本仓库后查看src文件夹，代码不是很复杂定位是提供一种实现思路，所以对于很多项目来说直接copy它并不能满足项目需要，可以根据自身业务去完全重写一份。如果对本代码或在开发过程中遇到什么问题，欢迎与我交流[858582381](http://wpa.qq.com/msgrd?v=3&uin=858582381)~