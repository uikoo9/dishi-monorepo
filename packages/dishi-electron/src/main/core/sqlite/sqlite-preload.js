'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { IPC_SQLITE_CREATE_TABLE } = require('../../_util/constant.js');

/**
 * createTableIPC
 */
exports.createTableIPC = async () => {
    return await ipcRenderer.invoke(IPC_SQLITE_CREATE_TABLE);
};