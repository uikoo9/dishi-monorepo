// pkg
const pkg = require('../dist/package.json');

// const
const arch = process.arch;
const platform = process.platform;
const version = pkg.version;
const iconPath = `pack/icon/icon${platform === 'darwin' ? '.icns' : '.ico'}`;

// qiao-electron config
// https://electron.github.io/electron-packager/main/interfaces/electronpackager.options.html
module.exports = {
  overwrite: true,
  asar: false,
  dir: 'dist',
  out: 'out',

  arch: arch,
  platform: platform,

  name: 'dishi',
  icon: iconPath,
  appVersion: version,
  appCopyright: 'Copyright © 2023 insistime.com版权所有',
};
