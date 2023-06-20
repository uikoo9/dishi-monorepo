// gulp
const { series, parallel } = require('gulp');

// cp
const { cp } = require('qiao-file');

// exec
const { exec } = require('child_process');

// main
const copyMain = async () => await cp('../../../dishi-main', '../../dist');
const cmd = `cd ../../dist && npm i ${process.arch === 'arm64' ? '--target_arch=arm64' : ''}`;
console.log(`cmd:${cmd}`);
const npmInstallMain = async () => exec(cmd);

// renderer
const buildRenderer = async () => exec('cd ../../../dishi-renderer && npm run build');

// build
exports.build = series(copyMain, parallel(npmInstallMain, buildRenderer));
