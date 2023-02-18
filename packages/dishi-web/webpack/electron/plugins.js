'use strict';

// path
var path = require('path');

// template path
var pcPath = path.resolve(__dirname, './pc.html');

/**
 * qiao.webpack.js
 */
module.exports = [
  // css
  {
    type: 'css',
    filename: '[name].[contenthash:8].css',
    chunkFilename: '[id].[contenthash:8].css',
    ignoreOrder: true,
  },

  // electron
  {
    type: 'html',
    inject: 'body',
    title: 'dishi-indexeddb-electron',
    chunks: ['dishi-indexeddb-electron'],
    filename: 'index.html',
    template: pcPath,
  },
];
