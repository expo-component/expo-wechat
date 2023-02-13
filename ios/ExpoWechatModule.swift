import ExpoModulesCore

public class ExpoWechatModule: Module {
  public func definition() -> ModuleDefinition {
    Name("ExpoWechat")

    // 检查用户是否安装微信
    Function("isWXAppInstalled") {
      return WXApi.isWXAppInstalled()
    }

    // 判断当前微信版本是否支持OpenApi
    Function("isWXAppSupport") {
      return WXApi.isWXAppSupport()
    }

    // 微信的itunes安装地址
    Function("getWXAppInstallUrl") {
      return WXApi.getWXAppInstallUrl()
    }

    // 当前微信SDK版本号
    Function("getVersion") {
      return WXApi.getVersion()
    }
  }
}
