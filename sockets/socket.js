// let { Server } = require('socket.io');
// let http = require("http");

// let server = http.createServer(app);
// let io = new Server(server);
// let count = 0;

// io.on("connection", (socket) => {
//   count++;
  
//   // socket.broadcast.emit("online",count)        //It sends count to everyone except the new one
//   // io.emit("online",count)     //It sends count value to everyone
//   socket.emit("online", count);   //It sends count value to the new one, not to everyone
//   socket.emit("blah", "hello from server 1");

//   socket.on("xyz", (msg) => {
//     io.emit("zyx", msg);
//   });

//   socket.on("disconnect", () => {
//     count--;
//     // socket.broadcast.emit("online",count) //It sends count to everyone except the new one
//     io.emit("online", count);     //It sends count value to everyone
//   });
// });
