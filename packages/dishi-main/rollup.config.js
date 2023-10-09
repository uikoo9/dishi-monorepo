// copy
const { rollupPluginCopy } = require('qiao-project');

// json
const { rollupPluginJson } = require('qiao-project');

// commonjs
const { rollupPluginCommonjs } = require('qiao-project');

// node
const { rollupPluginNodeResolve } = require('qiao-project');

// external
const external = [
  'electron',
  'path',
  'tty',
  'util',
  'os',
  'fs',
  'constants',
  'stream',
  'assert',
  'url',
  'zlib',
  'net',
  'child_process',
];

/**
 * rollup.config.js
 */
module.exports = [
  {
    input: 'src/index.js',
    output: {
      file: '../dishi-electron/dist/main/index.js',
      format: 'cjs',
    },
    external: external,
    plugins: [
      rollupPluginJson(),
      rollupPluginCommonjs(),
      rollupPluginNodeResolve({
        preferBuiltins: false,
        resolveOnly: (m) => {
          return m !== 'sqlite3';
        },
      }),
      rollupPluginCopy({
        targets: [{ src: 'package_bak.json', dest: '../dishi-electron/dist', rename: 'package.json' }],
      }),
    ],
  },
  {
    input: 'src/window/_preload.js',
    output: {
      file: '../dishi-electron/dist/main/preload.js',
      format: 'cjs',
    },
    external: external,
    plugins: [rollupPluginCommonjs(), rollupPluginNodeResolve()],
  },
];
