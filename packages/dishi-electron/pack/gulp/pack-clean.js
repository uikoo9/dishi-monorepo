// gulp
const { parallel } = require('gulp');

// del
const { rm } = require('qiao-file');

// clean
const cleanDist = async () => await rm('../../dist');
const cleanOut = async () => await rm('../../out');

// go
exports.clean = parallel(cleanDist, cleanOut);
