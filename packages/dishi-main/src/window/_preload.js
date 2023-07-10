// electron
import { contextBridge } from 'electron';

// custom preload
import { createTableIPC, insertDataIPC, selectDataIPC, deleteDataIPC } from '../core/sqlite/sqlite-preload.js';

// preload
contextBridge.exposeInMainWorld('electron', {
  createTableIPC,
  insertDataIPC,
  selectDataIPC,
  deleteDataIPC,
});
