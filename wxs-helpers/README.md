# 小程序火力全开--wxs应用

小程序代码片段: [https://developers.weixin.qq.com/s/wLqNVcm57s6A](https://developers.weixin.qq.com/s/wLqNVcm57s6A)

## 场景描述

如果有过 Vue 开发经验，相信在小程序开发过程中体会到了种种不方便，我前几天遇到一个很简单的问题，把时间戳成用户可读的格式，比如 `155216232488` 为 `2019-02-15 15:37:12`，其实这个很简单，网上一搜一大堆，但是如果我们拿到了一个小说的对象比如下面这样的数据结构

	let book = {
	  name: "美艳俏娇娘",
	  totalChapter: 1204,
	  category: "都市生活",
	  updateTime: 155216232488
	};
	
难道我们 `book.updateTime = formatTime(book.updateTime)`这样操作下吗，总感觉不优雅。在Vue中，我们可以直接使用[过滤器](https://cn.vuejs.org/v2/guide/filters.html)实现。

	{{ book.updateTime | formatTime }}
	
	filters:{
		formatTime (time) {
			return ........
		}
	}

但是小程序中是没有过滤器这个东西的，那怎么才能优雅的展示时间呢。这就要提到咱们今天的主角wxs。

## 开始使用

wxs是wx script，[官方文档在这里](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/)。注意wxs不是JavaScript，但是和JavaScript有很高的相似性，并且wxs是运行在视图层的脚本，熟悉小程序的朋友都知道，小程序分为逻辑层和视图层，js放在逻辑层里面，渲染在视图层，数据通过`setData`方法传到视图层。所以如果有在视图层运行的脚本，一定会比逻辑层脚本更快的响应，当然这不是推测的，是官方文档里介绍的

> 由于运行环境的差异，在 iOS 设备上小程序内的 wxs 会比 javascript 代码快 2 ~ 20 倍。在 android 设备上二者运行效率无差异。

更多信息还是看文档吧，言归正传，让我们来看看怎么用wxs实现类似vue的过滤器功能。

首先我们要定义一个wxs文件，暂且叫他`date.wxs`吧

	// date.wxs
	function formatNumber(n) {
	    var str = n.toString()
	    return str[1] ? str : '0'+str
	}
	  
	function formatTime(timestamp) {
		// eslint-disable-next-line
		var date = getDate(timestamp)
		var hour = date.getHours()
		var minute = date.getMinutes()
		var second = date.getSeconds()
		  
		var t2 = [hour,minute,second].map(formatNumber).join(':')
		  
		return t2
	}
		
	function formatDate(timestamp) {
	  // eslint-disable-next-line
		var date = getDate(timestamp)
		var year = date.getFullYear()
		var month = date.getMonth() + 1
		var day = date.getDate()
		  
		var t1 = [year,month,day].map(formatNumber).join('-')
		  
		return t1
	}
	  
	module.exports = {
		formatTime: formatTime,
		formatDate: formatDate,
	}
	
这是一个CommonJS模块化写法，只有一个奇怪的地方，那就是定义变量竟然用的是`var`而不是`let`或`const`这是因为wxs目前还不支持es6的语法，只能梦回es5，所以如果大家在写wxs出现编译错误的时候，可以看看是不是使用了新的语法特性。

那么我们如何使用呢？看下wxml文件

	// index.wxml
	<wxs src="./date.wxs" module="date" />
	<view>当前时间戳：{{currentTime}}</view>
	<button bind:tap="updateCurrent">更新当前时间</button>
	
	<view>格式化日期：{{date.formatDate(currentTime)}}</view>
	<view>格式化时间：{{date.formatTime(currentTime)}}</view>
	
使用起来挺简单的直接在`{{}}`中调用方法名就行了。这样我们优雅的时间格式化就实现了。

## 注意事项

总体上看并没有什么难点，但要明白一个概念，wxs不等于JavaScript，这就意味着一些属性和方法是无法使用的，就比如上面的`date.wxs`我们在获取date对象实例的时候，没有用`new Date(time)`,而是用的`getDate(time)`这就是方法的差异性，我觉得这部分的东西用到什么了再去看什么就行了，[具体文档在这里](https://developers.weixin.qq.com/miniprogram/dev/framework/view/wxs/06datatype.html)。

## 总结

标题名为什么叫火力全开呢，我的意思是熟读小程序各个接口，尽可能多地了解它提供给开发者的特性，方便我们构筑更高效的程序。就像这个wxs的使用，我问了几个一年多经验的小程序开发者，他们都没有应用过，所以有时候还是需要我们不停的探索，熟读文档。

本次也只是对wxs的简单使用，关于wxs事件这块，我应用了一下，真是难用到一定程度了。目前还没有找到很好的应用场景，可以看下[官方的例子](https://developers.weixin.qq.com/s/ylShYBma7f5J)以后发现了会继续更新。有任何问题欢迎提issue或者联系我qq[858582381](http://wpa.qq.com/msgrd?v=3&uin=858582381)