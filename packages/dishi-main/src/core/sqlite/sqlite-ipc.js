// electron
import { ipcMain } from 'electron';

// const
import {
  IPC_SQLITE_CREATE_TABLE,
  IPC_SQLITE_INSERT_DATA,
  IPC_SQLITE_SELECT_DATA,
  IPC_SQLITE_DELETE_DATA,
} from '../../_util/constant.js';

// sqlite
import { dbCreateTable, dbInsertData, dbSelectData, dbDeleteData } from './sqlite-main.js';

/**
 * SQLiteIPC
 */
export const SQLiteIPC = () => {
  // ipc sqlite create table
  ipcMain.handle(IPC_SQLITE_CREATE_TABLE, async (event, args) => {
    return await dbCreateTable(args.sql);
  });

  // ipc sqlite insert data
  ipcMain.handle(IPC_SQLITE_INSERT_DATA, async (event, args) => {
    console.log(args);
    return await dbInsertData(args.sql, args.params);
  });

  // ipc sqlite select data
  ipcMain.handle(IPC_SQLITE_SELECT_DATA, async (event, args) => {
    console.log(args);
    return await dbSelectData(args.sql, args.params);
  });

  // ipc sqlite delete data
  ipcMain.handle(IPC_SQLITE_DELETE_DATA, async (event, args) => {
    console.log(args);
    return await dbDeleteData(args.sql, args.params);
  });
};
