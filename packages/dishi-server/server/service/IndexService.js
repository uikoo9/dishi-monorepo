// qiao
var qiao = require('../_qiao.js');

/**
 * index
 * @param {*} req 
 * @param {*} res 
 */
exports.index = async function (req, res) {
    // desc
    var data = {
        desc: '滴石，todo list，取水滴石穿之意'
    };

    // render
    var vendor = qiao.vendor(req.headers['user-agent']);
    if (vendor.mobile || vendor.android) {
        res.render('./views/dishi-index-mobile.html', data);
    } else {
        res.render('./views/dishi-index-pc.html', data);
    }
};