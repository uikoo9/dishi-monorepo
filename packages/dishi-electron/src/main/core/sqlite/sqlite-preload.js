'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const {
    IPC_SQLITE_CREATE_TABLE,
    IPC_SQLITE_INSERT_DATA,
    IPC_SQLITE_SELECT_DATA,
} = require('../../_util/constant.js');

/**
 * createTableIPC
 */
exports.createTableIPC = async () => {
    return await ipcRenderer.invoke(IPC_SQLITE_CREATE_TABLE);
};

/**
 * insertDataIPC
 * @returns 
 */
exports.insertDataIPC = async () => {
    return await ipcRenderer.invoke(IPC_SQLITE_INSERT_DATA);
};

/**
 * selectDataIPC
 * @returns 
 */
exports.selectDataIPC = async () => {
    return await ipcRenderer.invoke(IPC_SQLITE_SELECT_DATA);
};