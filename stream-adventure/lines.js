var split = require('split');

var through2 = require('through2');

var n = 0;

process.stdin.pipe(split()).pipe(through2(function(line, _, next) {
  this.push(n%2? line.toString().toUpperCase(): line.toString().toLowerCase());
  this.push('\n');
  n += 1;
  next();
})).pipe(process.stdout);
