http = require('http');
fs = require('fs');

server = http.createServer( (req, res) => {
  var file = fs.createReadStream(process.argv[3])
  file.pipe(res);
});

server.listen(process.argv[2]);
