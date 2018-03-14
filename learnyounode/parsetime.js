http = require('http');
url = require('url');

server = http.createServer( (req, res) => {
  res.writeHead( 200, { 'Content-Type': 'application/json' } );
  if(url.parse(req.url, true).pathname === '/api/parsetime'){
    time = url.parse(req.url, true).query.iso;
     var t = {
       hour: parseInt(time.substring(11, 13)) - 5,
       minute: parseInt(time.substr(14, 16)),
       second: parseInt(time.substr(17, 18))
    };
  res.end(JSON.stringify(t));
  }
  if(url.parse(req.url, true).pathname === '/api/unixtime'){
    time = url.parse(req.url, true).query.iso;
    var t = {
      unixtime: Date.parse(time)
    }
    res.end(JSON.stringify(t));
  }
  
  
});

server.listen(process.argv[2]);
