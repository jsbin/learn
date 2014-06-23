'use strict';
var harp = require('harp');
var server = require('harp-static');
var outputPath = __dirname + '/www';
var port = process.env.PORT || 9000;

server.middleware.push(function (req, res, next) {
  if (req.headers.host.indexOf('learn.jsbin.com') === 0) {
    res.writeHead(301, { location: 'http://jsbin.com' + req.url });
    res.end();
    return;
  }
  next();
});

harp.compile(__dirname, outputPath, function(errors){
  if(errors) {
    console.log(JSON.stringify(errors, null, 2));
    process.exit(1);
  }

  console.log('Running harp-static on ' + port);
  server(outputPath, port);
});