'use strict';

// electron
const { ipcMain } = require('electron');

// open file
const { 
    dialogOpenFolder,
    dialogOpenFileAndFolder,
} = require('qiao-electron');

// zip main
const { zipOrUnzip } = require('./zip-main.js');

// const
const { 
    IPC_ZIP_CLICK_SRC,
    IPC_ZIP_CLICK_DEST,
    IPC_ZIP_CLICK_GO,
} = require('../../_util/constant.js');

// ipc zip click src
ipcMain.handle(IPC_ZIP_CLICK_SRC, async () => {
    const res = await dialogOpenFileAndFolder({
        files: ['zip']
    });
    if(!res || res.canceled) return;

    return res.filePaths;
});

// ipc zip click dest
ipcMain.handle(IPC_ZIP_CLICK_DEST, async () => {
    const res = await dialogOpenFolder();
    if(!res || res.canceled) return;

    return res.filePaths;
});

// ipc zip click go
ipcMain.handle(IPC_ZIP_CLICK_GO, async (e, src, dest) => {
    return await zipOrUnzip(src, dest);
});