'use strict';

// electron
const { app } = require('electron');

// q
const { ipcInit } = require('qiao-electron');

// init ipc
ipcInit(require('../../package.json').version);

// init app
require('./init-app.js');

// init menu
require('./init-menu.js');

// init ipc
require('./init-ipc.js');

// app init
app.whenReady().then(() => {
  require('./init-window.js');
});
