// qiao
var qiao = require('../_qiao.js');

// config
var config = require('../config.json');

/**
 * index
 * @param {*} req 
 * @param {*} res 
 */
exports.index = async function (req, res) {
    // render
    var vendor = qiao.vendor(req.headers['user-agent']);
    if (vendor.mobile || vendor.android) {
        res.render('./views/dishi-index-mobile.html');
    } else {
        res.render('./views/dishi-index-pc.html');
    }
};