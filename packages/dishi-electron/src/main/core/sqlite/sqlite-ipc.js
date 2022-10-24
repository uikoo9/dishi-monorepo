'use strict';

// electron
const { ipcMain } = require('electron');

// sqlite
const { dbCreateTable } = require('./sqlite-main.js');

// const
const { IPC_SQLITE_CREATE_TABLE } = require('../../_util/constant.js');

/**
 * ipc sqlite create table
 */
ipcMain.handle(IPC_SQLITE_CREATE_TABLE, (sql) => {
    return dbCreateTable(sql); 
});