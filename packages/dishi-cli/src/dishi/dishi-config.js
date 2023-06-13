// qiao
const qiao = require('../util/qiao.js');
global.insistime_userinfo = qiao.config.config('userinfo');

// service
const dishiService = require('dishi-service');

/**
 * use
 */
exports.use = async function (id) {
  const item = await dishiService.todoGroupGet(id);
  if (!item) return;

  qiao.config.config('group', item);
  qiao.log.suc(`${item.time}ms | todo group use success`);
};

/**
 * rows
 */
exports.rows = async function (rows) {
  qiao.config.config('rows', rows);
  qiao.log.suc(`set rows to ${rows}`);
};
