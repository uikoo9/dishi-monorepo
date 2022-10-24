'use strict';

// electron
const { ipcMain } = require('electron');

// const
const { 
    IPC_SQLITE_CREATE_TABLE, 
    IPC_SQLITE_INSERT_DATA, 
    IPC_SQLITE_SELECT_DATA,
} = require('../../_util/constant.js');

// sqlite
const { 
    dbCreateTable, 
    dbInsertData,
    dbSelectData,
} = require('./sqlite-main.js');

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

/**
 * ipc sqlite select data
 */
ipcMain.handle(IPC_SQLITE_SELECT_DATA, (sql, params) => {
    return dbSelectData(sql, params); 
});