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
  // dones
  const done = cache('todos', key);
  cache('dones', key, done);

  // todos
  cache('todos', key, null);
};

/**
 * get todos
 * @returns
 */
export const getTodos = () => {
  // check
  const todos = ls('todos');
  if (!todos) return [];

  // res
  const res = [];
  for (const [key, value] of Object.entries(todos)) {
    res.push({
      key: key,
      value: value,
    });
  }

  return res;
};

/**
 * get dones
 * @returns
 */
export const getDones = () => {
  // check
  const dones = ls('dones');
  if (!dones) return [];

  // res
  const res = [];
  for (const [key, value] of Object.entries(dones)) {
    res.push({
      key: key,
      value: value,
    });
  }

  return res;
};
