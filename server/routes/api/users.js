const express = require("express");
const routes = express.Router();
const { validateToken } = require("../Validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JwtPassword } = require("../../database");

const { DB } = require("../../database");

routes.get("/balance", (req, res) => {
  DB.one(`SELECT initial_balance FROM wallet;`)
    .then(data => res.json(data))
    .catch(err => res.send(err));
});

routes.post("/register", (req, res) => {
  bcrypt.hash(req.body.user_password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({ msg: err });
    } else {
      let newUser = {
        email: req.body.email,
        user_name: req.body.user_name,
        user_password: hash
      };
      DB.one(
        `INSERT INTO users (email, user_name, user_password) VALUES ($1, $2, $3)RETURNING *;`,
        [newUser.email, newUser.user_name, newUser.user_password]
      )
        .then(user => {
          DB.one(
            `INSERT INTO wallet (user_email, initial_balance) VALUES($1, 1000.00)RETURNING *;`,
            [user.email]
          );
          res.send("Created User");
        })
        .catch(err => {
          console.log(err);
          res.send(err);
        });
    }
  });
});

routes.post("/login", (req, res) => {
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
            console.log(token);
            return res.status(200).json({ msg: "Authorized", token: token });
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

// .then(data => {
//   const token = jwt.sign({ id: data.id }, JwtPassword, {
//     expiresIn: "1d"
//   });
//   res.status(201).json({ msg: "User Created", token: token });
// })
