/*
 * Write your server code in this file.
 */
var http = require('http');
var fs = require('fs');

http.createServer(function(req, res){
	if(req.url == '/index.html' || req.url == '/'){
		fs.readFile('./public/index.html', function(err, html){					
			res.writeHeader(200,{"Content-Type": "text/html"});
			res.write(html);
			res.end();
		});
	}
	else if(req.url == '/style.css'){
		fs.readFile('./public/style.css', function(err, css){	
			res.writeHeader(200,{"Content-Type": "text/css"});
			res.write(css);
			res.end();
		});
	}
	else if(req.url == '/index.js'){		
		fs.readFile('./public/index.js', function(err, js){	
			res.writeHeader(200,{"Content-Type": "application/json"});
			res.write(js);
			res.end();
		});
	}
	else if(req.url == '/logo.jpg'){
		fs.readFile('./public/logo.jpg', function(err, jpg){	
			res.writeHeader(200,{"Content-Type": "picture/jpg"});
			res.write(jpg);
			res.end();
		});		
	}
}).listen(4200);
