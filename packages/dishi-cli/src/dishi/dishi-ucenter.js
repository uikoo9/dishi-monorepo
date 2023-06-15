// qiao
const qiao = require('../util/qiao.js');

// service
const ucenterService = require('qiao-service');

/**
 * login
 */
exports.login = async function (mobile, password) {
  const json = await ucenterService.login(mobile, password);
  if (json.type !== 'success') {
    qiao.log.log(json);
    return;
  }

  const userinfo = json.obj;
  userinfo.mobile = mobile;
  await qiao.config.config('userinfo', userinfo);
  qiao.log.suc(`${json.time}ms | login success`);
};

/**
 * sendCode
 */
exports.sendCode = async function (mobile) {
  const json = await ucenterService.sendCode(mobile);
  if (json.type !== 'success') {
    qiao.log.log(json);
    return;
  }

  qiao.log.suc(`${json.time}ms | send code success`);
  return true;
};

/**
 * register
 */
exports.register = async function (mobile, password, repassword, code) {
  const json = await ucenterService.register(mobile, password, repassword, code);
  if (json.type !== 'success') {
    qiao.log.log(json);
    return;
  }

  qiao.log.suc(`${json.time}ms | register success`);
};
