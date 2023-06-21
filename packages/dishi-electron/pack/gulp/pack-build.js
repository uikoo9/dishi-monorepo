// gulp
const { series } = require('gulp');

// cp
const { cp } = require('qiao-file');

// exec
const util = require('util');
const exec = util.promisify(require('node:child_process').exec);

// renderer
const buildRenderer = async () => await exec('cd ../../../../ && npm run build');

// main
const copyMain = async () => await cp('../../../dishi-main', '../../dist');
const cmd = `cd ../../dist && npm i ${process.arch === 'arm64' ? '--target_arch=arm64' : ''}`;
console.log(`cmd:${cmd}`);
const npmInstallMain = async () => await exec(cmd);

// build
exports.build = series(buildRenderer, copyMain, npmInstallMain);
