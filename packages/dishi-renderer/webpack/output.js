// path
const path = require('path');

// static path
const distPath = path.resolve(__dirname, '../../dishi-electron/src/renderer');

// output
module.exports = {
  filename: '[name].[contenthash:8].js',
  path: distPath,
  clean: true,
};
