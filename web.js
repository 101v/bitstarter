var express = require('express');
var fs = require('fs');

var fileContent = function (path) {
  fs.readFile(path, function(err, data) {
    if(err) throw err;
    return data.toString();
  }
}

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(fileContent('./index.html'));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});


