function permalink(){
  'use strict';
  var $ = document.querySelectorAll.bind(document);

  var anchor = document.createElement('a');
  anchor.className = 'anchor';
  anchor.innerHTML = '<span class="permalink"></span>';

  [].forEach.call($('h1,h2,h3,h4,h5,h6'), function (el) {
    if (el.id) {
      var clone = anchor.cloneNode(true);
      clone.href = '#' + el.id;
      el.insertBefore(clone, el.firstChild);
    }
  });
}

if (document.querySelector && Function.prototype.bind) {
  permalink();
}