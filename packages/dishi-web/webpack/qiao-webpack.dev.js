'use strict';

// alias
var alias = require('./common/alias.js');

// entry
var entry = require('./common/entry.js');

// dev
var dev = require('./dev/server.js');

// plugins
var plugins = require('./dev/plugins.js');

/**
 * qiao.webpack.js
 */
module.exports = {
  devServer: dev,
  entry: entry,
  plugins: plugins,
  resolve: {
    alias: alias,
  },
  performance: {
    hints: false,
  },
};
