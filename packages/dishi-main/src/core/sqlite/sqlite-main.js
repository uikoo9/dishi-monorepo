// db
import { getDB } from './_db.js';

// json
import { success, fail } from 'qiao-json';

/**
 * dbCreateTable
 * @param {*} sql
 * @returns
 */
export const dbCreateTable = async (sql) => {
  // check
  if (!sql) return fail('need create table sql');

  // db
  const db = await getDB();
  console.log(db);

  // create table
  try {
    const res = await db.createTable(sql);
    console.log(res);
    if (res) {
      return success('create table success');
    } else {
      return fail('create table fail');
    }
  } catch (e) {
    return fail('create table fail', e);
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
  const db = await getDB();

  // drop table
  try {
    const res = await db.dropTable(tableName);
    if (res) {
      return success('drop table success');
    } else {
      return fail('drop table fail');
    }
  } catch (e) {
    return fail('drop table fail', e);
  }
};

/**
 * dbShowTables
 * @returns
 */
export const dbShowTables = async () => {
  // db
  const db = await getDB();

  // show tables
  try {
    const rows = await db.showTables();
    return success('show table success', rows);
  } catch (e) {
    return fail('show table fail', e);
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
  const db = await getDB();

  // insert data
  try {
    const res = await db.insertData(sql, params);
    if (res) {
      return success('insert data success');
    } else {
      return fail('insert data fail');
    }
  } catch (e) {
    return fail('drop table fail', e);
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
  const db = await getDB();

  // delete data
  try {
    const res = await db.deleteData(sql, params);
    if (res) {
      return success('delete data success');
    } else {
      return fail('delete data fail');
    }
  } catch (e) {
    return fail('delete table fail', e);
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
  const db = await getDB();

  // modify data
  try {
    const res = await db.modifyData(sql, params);
    if (res) {
      return success('modify data success');
    } else {
      return fail('modify data fail');
    }
  } catch (e) {
    return fail('modify table fail', e);
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
  const db = await getDB();

  // select data
  try {
    const rows = await db.selectData(sql, params);
    return success('select data success', rows);
  } catch (e) {
    return fail('select table fail', e);
  }
};
