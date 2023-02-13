import ExpoWechatModule from './ExpoWechatModule';

// 微信接入
export function isWXAppInstalled(): string {
  return ExpoWechatModule.isWXAppInstalled();
}

export function isWXAppSupport(): string {
  return ExpoWechatModule.isWXAppSupport();
}

export function getWXAppInstallUrl(): string {
  return ExpoWechatModule.getWXAppInstallUrl();
}

export function getVersion(): string {
  return ExpoWechatModule.getVersion();
}
