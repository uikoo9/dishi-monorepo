/**
 * index controller
 */
module.exports = function (app) {
    // index
    app.get('/*', function (req, res) {
        res.render('./views/index.html');
    });
};