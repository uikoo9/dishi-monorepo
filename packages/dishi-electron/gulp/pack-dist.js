// gulp
const { parallel, series } = require('gulp');

// cp
const { cp } = require('qiao-file');

// exec
const { exec } = require('child_process');

// main
const copyMain = async () => await cp('../../dishi-main', '../dist/main');
const npmInstallMain = async () => exec('cd ../dist/main && npm i');

// renderer
const buildRenderer = async () => exec('cd ../../dishi-renderer && npm run build');

// go
exports.dist = parallel(series(copyMain, npmInstallMain), buildRenderer);
