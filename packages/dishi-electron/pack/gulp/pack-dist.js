// gulp
const { series } = require('gulp');

// clean
const { clean } = require('./pack-clean.js');

// build
const { build } = require('./pack-build.js');

// go
exports.default = series(clean, build);
