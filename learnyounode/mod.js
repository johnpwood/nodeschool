
var fs = require('fs');

module.exports = function(dir, ext, callback){
  fs.readdir(dir, (e, x) => {
    if(e){ return callback(e); }
    r = new RegExp("\." + ext + "$");
    callback(null,  x.filter(y=>y.match(r)));
  });
}

