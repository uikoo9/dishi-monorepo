// q
import { setApplicationMenu, setAboutVersion } from 'qiao-electron';

// version
import { version } from '../../package.json';

/**
 * initMenu
 */
export const initMenu = () => {
  // set application menu
  setApplicationMenu();

  // set about version
  setAboutVersion(version);
};
