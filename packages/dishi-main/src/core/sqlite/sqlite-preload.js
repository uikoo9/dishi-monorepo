// electron
import { ipcRenderer } from 'electron';

// const
import {
  IPC_SQLITE_CREATE_TABLE,
  IPC_SQLITE_INSERT_DATA,
  IPC_SQLITE_SELECT_DATA,
  IPC_SQLITE_DELETE_DATA,
} from '../../_util/constant.js';

/**
 * createTableIPC
 * @param {*} sql
 * @returns
 */
export const createTableIPC = async (sql) => {
  return await ipcRenderer.invoke(IPC_SQLITE_CREATE_TABLE, { sql });
};

/**
 * insertDataIPC
 * @param {*} sql
 * @param {*} params
 * @returns
 */
export const insertDataIPC = async (sql, params) => {
  return await ipcRenderer.invoke(IPC_SQLITE_INSERT_DATA, { sql, params });
};

/**
 * selectDataIPC
 * @param {*} sql
 * @param {*} params
 * @returns
 */
export const selectDataIPC = async (sql, params) => {
  return await ipcRenderer.invoke(IPC_SQLITE_SELECT_DATA, { sql, params });
};

/**
 * deleteDataIPC
 * @param {*} sql
 * @param {*} params
 * @returns
 */
export const deleteDataIPC = async (sql, params) => {
  return await ipcRenderer.invoke(IPC_SQLITE_DELETE_DATA, { sql, params });
};
