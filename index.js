require("dotenv").config();

// const app = require("./app");
const httpSocket = require("./socket");

const PORT = process.env.PORT || 8080;
const PORT_SOCKET = process.env.PORT_SOCKET || 5000;

httpSocket.listen(PORT_SOCKET, () => {
  console.log(`Socket is listening on port ${PORT_SOCKET}`);
});

const express = require("express");
const app = express();
app.use(express.static("build"));
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
