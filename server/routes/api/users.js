const express = require("express");
const routes = express.Router();
const { validateToken } = require("./validateUser");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JwtPassword } = require("../../database");

const { DB } = require("../../database");

routes.post("/register", (req, res) => {
  bcrypt.hash(req.body.user_password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ msg: err });
    } else {
      let newUser = {
        email: req.body.email,
        user_password: hash
      };
      DB.one(
        `INSERT INTO users (email, user_password) VALUES ($1, $2)RETURNING *;`,
        [newUser.email, newUser.user_password]
      )
        .then(data => {
          let token = jwt.sign({ id: data.id }, JwtPassword, {
            expiresIn: "1d"
          });
          res.send({ token });
        })
        .catch(err => {
          console.log(err);
          res.send({ error: err });
        });
    }
  });
});

routes.post("/login", validateToken, (req, res) => {
  let users = {
    email: req.body.email,
    user_password: req.body.user_password
  };
  DB.one(
    `SELECT 
 *
FROM
 users
WHERE
email = $1;`,
    [users.email]
  ).then(data => {
    console.log(data);
    bcrypt
      .compare(req.body.user_password, data.user_password, (err, success) => {
        if (err) {
          return res.status(500).json({ err: err });
        }
        if (success) {
          console.log(data);
          let token = jwt.sign({ id: data.id }, JwtPassword, {
            expiresIn: "1d"
          });
          res.send({ token });
        }
      })
  }).catch(err => {
    console.log(err);
    res.send({ error: err });
  });
});

module.exports = routes;
