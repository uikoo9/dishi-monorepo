'use strict';

// path
var path = require('path');

// template path
var pcPath = path.resolve(__dirname, '../template/pc.html');
var mobilePath = path.resolve(__dirname, '../template/mobile.html');

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

    // dishi
    {
        type: 'html',
        inject: 'body',
        title: 'dishi-index-pc',
        chunks: ['dishi-index-pc'],
        filename: 'dishi-index-pc.html',
        template: pcPath,
    },
    {
        type: 'html',
        inject: 'body',
        title: 'dishi-index-mobile',
        chunks: ['dishi-index-mobile'],
        filename: 'dishi-index-mobile.html',
        template: mobilePath,
    },
];
