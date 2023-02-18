'use strict';

// alias
var alias = require('./common/alias.js');

// entry
var entry = require('./electron/entry.js');

// output
var output = require('./electron/output.js');

// plugins
var plugins = require('./electron/plugins.js');

/**
 * qiao.webpack.js
 */
module.exports = {
  entry: entry,
  output: output,
  plugins: plugins,
  resolve: {
    alias: alias,
  },
  performance: {
    hints: false,
  },
};
