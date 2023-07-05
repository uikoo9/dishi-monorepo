// electron
import { app } from 'electron';

/**
 * initApp
 */
export const initApp = () => {
  // window all closed
  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
  });
};
