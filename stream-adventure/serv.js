var http = require('http');
var through2 = require('through2');

function write(data, enc, next){
  this.push(data.toString().toUpperCase());
  next();
}

function end(done){ done(); }

var server = http.createServer(function(req, res) {
  req.pipe(through2(write, end)).pipe(res);
});

server.listen(process.argv[2]);
