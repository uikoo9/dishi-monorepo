'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { 
    IPC_SQLITE_CREATE_TABLE, 
    IPC_SQLITE_INSERT_DATA, 
    IPC_SQLITE_SELECT_DATA,
    IPC_SQLITE_DELETE_DATA,
} = require('../../_util/constant.js');

/**
 * createTableIPC
 * @param {*} sql 
 * @returns 
 */
exports.createTableIPC = async (sql) => {
    return await ipcRenderer.invoke(IPC_SQLITE_CREATE_TABLE, {sql});
};

/**
 * insertDataIPC
 * @param {*} sql 
 * @param {*} params 
 * @returns 
 */
exports.insertDataIPC = async (sql, params) => {
    return await ipcRenderer.invoke(IPC_SQLITE_INSERT_DATA, {sql, params});
};

/**
 * selectDataIPC
 * @param {*} sql 
 * @param {*} params 
 * @returns 
 */
exports.selectDataIPC = async (sql, params) => {
    return await ipcRenderer.invoke(IPC_SQLITE_SELECT_DATA, {sql, params});
};

/**
 * deleteDataIPC
 * @param {*} sql 
 * @param {*} params 
 * @returns 
 */
exports.deleteDataIPC = async (sql, params) => {
    return await ipcRenderer.invoke(IPC_SQLITE_DELETE_DATA, {sql, params});
};