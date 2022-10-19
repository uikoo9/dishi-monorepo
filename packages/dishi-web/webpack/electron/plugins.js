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

    // indexeddb
    {
        type: 'html',
        inject: 'body',
        title: 'dishi-indexeddb-pc',
        chunks: ['dishi-indexeddb-pc'],
        filename: 'index.html',
        template: pcPath,
    },
];
