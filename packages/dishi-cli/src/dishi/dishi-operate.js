// qiao
const qiao = require('../util/qiao.js');
global.insistime_userinfo = qiao.config.config('userinfo');

// service
const dishiService = require('dishi-service');

/**
 * done
 */
exports.done = async function (id) {
  // get item
  const item = await dishiService.todoItemGet(id);
  if (!item) return;

  // update item
  const json = await dishiService.todoItemSave({
    id: id,
    todo_group_id: item.todo_group_id,
    todo_item_name: item.todo_item_name,
    todo_item_order: item.todo_item_order,
    todo_item_status: '1',
  });
  if (!json) return;

  // suc
  qiao.log.suc(`${json.time + item.time}ms | done success`);
};

/**
 * move
 */
exports.move = async function (id, groupId) {
  // get group
  const group = await dishiService.todoGroupGet(groupId);
  if (!group) return;

  // get item
  const item = await dishiService.todoItemGet(id);
  if (!item) return;

  // update item
  const json = await dishiService.todoItemSave({
    id: id,
    todo_group_id: group.id,
    todo_item_name: item.todo_item_name,
    todo_item_order: item.todo_item_order,
    todo_item_status: item.todo_group_status,
  });
  if (!json) return;

  // suc
  qiao.log.suc(`${json.time + item.time}ms | move success`);
};
