'use strict';

// port
const port = require('./server/config.json').port;

// app
const app = require('qiao-z')();

// listen
app.listen(port);
