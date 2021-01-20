function generateUserId() {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  result += characters.charAt(Math.floor(Math.random() * characters.length));
  result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  result += numbers.charAt(Math.floor(Math.random() * numbers.length));
  return result;
}

function newUserId(users) {
  let userId = generateUserId();
  while (users[userId]) {
    userId = generateUserId();
  }
  users[userId] = true;
  return userId;
}

function cleanMessagesAndReturn(messages) {
  messages = messages.filter((mes) => mes.time + 60 * 1000 > new Date().getTime());
  return messages;
}
module.exports = { cleanMessagesAndReturn, newUserId };
