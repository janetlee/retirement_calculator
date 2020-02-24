var express = require('express');
// var http = require('http');
// var url = require('url');
var fs = require('fs');
var path = require('path');
var app = express();
app.use(express.static('public'));

var server = app.listen(8000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});



app.get('/', function (req, res, err) {
  fs.readFile('files/index.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
});