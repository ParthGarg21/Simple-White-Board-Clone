const express = require("express");
const socket = require("socket.io");

const app = express();

app.use(express.static("public"));

const port = 3000;

app.listen(port, function () {
  console.log("Server running at port : " + port);
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// const io = socket(server);

// io.on("connection", function (socket_) {
//   console.log("Made scoket connection!!");

//   socket_.on("drawHelper", function (data) {
//     io.sockets.emit("drawHelper", data);
//   });

//   socket_.on("reset", function (data) {
//     io.sockets.emit("reset", data);
//   });

//   socket_.on("colorW", function (colorW) {
//     io.sockets.emit("colorW", colorW);
//   });

//   socket_.on("equate", function (data) {
//     io.sockets.emit("equate", data);
//   });

//   socket_.on("triggerUndo", function (data) {
//     io.sockets.emit("triggerUndo", data);
//   });

//   socket_.on("triggerRedo", function (data) {
//     io.sockets.emit("triggerRedo", data);
//   });
// });
