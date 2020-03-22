const dal = require("../dal");
const express = require("express");

const authLogic = require("../business-logic/user-logic");
const router = express.Router();

// GET http://localhost:8626/api/users
router.get("/users", async (request, response) => {
  try {
    const users = await authLogic.getAllUsersAsync();
    response.json(users);
  } catch (err) {
    response.status(500).send(err.message);
  }
});
router.post("/login", async (request, response) => {
  try {
    const user = request.body;
    // please fix later
    const sql = `SELECT * FROM users WHERE userName = '${user.userName}' AND password = '${user.password}'`;
    const users = await dal.executeAsync(sql);
    request.session.isLogin = true;
    console.log("isLogin: " + request.session.isLogin);

    response
      .status(201)
      .json(users)
      .send();
  } catch (err) {
    response.status(403).send(err);
  }
});

module.exports = router;
