// b
const b = require('../util/b.js');

// qiao
const qiao = require('../util/qiao.js');
global.insistime_userinfo = qiao.config.config('userinfo');

// service
const dishiService = require('dishi-service');

/**
 * list
 */
exports.list = async function (group) {
  if (group) {
    const json = await dishiService.todoGroupList();
    if (!json) return;

    qiao.log.suc(`${json.time}ms | list group success`);
    listGroups(json.obj.rows);
  } else {
    const groupId = b.getGroupId();
    if (!groupId) return;

    const json = await dishiService.todoList(groupId);
    if (!json) return;

    qiao.log.suc(`${json.time}ms | list todo success`);
    listTodos(json.obj);
  }
};

/**
 * add
 */
exports.add = async function (name, group) {
  if (group) {
    const json = await dishiService.todoGroupSave({
      todo_group_name: name,
    });
    if (!json) return;

    qiao.log.suc(`${json.time}ms | add group success`);
  } else {
    const groupId = b.getGroupId();
    if (!groupId) return;

    const json = await dishiService.todoItemSave({
      todo_group_id: groupId,
      todo_item_name: name,
    });
    if (!json) return;

    qiao.log.suc(`${json.time}ms | add todo success`);
  }
};

/**
 * update
 */
exports.update = async function (id, name, group) {
  if (group) {
    const json = await dishiService.todoGroupSave({
      id: id,
      todo_group_name: name,
      todo_group_order: '1',
    });
    if (!json) return;

    qiao.log.suc(`${json.time}ms | update group success`);
  } else {
    const groupId = b.getGroupId();
    if (!groupId) return;

    const json = await dishiService.todoItemSave({
      id: id,
      todo_group_id: groupId,
      todo_item_name: name,
    });
    if (!json) return;

    qiao.log.suc(`${json.time}ms | update todo success`);
  }
};

/**
 * del
 */
exports.del = async function (ids, group) {
  if (group) {
    const idss = ids.split(',');
    if (idss.includes('1')) {
      qiao.log.danger('can note delete default group');
      return;
    }

    const json = await dishiService.todoGroupDel(ids);
    if (!json) return;

    qiao.log.suc(`${json.time}ms | delete group success`);
  } else {
    const json = await dishiService.todoItemDel(ids);
    if (!json) return;

    qiao.log.suc(`${json.time}ms | delete todo success`);
  }
};

// list groups
function listGroups(rows) {
  qiao.log.normal();
  qiao.log.info('id	group-name');

  for (let i = 0; i < rows.length; i++) {
    const item = rows[i];
    qiao.log.normal(`${item.id}	${item.todo_group_name}`);
  }
}

// list todos
function listTodos(obj) {
  const group = b.getGroup();
  if (!group) return;

  qiao.log.normal();
  qiao.log.info('========================');
  qiao.log.info(`todo group '${group.todo_group_name}[${group.id}]'`);
  qiao.log.info('========================');
  qiao.log.normal();

  const todoRows = obj.todoRows;
  qiao.log.danger('todo items');
  qiao.log.danger('------------------------');
  for (let i = 0; i < todoRows.length; i++) {
    let item = todoRows[i];
    qiao.log.normal(`${item.id}	${item.todo_item_name}`);
  }
  qiao.log.normal();

  const doneRows = obj.doneRows;
  qiao.log.suc('done items');
  qiao.log.suc('------------------------');
  for (let i = 0; i < doneRows.length; i++) {
    let item = doneRows[i];
    qiao.log.normal(`${item.id}	${item.todo_item_name}`);
  }
}
