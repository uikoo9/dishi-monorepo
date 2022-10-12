// qiao
var qiao = require('../_qiao.js');

// desc
var data = {
    desc: '滴石，todo list，取水滴石穿之意'
};

/**
 * index
 * @param {*} req 
 * @param {*} res 
 */
exports.index = async function (req, res) {
    // render
    var vendor = qiao.vendor(req.headers['user-agent']);
    if (vendor.mobile || vendor.android) {
        res.render('./views/dishi-index-mobile.html', data);
    } else {
        res.render('./views/dishi-index-pc.html', data);
    }
};

/**
 * localstorage
 * @param {*} req 
 * @param {*} res 
 */
exports.localstorage = async function (req, res) {
    // render
    var vendor = qiao.vendor(req.headers['user-agent']);
    if (vendor.mobile || vendor.android) {
        res.render('./views/dishi-localstorage-mobile.html', data);
    } else {
        res.render('./views/dishi-localstorage-pc.html', data);
    }
};