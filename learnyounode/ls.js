fs = require('fs');

fs.readdir(process.argv[2], (e, x) => {
  if(e){
    console.log(e);
    return;
  }
  r = new RegExp("\." + process.argv[3] + "$");
  console.log(x.filter( x=>x.match(r)).join('\n'));
});
