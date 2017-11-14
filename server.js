var http = require('http');
var fs = require('fs');
var html = fs.readFileSync('./public/index.html',"utf8");
var css = fs.readFileSync('./public/style.css',"utf8");
var js = fs.readFileSync('./public/index.js',"utf8");
var jpg = fs.readFileSync('./public/logo.jpg');
//var htmlERR = fs.readFileSync('./public/404.html',"utf8");

http.createServer(function(req, res){
	if(req.url == '/index.html' || req.url == '/'){	
		res.writeHeader(200,{"Content-Type": "text/html"});
		res.write(html);
		res.end();
	}
	else if(req.url == '/style.css'){	
		res.writeHeader(200,{"Content-Type": "text/css"});
		res.write(css);
		res.end();
	}
	else if(req.url == '/index.js'){		
		res.writeHeader(200,{"Content-Type": "application/json"});
		res.write(js);
		res.end();
	}
	else if(req.url == '/logo.jpg'){
		res.writeHeader(200,{"Content-Type": "image/gif"});
		res.write(jpg);
		res.end();	
	}
	/*else{
		res.writeHeader(404,{"Content-Type": "text/html"});
		res.write(htmlERR);
		res.end();
	}*/
}).listen(3000);
