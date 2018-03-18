var request = require('request');

var src = process.stdin;
var dest = process.stdout;

src.pipe(request.post('http://localhost:8099')).pipe(dest);

