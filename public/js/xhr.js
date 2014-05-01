function request(type, url, opts, callback) {
  'use strict';
  var xhr = new XMLHttpRequest(),
      fd;

  if (typeof opts === 'function') {
    callback = opts;
    opts = null;
  }

  xhr.open(type, url);

  if (type === 'POST' && opts) {
    fd = new FormData();

    for (var key in opts) {
      fd.append(key, JSON.stringify(opts[key]));
    }
  }

  xhr.onload = function () {
    callback(JSON.parse(xhr.response));
  };

  xhr.send(opts ? fd : null);
}

var get = request.bind(this, 'GET');
var post = request.bind(this, 'POST');
