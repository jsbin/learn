(function () {
  'use strict';
  var resultsEl = document.querySelector('#results');
  var searchTerms = [];
  var search = document.querySelector('#search');
  var position = -1;

  search.addEventListener('input', throttle(function () {
    if (searchTerms.length === 0) {
      get('/help/search.json', function (data) {
        searchTerms = data;
        searchFor(this.value, searchTerms);
      }.bind(this));
    } else {
      searchFor(this.value, searchTerms);
    }
    position = -1;
  }, 200), false);

  document.documentElement.addEventListener('click', function (event) {
    if (event.target.id === 'search' || event.target.id === 'results') {

    } else {
      resultsEl.hidden = true;
    }
  });

  document.documentElement.addEventListener('keydown', function (event) {
    if (event.which === 191) {
      event.preventDefault();
      search.focus();
    } else if (event.which === 27) {
      search.blur();
    }
  }, false);

  if (search.classList) {
    resultsEl.addEventListener('mousemove', function () {
      if (position !== -1) {
        for (var i = 0; i < resultsEl.children.length; i++) {
          resultsEl.children[i].classList.remove('highlight');
        }
        position = -1;
      }
    });

    search.addEventListener('keydown', function (event) {
      var key = event.which;
      if (key === 38 || key === 40) { // up / down
        event.preventDefault();
        var inc = 1;
        if (key === 38) {
          inc = -1;
        }

        position += inc;

        var length = resultsEl.children.length;

        for (var i = 0; i < length; i++) {
          resultsEl.children[i].classList.remove('highlight');
        }

        if (position < 0) {
          position = length - 1;
        } else if (position > length - 1) {
          position = 0;
        }

        resultsEl.children[position].classList.add('highlight');
      } else if (key === 13) { // select
        var url = resultsEl.querySelector('.highlight a');
        if (url) {
          window.location = url.href;
        }
      }
    }, false);
  }

  search.addEventListener('focus', function () {
    resultsEl.hidden = false;
  });

  function wordmap(input) {
    var ignore = "a an and on in it of if for the i is i'm i'd it's or to me be not was do so at are what bin bins".split(' ');

    var endings = 'ing ly lies s';
    var endingRe = new RegExp('(' + endings.split(' ').join('|') + ')$');

    return (input||'')
      //- strip html
      .replace(/(<([^>]+)>)/ig,'')
      //- strip non-letters
      .replace(/\W/g, ' ').replace(/["'\.,]/g, '')
      //- turn in to array of lower case words
      .toLowerCase().split(' ')
      //- filter out ignored words
      .filter(function (word) {
        return ignore.indexOf(word.trim()) === -1;
      }).filter(function (e, i, words) {
        //- return unique
        return words.lastIndexOf(e) === i;
      }).filter(function (word) {
        //- return words 3 chars or longer
        return word.length > 2;
      }).map(function (word) {
        return word.trim().replace(endingRe, '');
      }).sort();
  }

  function searchFor(needles, haystack) {
    'use strict';
    needles = wordmap(needles);
    var results = haystack.map(function (data) {
      var matches = needles.filter(function (needle) {
        return data.words.indexOf(needle) !== -1;
      }).length;

      return {
        type: data.type,
        title: data.title,
        slug: data.slug,
        category: data.category,
        matches: matches
      };
    }).filter(function (data) {
      return data.matches > 0;
    }).sort(function (a, b) {
      return b.matches - a.matches;
    });

    resultsEl.innerHTML = results.map(function (result) {
      return '<li class="weight' + result.matches + '"><a href="/' + result.slug + '">' + result.title + (result.type === 'blog' ? ' (blog)' : '') + '</a></li>';
    }).join('');

    resultsEl.hidden = false;
  }

  function throttle(fn, delay) {
    'use strict';
    var throttled = function () {
      var context = this, args = arguments;
      throttled.cancel();
      throttled.timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };

    throttled.cancel = function () {
      clearTimeout(throttled.timer);
    };

    return throttled;
  }

})();
