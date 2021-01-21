let messages = [];
let users = {};

function generateUserId() {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  result += characters.charAt(Math.floor(Math.random() * characters.length));
  result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  return result;
}

function getOnlineUsers() {
  const arrOfUsers = [];
  for (const uid in users) {
    arrOfUsers.push(uid);
  }
  return arrOfUsers;
}

function newUser(socketID) {
  let userId = generateUserId();
  while (users[userId]) {
    userId = generateUserId();
  }
  users[userId] = socketID;
  return userId;
}

function removeUser(socketID) {
  const arrOfUsers = [];
  for (const uid in users) {
    if (users[uid] === socketID) {
      delete users[uid];
    } else {
      arrOfUsers.push(uid);
    }
  }
  return arrOfUsers;
}

function getOldMessage() {
  messages = messages.filter((mes) => mes.time + 60 * 1000 > new Date().getTime());
  return messages;
}

function newMessage(messageInfo) {
  messages.push(messageInfo);
  console.log(messages);
}

module.exports = {
  getOnlineUsers,
  newUser,
  getOldMessage,
  newMessage,
  removeUser,
};
