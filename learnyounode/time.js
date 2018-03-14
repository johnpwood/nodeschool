net = require('net');

var server = net.createServer( (socket) => {
  date = new Date();
  socket.end(date.getFullYear() + "-"
             + (parseInt(date.getMonth()) < 9?
                "0" + (parseInt(date.getMonth()) + 1):
                parseInt(date.getMonth()) + 1) + "-"
             + date.getDate() + " "
             + date.getHours() + ":"
             + date.getMinutes() + "\n")
});

server.listen(process.argv[2]);
