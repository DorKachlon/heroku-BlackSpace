const httpSocket = require("http").createServer();
const { cleanMessagesAndReturn, newUserId } = require("./helperFunction");

const io = require("socket.io")(httpSocket, { cors: { origin: "*", methods: ["GET", "POST"] } });

let messages = [];
let users = {};

io.on("connection", (socket) => {
  const userId = newUserId(users);
  socket.emit("userId", userId);
  socket.join(userId);
  socket.emit("old-messages", cleanMessagesAndReturn(messages));

  socket.on("send-message", (messageInfo) => {
    messages.push(messageInfo);
    console.log(messages);
    for (const id in users) {
      socket.broadcast.to(id).emit("receive-message", messageInfo);
    }
    socket.emit("receive-message", messageInfo);
  });

  socket.on("disconnect", () => {
    console.log("user disconnected");
    io.sockets.emit("user disconnected");
  });
});

module.exports = httpSocket;
