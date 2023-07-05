// path
import path from 'path';

// qiao-electron
import { openWindowByFile } from 'qiao-x-window';

// const
import { WINDOW_INDEX_WIDTH, WINDOW_INDEX_HEIGHT, WINDOW_INDEX_COLOR } from '../_util/constant.js';

/**
 * open index window
 * @returns
 */
export const openIndexWindow = async () => {
  // urls
  const preloadPath = path.resolve(__dirname, './_preload.js');
  const indexFilePath = path.resolve(__dirname, '../../renderer/index.html');

  // options
  const options = {
    width: WINDOW_INDEX_WIDTH,
    height: WINDOW_INDEX_HEIGHT,
    backgroundColor: WINDOW_INDEX_COLOR,
    center: true,
    titleBarStyle: 'hiddenInset',
    webPreferences: {
      preload: preloadPath,
      nodeIntegration: true,
    },
  };

  // open
  return await openWindowByFile(indexFilePath, options);
};
