// gulp
const { series } = require('gulp');

// cp
const { cp } = require('qiao-file');

// exec
const { exec } = require('child_process');

// main
const copyMain = async () => await cp('../../dishi-main', '../dist');
const npmInstallMain = async () => exec('cd ../dist && npm i');

// renderer
const buildRenderer = async () => exec('cd ../../dishi-renderer && npm run build');

// go
exports.dist = series(copyMain, npmInstallMain, buildRenderer);
