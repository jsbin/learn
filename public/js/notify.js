function notify(form) {
  'use strict';
  /*global $, post*/
  if (!form) {
    return;
  }

  var label = form.querySelector('label');
  var inputs = $('form.notify input');
  inputs.forEach(function (el) {
    el.hidden = true;
  });

  var once = false;
  label.on('click', function () {
    if (once) {
      return;
    }
    once = true;
    inputs.forEach(function (el) {
      el.hidden = false;
    });
    this.hidden = true;
    inputs[0].focus();
  });

  form.on('submit', function (event) {
    event.preventDefault();
    var data = [].map.call(inputs, function (el) {
      var result = {};
      result[encodeURIComponent(el.name)] = encodeURIComponent(el.value);
      return result;
    });

    post(form.action, data, function (error, result) {
      if (error) {
        alert('The request failed, can you try again now or perhaps try again later and let us know it didn\'t work out.');
        return console.error(error);
      }

      inputs.forEach(function (el) {
        el.hidden = true;
      });
      label.innerHTML = '✔ We\'ll tell you when this is ready';
      label.className = '';
      label.hidden = false;
    });
  });
}

if (document.querySelectorAll) {
  notify($('form.notify'));
}