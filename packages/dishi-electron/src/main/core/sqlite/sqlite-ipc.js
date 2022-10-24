'use strict';

// electron
const { ipcMain } = require('electron');

// sqlite
const { dbCreateTable, dbInsertData } = require('./sqlite-main.js');

// const
const { IPC_SQLITE_CREATE_TABLE, IPC_SQLITE_INSERT_DATA } = require('../../_util/constant.js');

/**
 * ipc sqlite create table
 */
ipcMain.handle(IPC_SQLITE_CREATE_TABLE, (sql) => {
    return dbCreateTable(sql); 
});

/**
 * ipc sqlite insert data
 */
ipcMain.handle(IPC_SQLITE_INSERT_DATA, (sql, params) => {
    return dbInsertData(sql, params); 
});