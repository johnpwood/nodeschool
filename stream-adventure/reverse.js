var through2 = require('through2');

var concat = require('concat-stream');

process.stdin.pipe(concat(function(x){
  process.stdout.write(x.toString().split("").reverse().join(""));
}))

