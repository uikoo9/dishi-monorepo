// gulp
const { series } = require('gulp');

// clean
const { clean } = require('./pack-clean.js');

// dist
const { dist } = require('./pack-dist.js');

// go
exports.default = series(clean, dist);
