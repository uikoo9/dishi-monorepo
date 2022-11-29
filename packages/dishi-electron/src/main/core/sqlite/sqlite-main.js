"use strict";

// path
const path = require("path");

// electron
const { app } = require("electron");

// sqlite
const {
  createDB,
  createTable,
  dropTable,
  showTables,
  insertData,
  modifyData,
  deleteData,
  selectData,
} = require("qiao-sqlite");

// json
const { success, danger } = require("qiao-json");

/**
 * sqlite
 * @returns
 */
exports.sqlite = () => {
  const userDataPath = app.getPath("userData");
  const dbPath = path.resolve(userDataPath, "./electron.db");
  const db = createDB(dbPath);

  return db;
};

/**
 * dbCreateTable
 * @param {*} sql
 * @returns
 */
exports.dbCreateTable = async (sql) => {
  // check
  if (!sql) return danger("need create table sql");

  // db
  const db = exports.sqlite();

  // create table
  try {
    await createTable(db, sql);
    return success("create table success");
  } catch (e) {
    // return danger('create table fail', e);
    return success("create table success");
  }
};

/**
 * dbDropTable
 * @param {*} tableName
 * @returns
 */
exports.dbDropTable = async (tableName) => {
  // check
  if (!tableName) return danger("need tableName");

  // db
  const db = exports.sqlite();

  // drop table
  try {
    await dropTable(db, tableName);
    return success("drop table success");
  } catch (e) {
    return success("drop table success");
  }
};

/**
 * dbShowTables
 * @returns
 */
exports.dbShowTables = async () => {
  // db
  const db = exports.sqlite();

  // show tables
  try {
    const rows = await showTables(db);
    return success("show table success", rows);
  } catch (e) {
    return success("show table success");
  }
};

/**
 * dbInsertData
 * @param {*} sql
 * @param {*} params
 * @returns
 */
exports.dbInsertData = async (sql, params) => {
  // check
  if (!sql) return danger("need insert data sql");

  // db
  const db = exports.sqlite();

  // insert data
  try {
    await insertData(db, sql, params);
    return success("insert data success");
  } catch (e) {
    return danger("insert data fail", e);
  }
};

/**
 * dbDeleteData
 * @param {*} sql
 * @param {*} params
 * @returns
 */
exports.dbDeleteData = async (sql, params) => {
  // check
  if (!sql) return danger("need delete data sql");

  // db
  const db = exports.sqlite();

  // delete data
  try {
    await deleteData(db, sql, params);
    return success("delete data success");
  } catch (e) {
    return danger("delete data fail", e);
  }
};

/**
 * dbModifyData
 * @param {*} sql
 * @param {*} params
 * @returns
 */
exports.dbModifyData = async (sql, params) => {
  // check
  if (!sql) return danger("need modify data sql");

  // db
  const db = exports.sqlite();

  // modify data
  try {
    await modifyData(db, sql, params);
    return success("modify data success");
  } catch (e) {
    return danger("modify data fail", e);
  }
};

/**
 * dbSelectData
 * @param {*} sql
 * @param {*} params
 * @returns
 */
exports.dbSelectData = async (sql, params) => {
  // check
  if (!sql) return danger("need select data sql");

  // db
  const db = exports.sqlite();

  // select data
  try {
    const rows = await selectData(db, sql, params);
    return success("select data success", rows);
  } catch (e) {
    return danger("select data fail", e);
  }
};
