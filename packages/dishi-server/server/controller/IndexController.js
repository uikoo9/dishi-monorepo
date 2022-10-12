// service
const service = require('../service/IndexService.js');

/**
 * index controller
 */
module.exports = function (app) {
    // index
    app.get('/', function (req, res) {
        service.index(req, res);
    });

    // localstorage
    app.get('/localstorage', function (req, res) {
        service.localstorage(req, res);
    });
};