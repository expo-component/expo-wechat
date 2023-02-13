## Expo Wechat

[expo](https://expo.dev/) 对接 [微信SDK2.0](https://developers.weixin.qq.com/doc/oplatform/Mobile_App/Access_Guide/iOS.html)

## 使用

### 1. 安装依赖

```shell
expo install expo-wechat
```

### 2.1 【iOS】配置iOS

{project}/ios/{ProjectDir}/info.plist 添加如下配置：

```xml
<key>LSApplicationQueriesSchemes</key>
<array>
  <string>weixin</string>
  <string>wechat</string>
  <string>weixinULAPI</string>
</array>
```

### 2.2 【Android】配置Android


