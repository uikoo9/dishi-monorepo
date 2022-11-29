"use strict";

// electron
const { contextBridge } = require("electron");

// preload
const { getPreloads } = require("qiao-electron");

// custom preload
const {
  createTableIPC,
  insertDataIPC,
  selectDataIPC,
  deleteDataIPC,
} = require("../core/sqlite/sqlite-preload.js");

// get all preloads
const getAllPreloads = () => {
  const customPreloads = {
    createTableIPC,
    insertDataIPC,
    selectDataIPC,
    deleteDataIPC,
  };

  return getPreloads(customPreloads);
};

// preload
const allPreloads = getAllPreloads();
contextBridge.exposeInMainWorld("electron", allPreloads);
