function request(type, url, opts, callback) {
  'use strict';
  var xhr = new XMLHttpRequest(),
      fd;

  if (typeof opts === 'function') {
    callback = opts;
    opts = null;
  }

  xhr.open(type, url);

  if (opts) {
    fd = new FormData();

    for (var key in opts) {
      fd.append(key, JSON.stringify(opts[key]));
    }
  }

  xhr.onload = function () {
    callback(null, JSON.parse(xhr.response));
  };

  xhr.onerror = function () {
    callback(new Error('XHR failed'));
  }

  xhr.send(opts ? fd : null);
}

var get = request.bind(this, 'GET');
var post = request.bind(this, 'POST');
