'use strict';

// path
var path = require('path');

// static path
var distPath = path.resolve(__dirname, '../../../dishi-electron/src/renderer');

// output
module.exports = {
    filename: '[name].[contenthash:8].js',
    path: distPath,
    clean: true,
};