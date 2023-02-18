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

  // ls
  app.get('/ls', function (req, res) {
    service.ls(req, res);
  });

  // indexeddb
  app.get('/indexeddb', function (req, res) {
    service.indexeddb(req, res);
  });
};
