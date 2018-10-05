const express = require("express");
const routes = express.Router();
const { validateToken } = require("../Validation");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JwtPassword } = require("../../database");

const { DB } = require("../../database");

routes.get("/balance/:email", (req, res) => {
  let email = req.params.email;
  DB.one(`SELECT initial_balance FROM wallet WHERE user_email=$1;`,[email])
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
        })
        .then(result => res.json(result))
        .catch(err => {
          console.log(err);
          res.send(err);
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
  )
    .then(data => {
      console.log(data);
      bcrypt.compare(
        req.body.user_password,
        data.user_password,
        (err, success) => {
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
        }
      );
    })
    .catch(err => {
      console.log(err);
      res.send({ error: err });
    });
});

module.exports = routes;
