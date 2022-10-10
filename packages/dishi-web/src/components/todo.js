// qiao
import { ls, cache } from 'qiao.ls.js';

/**
 * add todo
 * @param {*} todo 
 */
export const addTodo = (key, todo) => {
    cache('todos', key, todo);
};

/**
 * del todo
 * @param {*} key 
 */
export const delTodo = (key) => {
    cache('todos', key, null);
};

/**
 * get todos
 * @returns 
 */
export const getTodos = () => {
    // check
    const todos = ls('todos');
    if(!todos) return [];

    // res
    const res = [];
    for (const [key, value] of Object.entries(todos)) {
        res.push({
            key: key,
            value: value
        });
    }

    return res;
};