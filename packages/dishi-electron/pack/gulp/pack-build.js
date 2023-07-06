// gulp
const { series } = require('gulp');

// exec
const util = require('util');
const exec = util.promisify(require('node:child_process').exec);

// renderer
const buildRenderer = async () => await exec('cd ../../../../ && npm run build');

// main
const cmd = `cd ../../dist && npm i ${process.arch === 'arm64' ? '--target_arch=arm64' : ''}`;
console.log(`cmd:${cmd}`);
const npmInstallMain = async () => await exec(cmd);

// build
exports.build = series(buildRenderer, npmInstallMain);
