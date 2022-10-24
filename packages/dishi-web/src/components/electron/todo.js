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
    // todo table
    const createTodoTable = 'CREATE TABLE if not exists t_todos (todo_content TEXT, todo_time TEXT)';
    const createTodoTableRs = await window.electron.createTableIPC(createTodoTable);
    console.log('createTodoTableRs', createTodoTableRs);

    // done table
    const createDoneTable = 'CREATE TABLE if not exists t_dones (todo_content TEXT, todo_time TEXT, done_time TEXT)';
    const createDoneTableRs = await window.electron.createTableIPC(createDoneTable);
    console.log('createDoneTableRs', createDoneTableRs);
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
    const sql = 'insert into t_todos values (?, ?)';
    const res = await window.electron.insertDataIPC(sql, [todo_content, todo_time || '_']);
    console.log('add todo:', res);
};

/**
 * del todo
 * @param {*} key 
 */
export const delTodo = async (key) => {
    // query
    const selectSql = 'SELECT rowid,* FROM t_todos wherd rowid=?';
    const selectRes = await window.electron.selectDataIPC(selectSql, [key]);
    if(!selectRes || selectRes.type != 'success' || !selectRes.obj || !selectRes.obj.length) return;

    // todo
    const todo = selectRes.obj[0];

    // done
    const insertSql = 'insert into t_dones values (?, ?, ?)';
    const insertRes = await window.electron.insertDataIPC(insertSql, [todo.todo_content, todo.todo_time, Date.now()]);
    console.log('add done:', insertRes);

    // del
    await del(db, tableTodos, key);
    console.log('del todo:', res);
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