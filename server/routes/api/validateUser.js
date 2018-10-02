const jwt = require("jsonwebtoken");
const { JwtPassword } = require('../../database');

exports.validateToken = async (req, res, next) => {
  let token = req.headers.token;
  let payload;
  try {
    payload = await jwt.verify(token, JwtPassword);
  } catch (err) {
    console.log(err);
  }
  if (payload) {
    req.user = payload;
    next();
  } else {
    res.send("invalid token");
  }
};
