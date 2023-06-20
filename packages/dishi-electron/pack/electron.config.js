// pkg
const pkg = require('../dist/package.json');

// const
const arch = process.arch;
const version = pkg.version;
const iconPath = `pack/icon/icon${arch === 'win32' ? '.ico' : '.icns'}`;

// log
console.log(`arch: ${arch}`);
console.log(`version: ${version}`);
console.log(`iconPath: ${iconPath}`);

// config
// https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html
let config = {
  dir: 'dist',
  out: 'out',
  overwrite: true,

  arch: arch,
  asar: true,

  name: 'dishi',
  icon: iconPath,
  appVersion: version,
  appCopyright: 'Copyright © 2023 insistime.com版权所有',
};

// cos config，可以配置cos，直接上传到cos上
const cosConfig = require('./config.json');
config.cosConfig = {
  SecretId: cosConfig.SecretId,
  SecretKey: cosConfig.SecretKey,
  Region: cosConfig.Region,
  Bucket: cosConfig.Bucket,
  destPath: '21_dishi/dmg/',
};

// qe config
module.exports = config;
