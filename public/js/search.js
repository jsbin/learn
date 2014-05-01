(function () {
  'use strict';
  var searchTerms = [];
  var search = document.querySelector('#search');
  search.addEventListener('input', throttle(function () {
    if (searchTerms.length === 0) {
      get('/help/search.json', function (data) {
        searchTerms = data;
        searchFor(this.value, searchTerms);
      }.bind(this));
    } else {
      searchFor(this.value, searchTerms);
    }
  }, 200), false);

  document.documentElement.addEventListener('click', function (event) {
    if (event.target.id === 'search' || event.target.id === 'results') {

    } else {
      resultsEl.hidden = true;
    }
  });

  search.addEventListener('focus', function () {
    resultsEl.hidden = false;
  });
})();

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

var resultsEl = document.querySelector('#results');
