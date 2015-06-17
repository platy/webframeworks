var express = require('express');
var app = express();

require('./examples/express-basic-routing.js')(app)
require('./examples/express-static.js')(express, app)

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Test app listening at http://%s:%s', host, port);

});
