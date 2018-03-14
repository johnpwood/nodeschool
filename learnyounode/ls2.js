
var ls = require('./mod.js');

ls(process.argv[2], process.argv[3], function(e, x){
  if(e){
    console.log('There was an error: ', e);
    return;
  }
  console.log(x.join('\n'));
  return;
});
