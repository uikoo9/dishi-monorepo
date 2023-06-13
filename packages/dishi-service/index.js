'use strict';

var qiaoAjax = require('qiao-ajax');
var qiaoJson = require('qiao-json');

var host = "https://api.insistime.com/";
var todoList$1 = "todo/list";
var todoGroupList$1 = "todo/group/list";
var todoGroupSave$1 = "todo/group/save";
var todoGroupDel$1 = "todo/group/del";
var todoGroupGet$1 = "todo/group/get";
var todoItemList$1 = "todo/item/list";
var todoItemSave$1 = "todo/item/save";
var todoItemDel$1 = "todo/item/del";
var todoItemGet$1 = "todo/item/get";
var config = {
	host: host,
	todoList: todoList$1,
	todoGroupList: todoGroupList$1,
	todoGroupSave: todoGroupSave$1,
	todoGroupDel: todoGroupDel$1,
	todoGroupGet: todoGroupGet$1,
	todoItemList: todoItemList$1,
	todoItemSave: todoItemSave$1,
	todoItemDel: todoItemDel$1,
	todoItemGet: todoItemGet$1
};

// qiao

/**
 * postWithToken
 *  url
 *  data
 */
const postWithToken = async (url, data) => {
  const root = global || window;
  if (!root) return qiaoJson.danger('no window or global');

  const userinfo = root.insistime_userinfo;
  if (!userinfo || !userinfo.userid || !userinfo.usertoken) return qiaoJson.danger('please login first');

  const headers = {
    userid: userinfo.userid,
    usertoken: userinfo.usertoken,
  };
  return await ajax(url, data, headers);
};

// ajax
async function ajax(url, data, headers) {
  const options = { data: data };
  if (headers) options.headers = headers;

  const s = Date.now();
  let res;
  try {
    res = await qiaoAjax.post(url, options);
  } catch (e) {
    console.log(e);
  }
  const time = Date.now() - s;

  // res error
  if (!res) return qiaoJson.danger(`${time}ms | request fail`);

  // not 200
  if (res.status != 200) return qiaoJson.danger(`${time}ms | request fail: ${res.status}`);

  // no data
  const json = res.data;
  if (!json) return qiaoJson.danger(`${time}ms | request fail: no data`);

  // danger
  if (json.type == 'danger') return qiaoJson.danger(`${time}ms | ${json.msg}`);

  json.time = time;
  return json;
}

// config

/**
 * todoGroupList
 * @param {*} data
 * @param {*} pagenumber
 * @param {*} pagesize
 * @returns
 */
const todoGroupList = async (data, pagenumber, pagesize) => {
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
const todoGroupSave = async (data) => {
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
const todoGroupDel = async (ids) => {
  const url = config.host + config.todoGroupDel;
  const data = { ids: ids };

  return await postWithToken(url, data);
};

/**
 * todoGroupGet
 * @param {*} id
 * @returns
 */
const todoGroupGet = async (id) => {
  if (!id) return qiaoJson.danger('need group id');

  const url = config.host + config.todoGroupGet;
  const data = { id: id };

  const json = await postWithToken(url, data);
  if (!json || !json.obj || !json.obj.rows || !json.obj.rows.length) {
    return qiaoJson.danger(`can not find todo group by ${id}`);
  }

  const item = json.obj.rows[0];
  item.time = json.time;
  return item;
};

// config

/**
 * todoItemList
 * @param {*} data
 * @param {*} pagenumber
 * @param {*} pagesize
 * @returns
 */
const todoItemList = async (data, pagenumber, pagesize) => {
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
const todoItemSave = async (data) => {
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
const todoItemDel = async (ids) => {
  const url = config.host + config.todoItemDel;
  const data = { ids: ids };

  return await postWithToken(url, data);
};

/**
 * todoItemGet
 * @param {*} id
 * @returns
 */
const todoItemGet = async (id) => {
  if (!id) return qiaoJson.danger('need group id');

  const url = config.host + config.todoItemGet;
  const data = { id: id };

  const json = await postWithToken(url, data);
  if (!json || !json.obj || !json.obj.rows || !json.obj.rows.length) {
    return qiaoJson.danger(`can not find todo item by ${id}`);
  }

  const item = json.obj.rows[0];
  item.time = json.time;
  return item;
};

// config

/**
 * todoList
 */
const todoList = async (gid) => {
  const url = config.host + config.todoList;
  const data = {
    todoGroupId: gid,
    rows: '10',
  };

  return await postWithToken(url, data);
};

exports.todoGroupDel = todoGroupDel;
exports.todoGroupGet = todoGroupGet;
exports.todoGroupList = todoGroupList;
exports.todoGroupSave = todoGroupSave;
exports.todoItemDel = todoItemDel;
exports.todoItemGet = todoItemGet;
exports.todoItemList = todoItemList;
exports.todoItemSave = todoItemSave;
exports.todoList = todoList;
