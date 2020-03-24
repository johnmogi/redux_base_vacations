const dal = require("../dal");
const express = require("express");
const authLogic = require("../business-logic/user-logic");
const router = express.Router();

// const server = express();
// const expressSession = require("express-session");
// var cookieParser = require("cookie-parser");

// server.use(
//   expressSession({
//     name: "userlog",
//     secret: "let-me-in",
//     resave: true,
//     saveUninitialized: false
//   })
// );
// server.use(cookieParser()); // Support Cookies

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

router.post("/status", (request, response) => {
  if (!request.session.isLogin) {
    response.status(403).send("Access Denied! Please Log-In!");
    return;
  }
  response.send("still good");
});

router.post("/logout", (request, response) => {
  request.session.isLogin = false;
  response.send("user logged out");
});

module.exports = router;
