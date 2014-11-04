function permalink(){
  'use strict';
  /*global $*/
  var anchor = document.createElement('a');
  anchor.className = 'anchor';
  anchor.innerHTML = '<span class="permalink"></span>';

  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(function (el) {
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