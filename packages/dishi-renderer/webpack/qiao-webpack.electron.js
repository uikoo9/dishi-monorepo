// alias
const alias = require('./alias.js');

// entry
const entry = require('./entry.js');

// output
const output = require('./output.js');

// plugins
const plugins = require('./plugins.js');

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
