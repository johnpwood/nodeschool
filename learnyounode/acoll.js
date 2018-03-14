var http = require('http');

http.get(process.argv[2], (request) => {
  var out = "";
  request.on("data", (data) => {
    out += data.toString();
  });
  request.on("end", () => {
    console.log(out);
    http.get(process.argv[3], (request) => {
      var out = "";
      request.on("data", (data) => {
        out += data.toString();
      });
      request.on("end", () => {
        console.log(out);
        http.get(process.argv[4], (request) => {
          var out = "";
          request.on("data", (data) => {
            out += data.toString();
          });
          request.on("end", () => {
            console.log(out);
          });
        });
      });
    });
  });
});
