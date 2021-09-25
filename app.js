const http = require('http');

http.createServer(function (res, res) {
	res.write('Hello World');
	res.end();
}).listen(8080, '0.0.0.0');
