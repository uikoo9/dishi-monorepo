// pkg
const pkg = require('../dist/package.json');

// const
const arch = process.arch;
const platform = process.platform;
const appName = 'dishi';
const appIcon = `pack/icon/icon${platform === 'darwin' ? '.icns' : '.ico'}`;
const appVersion = pkg.version;

// qiao-electron config
module.exports = {
  // 是否覆盖已经生成的文件
  overwrite: true,

  // 是否将源码打包为 asar 格式
  asar: false,

  // 待打包的文件夹地址
  dir: 'dist',

  // 打包的目标文件夹地址
  out: 'out',

  // 打包的 arch
  arch: arch,

  // 打包的platform
  platform: platform,

  // 应用的名称
  name: appName,

  // 应用的图标
  icon: appIcon,

  // 应用版本号
  appVersion: appVersion,

  // 应用的版权说明
  appCopyright: 'Copyright © 2023 insistime.com版权所有',

  // dmg配置项-背景图
  dmgBackground: 'pack/icon/bg.png',

  // dmg配置项-内容位置
  dmgContents: [
    { x: 80, y: 60, type: 'file' },
    { x: 260, y: 60, type: 'link' },
  ],
};
