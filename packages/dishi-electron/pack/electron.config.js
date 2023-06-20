// pkg
const pkg = require('../dist/package.json');

// config
let config = {
  // app环境，online，test之类的，会拼接在dmg安装包名上
  appEnv: 'online',

  // app名称，默认从主进程下的package.json中获取
  appName: '滴石',

  // app版本号，会显示在dmg安装包名以及关于面板上，默认从主进程下的package.json中获取
  appVersion: pkg.version,

  // app应用图标
  appIconPath: 'pack/icon/icon',

  // app权限声明，会显示在关于面板上
  appCopyright: 'Copyright © 2022 滴石版权所有',

  // app操作系统，详见https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html#arch
  arch: process.arch,

  // app应用包中的app文件夹是否使用asar格式，默认为false
  asar: true,

  // app中主进程src路径
  srcPath: 'src',

  // 最终要打包到app应用包中的文件和文件夹，在dist这一步会复制出去
  srcFiles: ['main', 'node_modules', 'renderer', 'package.json'],

  // srcFiles中的文件和文件夹会复制到这个目录
  distPath: 'dist',

  // app应用包及dmg安装包生成的路径
  outPath: 'out',

  // app安装包dmg中的背景图
  // dmgBackground: 'pack/img/bg.png',
};

// cos config，可以配置cos，直接上传到cos上
// const cosConfig = require('./config.json');
// config.cosConfig = {
//   SecretId: cosConfig.SecretId,
//   SecretKey: cosConfig.SecretKey,
//   Region: cosConfig.Region,
//   Bucket: cosConfig.Bucket,
//   destPath: '21_dishi/dmg/',
// };

// qe config
module.exports = config;
