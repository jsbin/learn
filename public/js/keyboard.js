function keyboard() {
  'use strict';

  var mac = navigator.userAgent.indexOf(' Mac ') !== -1;
  var mackeys = {
    'ctrl': '⌘',
    'shift': '⇧',
    'del': '⌫'
  };

  if (!mac) {
    return;
  }

  var $ = document.querySelectorAll.bind(document);

  [].forEach.call($('kbd'), function (el) {
    var m = el.innerHTML;
    if (mackeys[m]) {
      el.replaceChild(document.createTextNode(mackeys[m]), el.firstChild);
    }
  });
}

if (document.querySelector && Function.prototype.bind) {
  keyboard();
}