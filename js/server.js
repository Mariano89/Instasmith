console.log("loaded serverjs");

var http = require('http');
var fs = require('fs');


http.createServer(function(request, response){

 	// console.log(request);
	if(request.url == '/'){
	response.writeHead(200, {
		'Content-Type': 'text/html'});

	console.log(request.url);
	fs.readFile('index.html', function(error, contents){
		if(error){
			console.error(error, "!!!!<(O_o)>");
		}
		console.log(typeof contents, "contents");
		response.write(contents);

		response.end();
		});
	} 	else {       // use __dirname instead of ./
	fs.readFile('./' + request.url, function(error, contents){
		if(error){
			console.error(error, "!!!!");
		}
		response.write(contents);
		response.end();
		});
	}
}).listen(process.env.PORT || 8080);
// console.log(process);

