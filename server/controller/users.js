
const express = require("express");
const jwt = require("jsonwebtoken");

const authLogic = require("../business-logic/user-logic");
const router = express.Router();


// GET http://localhost:8626/api/users
router.get("/users", async (request, response) => {
  try {
    const users = await authLogic.getAllUsersAsync();
    response.json(users);
  } catch (err) {
    response
    .status(500)
    .send(err.message);
  }
});
router.post("/login", async (request, response) => {
  try {
    const user = request.body;
    const userData = await authLogic.getAUserAsync(user);
    // validate before?
    jwt.sign({user}, 'secretkey',{expiresIn: '30s'},(err, token) =>{
      console.log(token)
    })
    response
    .status(201)
    .send(userData);
  } catch (err) {
    response.status(500).send(err.message);
  }
});

router.post("/logout", (request, response) => {
  request.session.isLogin = false;
  response.send("user logged out");
});
router.post("/posts", verifyToken,(req, res) =>{
  jwt.verify(req.token, 'secretkey', (err, authData) =>{
    if(err){
res.sendStatus(403)
    }else{

      res.json({
        message: 'post created...',
        authData
      })
    }
  })
})
// token fotmat:
// Authorization : Bearer <access_token>
function verifyToken(req,res,next){
const bearerHeader = req.headers['authorization']
if (typeof bearerHeader !== 'undefined'){
const bearer = bearerHeader.split(' ')
// get token from array
const bearerToken = bearer[1];
req.token = bearerToken;
// next middleware
next();
}else{
  // forbidden
  res.sendStatus(403);
}
}
module.exports = router;
