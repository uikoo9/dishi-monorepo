'use strict';

// electron
const { ipcRenderer } = require('electron');

// const
const { 
    IPC_ZIP_CLICK_SRC,
    IPC_ZIP_CLICK_DEST,
    IPC_ZIP_CLICK_GO,
} = require('../../_util/constant.js');

/**
 * clickPickSrcIPC
 */
exports.clickPickSrcIPC = async () => {
    return await ipcRenderer.invoke(IPC_ZIP_CLICK_SRC);
};

/**
 * clickPickDestIPC
 */
exports.clickPickDestIPC = async () => {
    return await ipcRenderer.invoke(IPC_ZIP_CLICK_DEST);
};

/**
 * clickGoIPC
 */
exports.clickGoIPC = async (src, dest) => {
    return await ipcRenderer.invoke(IPC_ZIP_CLICK_GO, src, dest);
};