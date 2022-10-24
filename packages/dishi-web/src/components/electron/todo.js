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
    const createDoneTable = 'CREATE TABLE if not exists t_dones (todo_content TEXT, done_time TEXT)';
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
    const res = await window.electron.insertDataIPC(db, sql, [todo_content, todo_time || '_']);
    console.log('add todo:', res);
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
    const done_time = Date.now();
    const done = {
        todo_content: todo.todo_content,
        todo_time: todo.todo_time,
        done_time: done_time
    };
    const saveRes = await save(db, tableDones, done_time, done);

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