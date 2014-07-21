(function () {
  'use strict';
  if (!timestamp) return;
  try {
    var last = localStorage.lastpost;
    if (last) {
      if (last < timestamp) {
        localStorage.lastpost = timestamp;
      }
    } else {
      localStorage.lastpost = timestamp;
    }
  } catch (e) {
    console.warn(e);
  }
})();