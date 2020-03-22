const dal = require("../dal");

async function getAllUsersAsync() {
  const sql = "SELECT * FROM users";
  const users = await dal.executeAsync(sql);
  return users;
}

async function getAUserAsync(user) {
  const sql = `SELECT * FROM users WHERE userName = '${user.userName}' AND password = '${user.password}'`;
  const users = await dal.executeAsync(sql);
  console.log(JSON(users));
  return users;
}

module.exports = {
  getAllUsersAsync,
  getAUserAsync
};
