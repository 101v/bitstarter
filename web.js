var express = require('express');
var fs = require('fs');

var fileContent = function (path, response) {
  fs.readFile(path, function(err, data) {
    if(err) throw err;
    response.send(data.toString());
  });
};

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  fileContent('./index.html', response);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
