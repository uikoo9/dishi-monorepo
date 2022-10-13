// qiao
import { listDB, openDB, createTable, save, getAll } from 'qiao.db.js';

// const
const dbName = 'db_todo';
const tableName = 't_todo';

/**
 * init database
 * @returns 
 */
export const initDatabase = async () => {
    // check
    const dbs = await listDB();
    if (dbs && dbs.length && dbs[0].name == dbName) return;

    // db
    const db = await openDB(dbName);
    if (!db) return;

    // table
    const tables = [{
        name: tableName,
        key: 'create_time',
        index: [{
            name: 'todo_time',
            index: ['todo_time', 'todo_content'],
            unique: false
        }]
    }];
    return await createTable(db, tables);
};

/**
 * add todo
 * @param {*} todo 
 */
export const addTodo = async (todo) => {
    if (!todo) return;

    // todo
    const todos = todo.split('@');
    const todo_content = todos[0].trim();
    let todo_time;
    if (todos.length > 1){
        const todotime = todos[1].trim();
        if(todotime.length == 8 && !isNaN(parseInt(todotime))) todo_time = todotime;
    } 

    // save
    const create_time = Date.now();
    const data = {
        todo_content: todo_content,
        todo_time: todo_time || '_',
        create_time: create_time
    };
    const db = await openDB(dbName);
    const saveRes = await save(db, tableName, create_time, data);
    console.log('add todo:', saveRes);
};

/**
 * get todos
 * @returns todos
 */
export const getTodos = async () => {
    const db = await openDB(dbName);
    const res = await getAll(db, tableName, 'todo_time');
    console.log('get todos:', res);

    return res;
};