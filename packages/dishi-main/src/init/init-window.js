// electron
import { app, BrowserWindow } from 'electron';

// win
import { openIndexWindow } from '../window/window.js';

/**
 * initWindow
 */
export const initWindow = async () => {
  await openIndexWindow();

  // activate
  app.on('activate', async () => {
    if (BrowserWindow.getAllWindows().length === 0) await openIndexWindow();
  });
};
