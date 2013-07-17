/**
 * Learn JS Bin
 */

var express = require('express'),
    http    = require('http'),
    mdtree  = require('mdtree'),
    hbs     = require('hbs');

/**
 * Express setup
 */

var app = express();

app.set('port', process.env.PORT || 4567);
// Views
app.set('views', __dirname + '/views');
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
hbs.registerPartials(__dirname + '/views/partials');
// Content
app.use(express.favicon(__dirname + '/public/img/favicon.png'));
app.use(express.logger('dev'));
app.use(express.compress());
app.use(app.router);
app.use(express.static(__dirname + '/public'));

/**
 * Content setup & routing
 */

var baseDir = 'content';

mdtree.build(baseDir, function (err, tree) {

  var articles = mdtree.files(tree);

  articles.forEach(function (article) {
    var url = '/' + article.urlPath.replace(baseDir, '');
    app.get(url, function (req, res) {
      res.render(article.layout || 'index', article);
    });
  });

  http.createServer(app).listen(app.get('port'), function () {
    console.log('http://localhost:' + this.address().port);
  });

});

