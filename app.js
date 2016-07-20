var express = require('express');
var app = express();

app.use('/img', express.static(__dirname + '/img'));

app.get('/', function(req, res) {
    res.send('Hello World');
});

app.get('/test', function(req, res) {
    res.sendFile(__dirname + '/test.html');
});

app.listen(3000, function() {
    console.log('3000 started');
});
