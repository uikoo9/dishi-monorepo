// electron
import { app } from 'electron';

// init
import { initApp } from './init-app.js';
import { initMenu } from './init-menu.js';
import { initIPC } from './init-ipc.js';
import { initWindow } from './init-window.js';

/**
 * init
 */
export const init = () => {
  // init app
  initApp();

  // init menu
  initMenu();

  // init ipc
  initIPC();

  // app init
  app.whenReady().then(() => {
    initWindow();
  });
};
