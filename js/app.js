// var http = require('http');
// var fs = require('fs');

// http.createServer(function(request, response){
// 	response.writeHead(200, {
// 		'Content-Type': 'text/html'});
// 	fs.readFile('index.html', function(error, contents){
// 		response.write(contents);
// 		response.end();
// 	});
// }).listen(8080);

var http = require('http');

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});
server.listen(8080);