const http = require('http');

http.createServer(function (res, res) {
	res.write('test de deploiment avec circleci');
	res.end();
}).listen(8080, '0.0.0.0');
