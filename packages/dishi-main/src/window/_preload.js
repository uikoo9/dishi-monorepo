// electron
import { contextBridge } from 'electron';

// preload
import { getPreloads } from 'qiao-electron';

// custom preload
import { createTableIPC, insertDataIPC, selectDataIPC, deleteDataIPC } from '../core/sqlite/sqlite-preload.js';

// get all preloads
const getAllPreloads = () => {
  const customPreloads = {
    createTableIPC,
    insertDataIPC,
    selectDataIPC,
    deleteDataIPC,
  };

  return getPreloads(customPreloads);
};

// preload
const allPreloads = getAllPreloads();
contextBridge.exposeInMainWorld('electron', allPreloads);
