// pkg
const pkg = require('../dist/package.json');

// const
const arch = process.arch;
const platform = process.platform;
const version = pkg.version;
const iconPath = `pack/icon/icon${platform === 'darwin' ? '.icns' : '.ico'}`;

// log
console.log(`arch: ${arch}`);
console.log(`platform: ${platform}`);
console.log(`version: ${version}`);
console.log(`iconPath: ${iconPath}`);

// config
// https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html
let config = {
  overwrite: true,
  asar: true,
  dir: 'dist',
  out: 'out',

  arch: arch,
  platform: platform,

  name: 'dishi',
  icon: iconPath,
  appVersion: version,
  appCopyright: 'Copyright © 2023 insistime.com版权所有',
};

// darwin
if (process.platform === 'darwin') {
  // app bundle id
  config.appBundleId = 'com.insistime.dishi';

  // sign
  config.osxSign = {
    identity: 'Developer ID Application: Gang Wang (V5HT5XN7MW)',
  };

  // // notarize
  // config.osxNotarize = {
  //   tool: 'notarytool',
  //   teamId: '88L2Q4487U',
  //   appleId: 'vincentqiao@tencent.com',
  //   appleIdPassword: 'vnfm-lptx-kfzi-wnlp',
  // };
}

// cos config，可以配置cos，直接上传到cos上
const cosConfig = require('./config.json');
config.cosConfig = {
  SecretId: cosConfig.SecretId,
  SecretKey: cosConfig.SecretKey,
  Region: cosConfig.Region,
  Bucket: cosConfig.Bucket,
  destPath: '21_dishi/dmg/',
};

// log
console.log('config:');
console.log(config);
console.log();

// qe config
module.exports = config;
