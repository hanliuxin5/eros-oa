<div align=center>

![eros](http://upload.ouliu.net/i/20180124175551qrzlq.png)

</div>


## 介绍

**eros 不是框架，是基于 [weex](https://weex-project.io/cn/) 封装、面向前端的 [vue](https://cn.vuejs.org/v2/guide/) 写法的一整套 APP 开源解决方案。**

> 简单来说，在 Weex 提供的强大支持下，用一份 Vue 写法的代码，编译成 iOS/Android 两端原生 APP。

## 文档
- [中文文档](https://bmfe.github.io/eros-docs/)
- [English document](https://bmfe.github.io/eros-docs/#/en-us/)

[帮助我们完善和翻译文档](https://github.com/bmfe/eros-docs)
## Demo

 开发者可以扫描二维码来下载 eros app 来进行体验，iOS首次打开App需要在 **设置->通用->设备管理 信任开发证书。**
 
| Eros iOS demo | Eros Android demo |
|---------|---------|
|![【ios 下载】](https://bmfe.github.io/eros-docs/zh-cn/image/iosqr.png)|![【android 下载】](http://upload.ouliu.net/i/201801241911376ee1z.png)|
|[【预览录屏】](https://bmfe.github.io/eros-docs/zh-cn/image/show.gif)|[【预览录屏】](https://bmfe.github.io/eros-docs/zh-cn/image/androidDemo.gif)|
|[【下载链接】](http://fir.im/eros)|[【下载链接】](https://fir.im/weexerosandroid)|

## 选择了 EROS 可以得到什么？
### 原生能力
暴露给前端大量便捷实用的 [原生能力](https://bmfe.github.io/eros-docs/#/zh-cn/eros_widget?id=axios%EF%BC%88%E8%AF%B7%E6%B1%82%EF%BC%89) 
，拓展了 [非常有用的事件](https://bmfe.github.io/eros-docs/#/zh-cn/eros_widget?id=%E9%A1%B5%E9%9D%A2%E5%85%A8%E5%B1%80%E4%BA%8B%E4%BB%B6) 。

- 路由
- 原生事件
- 本地化存储
- 发布订阅
- Restful 请求，支持 Cookie
- 图片处理
- 拍照上传
- 浏览图片
- 操作本地图片
- 拨打电话
- 发短信
- 选择联系人
- 地图
- 定位
- 个推
- 支付
- 分享
- 原生弹窗
- 拷贝
- 扫一扫
- Echart
- 日历
- Bindingx
- ...

### 开发过程中
 
- 详细的文档
- **iOS/Android 模拟器/真机热刷新**
- 支持 `weex debug`
- 一套 Vue 代码，两端原生应用
- 通过 `appboard JS bundle` 极大的减少了公共代码冗余
- 为大型项目内置了中介者服务，方便管理业务间的事件交互

### 脚手架 [eros-cli](https://github.com/bmfe/eros-cli)：
- 随时初始化最新的开发项目模板。
- [简单而且快速的依赖更新。](https://bmfe.github.io/eros-docs/#/zh-cn/base_dependencies)
- 支持生成内置包，全量包，增量包。
- 支持随时更新模板内容。
- 支持 Weex 两种入口开发方式 `JS/Vue`。
- 内置与增量服务器的交互逻辑。


### 热更新机制

**由于 Weex 的机制，我们能在远端发布代码，客户端更新并生效，并不需要审核发布流程，给 APP 提供了强大的迭代动力。**

- [热更新详解](https://bmfe.github.io/eros-docs/#/zh-cn/advanced_diff)
- [eros-publish 开源的，简单的热更新后台逻辑](https://github.com/bmfe/eros-publish)

### UI 库
使用 UI 库，开发效率也会大大提升：
* [alibaba/weex-ui](https://github.com/alibaba/weex-ui)
* [bui](https://github.com/bingo-oss/bui-weex)


## EROS 正在做什么?
EROS 在进行组件化的开发，争取做到插件可配置，让原生开发者专注拓展原生能力，前端开发者专注与业务逻辑，极力打造一个可共享的插件社区。

## 开源现状
在 EROS 开源的半年时间，已帮助近百位开发者开发了属于自己的原生应用，这里先简单列举几个，后续会征求同意来展示：

* StarLife 
* 赢商大数据 
* 易送 
* 蜂觅 
* JEX
* 1234TV
* 博山头条
* 新长宁慧生活
* 辽河油田
* 连云港政协
* 连云港古树
* 亿康通
* ...

涉及行业分布于区块链、资讯、医疗、招商、购物、政府、办公、直播等。

## 支持性
跟随着 weex 的支持性，**但 eros 并不支持开发代码兼容 web 端**
* Android 4.1 (API 16)
* iOS 8.0+
* WebKit 534.30+

## 快速开始
* [EROS 入门指南](https://bmfe.github.io/eros-docs/#/zh-cn/tutorial_newcomer)
* [EROS 更新日志](https://bmfe.github.io/eros-docs/#/zh-cn/update_log_all)

## 周边系统

> 以下项目，全部开源：

| Project | Description |
|---------|-------------|
| [eros-cli](https://github.com/bmfe/eros-cli) | 简单的 eros 项目构建工具，可以提供搭建，开发，调试和发布等功能。 |
| [eros-publish](https://github.com/bmfe/eros-publish) | 简单的服务器差分包更新逻辑，需要和脚手架搭配使用。 |
| [eros-widget](https://github.com/bmfe/eros-widget) | 二次封装 module。 |
| [eros-ios-library](https://github.com/bmfe/Benmu-iOS-Library) | eros ios Weex 项目依赖库。 |
| [eros-ios-sdk](https://github.com/bmfe/WeexiOSSDK) | eros ios Weex sdk。 |
| [eros-android-framework](https://github.com/bmfe/WeexErosFramework) | eros weex 移动解决方案安卓端框架。 |
| [eros-android-widget](https://github.com/bmfe/BMWidget) | eros 安卓组件库。 |
| [eros-android-sdk](https://github.com/bmfe/WeexSDK) | eros 安卓移动解决方案安卓端 WeexSDK。 |

## 社区
* [eros 网易严选](https://github.com/bmfe/eros-yanxuan-demo-v2)
* [weex-eros-book 书籍阅读 app](https://github.com/wennjie/weex-book)
* [lygtq-eros-publish 服务器增量发布逻辑](https://github.com/hodgevk/lygtq-eros-publish)
* [eros-node-server 服务器增量发布逻辑](https://github.com/shawn-tangsc/eros-node-server)


## 讨论组
eros 正式开源到现在已经有了一个 300+ 开发者的开发群 (只能通过邀请)，群里有大量开发者已经有 eros 产品在开发中和已上线，为了维护一个良好的环境，还请先熟知以下群规：

* **此并不是流量群，也并非广告群，是为了大家一起成长，保证信息的有效性，如果发黄赌毒，不和谐言语，与学习无关的广告，推广内容，无关小程序，不会商量，直接会被踢，且不会再有入群机会。**
* eros 开发中遇到任何问题可以随时发到群里 weex 开发相关可以一起讨论。
* 如果不能及时回答也请耐心等待，群里开发丰富经验的同学会帮您一起看问题。
* 除了 eros 自身紧急 BUG 外的问题，均需要提 issue，我们会按 issue 处理，目的是为了更好的给其他开发者参考，紧急问题请直接抛到群里，我们会直接远程帮助您调试。


| QQ 群 |
|---------|
|![](https://gitee.com/uploads/images/2017/1026/154652_651ba169_1595985.jpeg) |

## License
[MIT](https://opensource.org/licenses/MIT)

Copyright (c) 2017-present, 本木医疗