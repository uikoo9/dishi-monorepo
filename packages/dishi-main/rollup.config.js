// json
const json = require('@rollup/plugin-json');

// commonjs
const commonjs = require('@rollup/plugin-commonjs');

// node
const { nodeResolve } = require('@rollup/plugin-node-resolve');

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
    plugins: [
      json(),
      commonjs(),
      nodeResolve({
        preferBuiltins: false,
        resolveOnly: (m) => {
          return m !== 'sqlite3';
        },
      }),
    ],
    external: external,
  },
  {
    input: 'src/window/_preload.js',
    output: {
      file: '../dishi-electron/dist/main/preload.js',
      format: 'cjs',
    },
    plugins: [commonjs(), nodeResolve()],
    external: external,
  },
];
