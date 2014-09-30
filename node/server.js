var application_root = __dirname;
var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(application_root, '../')));
app.get('/', function(req, res){
  res.send('Hello World!');
});

var server = app.listen(3000, function() {
    console.log('Listening on port %d', server.address().port);
});
