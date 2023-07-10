// path
import path from 'path';

// electron
import { app } from 'electron';

// sqlite
import DB from 'qiao-sqlite';

// db
let db;

// set db
function setDB(_db) {
  db = _db;
}

// get db
export const getDB = async () => {
  // db
  if (db) return db;

  // create
  const userDataPath = app.getPath('userData');
  const dbPath = path.resolve(userDataPath, './electron.db');
  const _db = await DB(dbPath);
  setDB(_db);
  return _db;
};
