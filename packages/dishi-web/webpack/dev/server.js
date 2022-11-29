"use strict";

// path
var path = require("path");

// static path
var distPath = path.resolve(__dirname, "../../static");

/**
 * dev server
 */
module.exports = {
  port: 5277,
  static: distPath,
};
