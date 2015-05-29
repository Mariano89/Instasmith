var http = require('http');
var fs = require('fs');


http.createServer(function(request, response){

 	console.log(request);
	if(request.url == '/'){
	response.writeHead(200, {
		'Content-Type': 'text/html'});

	console.log(request.url);
	fs.readFile('../index.html', function(error, contents){
		response.write(contents);
		response.end();
		});
	} 	else {
	fs.readFile('../' + request.url, function(error, contents){
		response.write(contents);
		response.end();
		});
	}
}).listen(process.env.PORT || 8080);
// console.log(process);

