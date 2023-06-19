// alias
const alias = require('./webpack/alias.js');

// entry
const entry = require('./webpack/entry.js');

// output
const output = require('./webpack/output.js');

// plugins
const plugins = require('./webpack/plugins.js');

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
