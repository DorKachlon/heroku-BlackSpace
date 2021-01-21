require("dotenv").config();

const server = require("./socket");

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Socket is listening on port ${PORT}`);
});
