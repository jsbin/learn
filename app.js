/**
 * Learn JS Bin
 */

var express = require('express'),
    http    = require('http'),
    mdware  = require('mdware'),
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
app.use(express.static(__dirname + '/public'));
app.use(mdware({
  dir: __dirname + '/content',
  url: '/'
}));
app.use(function (req, res, next) {
  if (!req.mdware) return next();
  res.render(req.mdware.attributes.layout || 'index', req.mdware);
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('http://localhost:' + this.address().port);
});