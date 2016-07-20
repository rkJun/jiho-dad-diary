var express = require('express');
var app = express();

app.use('/img', express.static(__dirname + '/img'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/test.html');
});

app.listen(3000, function() {
    console.log('3000 started');
});
