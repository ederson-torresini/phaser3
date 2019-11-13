const express = require("express");
const app = express();
const server = require("http").Server(app);
const io = require("socket.io").listen(server);
const port = 3000;

app.use("/", express.static(__dirname));

io.on("connection", socket => {

  socket.on("notify", id => {
    socket.broadcast.emit("publish", "Novo jogador: " + id);
  });

  socket.on("movement", position => {
    socket.broadcast.emit("renderPlayer", position);
  })
});

server.listen(port, () => console.log(`Server listening on port ${port}!`));
