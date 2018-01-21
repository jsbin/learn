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
    var c = el.className;
    if (c !== 'same' && m.toLowerCase().indexOf('ctrl') !== -1) {
      el.innerHTML = m.replace(/(c)trl/ig, '$1md');
    }
    // if (mackeys[m]) {
    //   el.replaceChild(document.createTextNode(mackeys[m]), el.firstChild);
    //   el.className = 'symbol';
    // }
  });
}

if (document.querySelector && Function.prototype.bind) {
  keyboard();
}