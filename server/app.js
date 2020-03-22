// server.js
const express = require("express");
const { port } = require("./config");
// const express = require("express");
const expressSession = require("express-session");
// const consController = require("./setup");
var cookieParser = require("cookie-parser");

const server = express();
server.use(cookieParser()); // Support Cookies

const cors = require("cors");
const usersController = require("./controller/users");
const vacsController = require("./controller/vacations");

server.use(
  expressSession({
    name: "authenticationCookie",
    secret: "user-ali-baba",
    resave: true,
    saveUninitialized: false
  })
);
server.use(cors());
server.use(express.json());
server.use("/api", vacsController);
server.use("/api/auth", usersController);
server.listen(port, () =>
  console.log(`Server Vacations running on port ${port}`)
);
// server.listen(port, () =>
//   console.log("Listening to Vacations on http://localhost:3003")
// );
