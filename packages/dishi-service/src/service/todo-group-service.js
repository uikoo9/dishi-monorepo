// config
import config from '../util/_server.json';

// fetch
import { postWithToken } from '../util/_fetch.js';

// qjson
import { danger } from 'qiao-json';

/**
 * todoGroupList
 * @param {*} data
 * @param {*} pagenumber
 * @param {*} pagesize
 * @returns
 */
export const todoGroupList = async (data, pagenumber, pagesize) => {
  const url = config.host + config.todoGroupList;
  const opt = {
    ucenterUserId: data.ucenterUserId,
    todoGroupName: data.todoGroupName,
    todoGroupOrder: data.todoGroupOrder,

    page: pagenumber || '1',
    rows: pagesize || '10',
  };

  return await postWithToken(url, opt);
};

/**
 * todoGroupSave
 * @param {*} data
 * @returns
 */
export const todoGroupSave = async (data) => {
  const url = config.host + config.todoGroupSave;
  const opt = {
    ucenterUserId: data.ucenterUserId,
    todoGroupName: data.todoGroupName,
    todoGroupOrder: data.todoGroupOrder,
  };
  if (data.id) opt.id = data.id;

  return await postWithToken(url, opt);
};

/**
 * todoGroupDel
 * @param {*} ids
 * @returns
 */
export const todoGroupDel = async (ids) => {
  const url = config.host + config.todoGroupDel;
  const data = { ids: ids };

  return await postWithToken(url, data);
};

/**
 * todoGroupGet
 * @param {*} id
 * @returns
 */
export const todoGroupGet = async (id) => {
  if (!id) return danger('need group id');

  const url = config.host + config.todoGroupGet;
  const data = { id: id };

  const json = await postWithToken(url, data);
  if (!json || !json.obj || !json.obj.rows || !json.obj.rows.length) {
    return danger(`can not find todo group by ${id}`);
  }

  const item = json.obj.rows[0];
  item.time = json.time;
  return item;
};
