// config
import config from '../util/_server.json';

// fetch
import { postWithToken } from '../util/_fetch.js';

// qjson
import { danger } from 'qiao-json';

/**
 * todoItemList
 * @param {*} data
 * @param {*} pagenumber
 * @param {*} pagesize
 * @returns
 */
export const todoItemList = async (data, pagenumber, pagesize) => {
  const url = config.host + config.todoItemList;
  const opt = {
    ucenterUserId: data.ucenterUserId,
    todoGroupId: data.todoGroupId,
    todoItemName: data.todoItemName,
    todoItemOrder: data.todoItemOrder,
    todoItemStatus: data.todoItemStatus,

    page: pagenumber || '1',
    rows: pagesize || '10',
  };

  return await postWithToken(url, opt);
};

/**
 * todoItemSave
 * @param {*} data
 * @returns
 */
export const todoItemSave = async (data) => {
  const url = config.host + config.todoItemSave;
  const opt = {
    ucenterUserId: data.ucenterUserId,
    todoGroupId: data.todoGroupId,
    todoItemName: data.todoItemName,
    todoItemOrder: data.todoItemOrder,
    todoItemStatus: data.todoItemStatus,
  };
  if (data.id) opt.id = data.id;

  return await postWithToken(url, opt);
};

/**
 * todoItemDel
 * @param {*} ids
 * @returns
 */
export const todoItemDel = async (ids) => {
  const url = config.host + config.todoItemDel;
  const data = { ids: ids };

  return await postWithToken(url, data);
};

/**
 * todoItemGet
 * @param {*} id
 * @returns
 */
export const todoItemGet = async (id) => {
  if (!id) return danger('need group id');

  const url = config.host + config.todoItemGet;
  const data = { id: id };

  const json = await postWithToken(url, data);
  if (!json || !json.obj || !json.obj.rows || !json.obj.rows.length) {
    return danger(`can not find todo item by ${id}`);
  }

  const item = json.obj.rows[0];
  item.time = json.time;
  return item;
};
