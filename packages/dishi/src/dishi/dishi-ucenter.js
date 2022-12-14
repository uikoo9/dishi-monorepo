"use strict";

// qiao
var qiao = require("../util/qiao.js");

// service
var ucenterService = require("qiao-service");

/**
 * login
 */
exports.login = async function (mobile, password) {
  var json = await ucenterService.login(mobile, password);
  if (json.type != "success") {
    qiao.log.log(json);
    return;
  }

  var userinfo = json.obj;
  userinfo.mobile = mobile;
  qiao.config.config("userinfo", userinfo);
  qiao.log.suc(`${json.time}ms | login success`);
};

/**
 * sendCode
 */
exports.sendCode = async function (mobile) {
  var json = await ucenterService.sendCode(mobile);
  if (json.type != "success") {
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
  var json = await ucenterService.register(mobile, password, repassword, code);
  if (json.type != "success") {
    qiao.log.log(json);
    return;
  }

  qiao.log.suc(`${json.time}ms | register success`);
};
