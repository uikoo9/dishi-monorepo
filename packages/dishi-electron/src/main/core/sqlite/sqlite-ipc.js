'use strict';

// electron
const { ipcMain } = require('electron');

// const
const {
    IPC_SQLITE_CREATE_TABLE,
    IPC_SQLITE_INSERT_DATA,
    IPC_SQLITE_SELECT_DATA,
    IPC_SQLITE_DELETE_DATA,
} = require('../../_util/constant.js');

// sqlite
const {
    dbCreateTable,
    dbInsertData,
    dbSelectData,
    dbDeleteData,
} = require('./sqlite-main.js');

/**
 * ipc sqlite create table
 */
ipcMain.handle(IPC_SQLITE_CREATE_TABLE, (event, args) => {
    return dbCreateTable(args.sql);
});

/**
 * ipc sqlite insert data
 */
ipcMain.handle(IPC_SQLITE_INSERT_DATA, (event, args) => {
    console.log(args);
    return dbInsertData(args.sql, args.params);
});

/**
 * ipc sqlite select data
 */
ipcMain.handle(IPC_SQLITE_SELECT_DATA, (event, args) => {
    console.log(args);
    return dbSelectData(args.sql, args.params);
});

/**
 * ipc sqlite delete data
 */
ipcMain.handle(IPC_SQLITE_DELETE_DATA, (event, args) => {
    console.log(args);
    return dbDeleteData(args.sql, args.params);
});