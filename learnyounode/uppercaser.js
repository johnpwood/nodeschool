var http = require('http');
var map = require('through2-map');

var server = http.createServer((req, res) => {
  req.pipe(map((x) => { return x.toString().toUpperCase() })).pipe(res);
});

server.listen(process.argv[2]);
