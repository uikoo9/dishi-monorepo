// qiao
const qiao = require('../src/util/qiao.js');

// package
const pkg = require('../package.json');

// cmd for version
qiao.cli.cmd.version(pkg.version, '-v, --version').usage('<command> [options]');
