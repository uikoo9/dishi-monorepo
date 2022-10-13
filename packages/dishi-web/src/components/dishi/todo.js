// qiao
import { listDB, openDB, createTable, save, get, del, getAll } from 'qiao.db.js';

// const
const dbName = 'db_dishi';
const tableTodos = 't_todos';
const tableDones = 't_dones';

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
        name: tableTodos,
        key: 'create_time',
        index: [{
            name: 'todo_time',
            index: ['todo_time', 'todo_content'],
            unique: false
        }]
    }, {
        name: tableDones,
        key: 'done_time',
        index: [{
            name: 'done_time',
            index: ['done_time'],
            unique: false
        }]
    }];
    await createTable(db, tables);
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
    if (todos.length > 1) {
        const todotime = todos[1].trim();
        if (todotime.length == 8 && !isNaN(parseInt(todotime))) todo_time = todotime;
    }

    // save
    const create_time = Date.now();
    const data = {
        todo_content: todo_content,
        todo_time: todo_time || '_',
        create_time: create_time
    };
    const db = await openDB(dbName);
    const saveRes = await save(db, tableTodos, create_time, data);
    console.log('add todo:', saveRes);
};

/**
 * del todo
 * @param {*} key 
 */
export const delTodo = async (key) => {
    // todo
    const db = await openDB(dbName);
    const todo = await get(db, tableTodos, key);

    // done
    const done = {
        todo_content: todo.todo_content,
        todo_time: todo.todo_time,
        done_time: Date.now()
    };
    const saveRes = await save(db, tableDones, null, done);

    // del
    await del(db, tableTodos, key);
    console.log('del todo:', saveRes);
};

/**
 * get todos
 * @returns todos
 */
export const getTodos = async () => {
    const db = await openDB(dbName);
    const res = await getAll(db, tableTodos, 'todo_time');
    console.log('get todos:', res);

    return res;
};

/**
 * get dones
 * @returns todos
 */
 export const getDones = async () => {
    const db = await openDB(dbName);
    const res = await getAll(db, tableDones, 'done_time');
    console.log('get dones:', res);

    return res;
};