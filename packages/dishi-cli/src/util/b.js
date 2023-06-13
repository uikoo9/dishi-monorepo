// qiao
const qiao = require('./qiao.js');

/**
 * get group id
 */
exports.getGroupId = function () {
  const group = exports.getGroup();
  if (!group) return;

  return group.id;
};

/**
 * get group
 */
exports.getGroup = function () {
  const group = qiao.config.config('group');
  if (!group) {
    qiao.log.danger('please select a todo group');
    return;
  }

  return group;
};
