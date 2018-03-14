var fs = require('fs');

fs.readFile(process.argv[2], (e, x) => {
  console.log(e? "There was an error":x.toString().split('\n').length-1);
});
