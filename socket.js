const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const path = require("path");
const cors = require("cors");

const {
  newUser,
  getOldMessage,
  newMessage,
  removeUser,
  getOnlineUsers,
} = require("./helperFunction");

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(cors());
// app.use(router);
app.use(express.static(path.join(__dirname, "..", "my-app2", "build")));

io.on("connection", (socket) => {
  socket.on("join", ({ room }) => {
    const userId = newUser(socket.id);
    socket.join(room);
    socket.emit("userId", userId);
    socket.emit("old-messages", getOldMessage());
    io.to(room).emit("online-users", getOnlineUsers());
  });

  socket.on("send-message", (messageInfo) => {
    newMessage(messageInfo);
    io.to("XPITG").emit("receive-message", messageInfo);
  });

  socket.on("disconnect", () => {
    const arrOfUsers = removeUser(socket.id);
    io.to("XPITG").emit("online-users", arrOfUsers);
  });
});

module.exports = server;
