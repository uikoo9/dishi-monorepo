// qiao
import { listDB, openDB, createTable } from 'qiao.db.js';

// const
const dbName = 'db_todo';
const tables = [{
    name: 't_todo',
    key: 'id',
    index: [{
        name: 'todo_content',
        index: 'todo_content'
    }, {
        name: 'todo_time',
        index: ['id', 'todo_time'],
        unique: false
    }]
}];

export const initDatabase = async () => {
    // check
    const dbs = await listDB();
    // if(dbs && dbs.length && dbs[0].name == dbName) return;

    // db
    const db = await openDB(dbName);
    if(!db) return;

    // table
    const table = await createTable(db, tables);
    console.log(table);
};