// q
import { setApplicationMenu, setAboutVersion } from 'qiao-x-menu';

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
