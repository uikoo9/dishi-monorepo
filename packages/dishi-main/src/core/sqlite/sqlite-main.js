// path
import path from 'path';

// electron
import { app } from 'electron';

// sqlite
import {
  createDB,
  createTable,
  dropTable,
  showTables,
  insertData,
  modifyData,
  deleteData,
  selectData,
} from 'qiao-sqlite';

// json
import { success, fail } from 'qiao-json';

/**
 * sqlite
 * @returns
 */
export const sqlite = () => {
  const userDataPath = app.getPath('userData');
  const dbPath = path.resolve(userDataPath, './electron.db');
  const db = createDB(dbPath);

  return db;
};

/**
 * dbCreateTable
 * @param {*} sql
 * @returns
 */
export const dbCreateTable = async (sql) => {
  // check
  if (!sql) return fail('need create table sql');

  // db
  const db = sqlite();

  // create table
  try {
    await createTable(db, sql);
    return success('create table success');
  } catch (e) {
    // return danger('create table fail', e);
    return success('create table success');
  }
};

/**
 * dbDropTable
 * @param {*} tableName
 * @returns
 */
export const dbDropTable = async (tableName) => {
  // check
  if (!tableName) return fail('need tableName');

  // db
  const db = sqlite();

  // drop table
  try {
    await dropTable(db, tableName);
    return success('drop table success');
  } catch (e) {
    return success('drop table success');
  }
};

/**
 * dbShowTables
 * @returns
 */
export const dbShowTables = async () => {
  // db
  const db = sqlite();

  // show tables
  try {
    const rows = await showTables(db);
    return success('show table success', rows);
  } catch (e) {
    return success('show table success');
  }
};

/**
 * dbInsertData
 * @param {*} sql
 * @param {*} params
 * @returns
 */
export const dbInsertData = async (sql, params) => {
  // check
  if (!sql) return fail('need insert data sql');

  // db
  const db = sqlite();

  // insert data
  try {
    await insertData(db, sql, params);
    return success('insert data success');
  } catch (e) {
    return fail('insert data fail', e);
  }
};

/**
 * dbDeleteData
 * @param {*} sql
 * @param {*} params
 * @returns
 */
export const dbDeleteData = async (sql, params) => {
  // check
  if (!sql) return fail('need delete data sql');

  // db
  const db = sqlite();

  // delete data
  try {
    await deleteData(db, sql, params);
    return success('delete data success');
  } catch (e) {
    return fail('delete data fail', e);
  }
};

/**
 * dbModifyData
 * @param {*} sql
 * @param {*} params
 * @returns
 */
export const dbModifyData = async (sql, params) => {
  // check
  if (!sql) return fail('need modify data sql');

  // db
  const db = sqlite();

  // modify data
  try {
    await modifyData(db, sql, params);
    return success('modify data success');
  } catch (e) {
    return fail('modify data fail', e);
  }
};

/**
 * dbSelectData
 * @param {*} sql
 * @param {*} params
 * @returns
 */
export const dbSelectData = async (sql, params) => {
  // check
  if (!sql) return fail('need select data sql');

  // db
  const db = sqlite();

  // select data
  try {
    const rows = await selectData(db, sql, params);
    return success('select data success', rows);
  } catch (e) {
    return fail('select data fail', e);
  }
};
