'use strict';
var harp = require('harp');
var server = require('harp-static');
var outputPath = __dirname + '/www';
var port = process.env.PORT || 9000;

server.middleware.push(function (req, res, next) {
  var headers = req.headers['Access-Control-Request-Headers'];
  var origin = req.headers.origin;

  // TODO should this check if the request is via the API?
  if (req.method === 'OPTIONS' || (req.method === 'GET' && origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    // res.setHeader('Access-Control-Allow-Headers', headers);
  }

  if (req.method === 'OPTIONS') {
    res.send(204);
  } else {
    next();
  }
});

harp.compile(__dirname, outputPath, function(errors){
  if(errors) {
    console.log(JSON.stringify(errors, null, 2));
    process.exit(1);
  }

  console.log('Running harp-static on ' + port);
  server(outputPath, port);
});
