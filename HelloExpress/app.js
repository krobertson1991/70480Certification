var express = require('express');
var app = express();

app.get('/', function(request, response){
    response.send('Hello World!');
});

var port = 8080;
app.listen(port);
console.log('listening on port ' + port);