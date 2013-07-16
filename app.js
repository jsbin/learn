/**
 * Learn JS Bin
 */

var express   = require('express'),
    http      = require('http'),
    docserver = require('docserver');

/**
 * Express setup
 */

var app = express();

app.set('port', process.env.PORT || 4567);
app.use(express.favicon(__dirname + '/public/img/favicon.png'));
app.use(express.logger('dev'));
app.use(express.compress());
app.use(express.static(__dirname + '/public'));
app.use(docserver({
  dir: __dirname + '/content',
  url: '/'
}));

http.createServer(app).listen(app.get('port'), function () {
  console.log('http://localhost:' + this.address().port);
});