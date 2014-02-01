'use strict';

var root = __dirname + '/www';

var http = require('http');
var st = require('st');
var glob = require('glob');

var fourohfour = require('fs').readFileSync(root + '/404.html');

var mount = st({
  path: root,
  url: '/',
  index: 'index.html',
  passthrough: true
});

var htmlFiles = [];

glob('**/*.html', {
  cwd: root,
  dot: false
}, function (er, files) {
  htmlFiles = files.map(function (file) {
    return '/' + file;
  });
});


http.createServer(function(req, res) {
  if (htmlFiles.indexOf(req.url + '.html') !== -1) {
    // slap on .html
    req.url += '.html';
  }

  mount(req, res, function () {
    res.writeHead(404);
    res.end(fourohfour);
  });
}).listen(process.env.PORT || 9000);
