const express = require("express");
const { DB } = require("../../database");
const routes = express.Router();

routes.get("/users/:id/balance", (req, res) => {
  let id = req.params.id;
  DB.one(`SELECT initial_balance FROM users WHERE id=$1;`, [id])
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => res.send(err));
});

routes.get("/user/:id/coin_address", (req, res) => {
  let userID = req.params.id;
  DB.one(`SELECT bit_coin_address FROM users WHERE id=$1;`, [userID])
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => res.send(err));
});

routes.post("/users/:bitcoinaddress/wallet", (req, res) => {
  bitCoinAddress = req.params.bitcoinaddress;
  DB.one(`SELECT * FROM users INNER JOIN wallet ON users.id = wallet.user_id WHERE user_id=$1;`,
    [bitCoinAddress]
  ).then(user => {
    DB.one(`INSERT INTO wallet (user_id, current_amount, currency_id) VALUES($1,$2,$3);`,[user.id])
  })
    .then(data => {
      res.send(data);
    })
    .catch(err => res.send(err));
});

module.exports = routes;
