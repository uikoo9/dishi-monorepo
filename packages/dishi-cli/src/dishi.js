// dishi
const _ucenter = require('./dishi/dishi-ucenter.js');
const _config = require('./dishi/dishi-config.js');
const _crud = require('./dishi/dishi-crud.js');
const _operate = require('./dishi/dishi-operate.js');
const _show = require('./dishi/dishi-show.js');

// ucenter
exports.login = _ucenter.login;
exports.sendCode = _ucenter.sendCode;
exports.register = _ucenter.register;

// config
exports.use = _config.use;
exports.rows = _config.rows;

// crud
exports.list = _crud.list;
exports.add = _crud.add;
exports.update = _crud.update;
exports.del = _crud.del;

// operate
exports.done = _operate.done;
exports.move = _operate.move;

// show
exports.show = _show.show;
