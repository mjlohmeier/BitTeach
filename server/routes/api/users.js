const express = require("express");
const routes = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JwtPassword } = require("../../database");

const { DB } = require("../../database");

routes.post("/users/register", (req, res) => {
  bcrypt.hash(req.body.user_password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ msg: err });
    } else {
      let newUser = {
        email: req.body.email,
        user_name: req.body.user_name,
        user_password: hash,
        initial_balance: 1000
      };
      DB.one(
        `INSERT INTO users (email, user_name, user_password, initial_balance) VALUES ($1, $2, $3, $4)RETURNING *;`,
        [
          newUser.email,
          newUser.user_name,
          newUser.user_password,
          newUser.initial_balance
        ]
      )
        .then(user => res.send(user))
        .catch(err => res.send(err));
    }
  });
});

routes.post("/users/login", (req, res) => {
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
  )
    .then(data => {
      bcrypt.compare(
        req.body.user_password,
        data.user_password,
        (err, success) => {
          if (err) {
            return res.status(500).json({ err: err });
          } else if (success) {
            const token = jwt.sign({ id: data.id }, JwtPassword, {
              expiresIn: "1d"
            });
            res.send({ token, data });
          }
        }
      );
    })
    .catch(err => {
      console.log(err);
      res.send({ error: err });
    });
});

module.exports = routes;
