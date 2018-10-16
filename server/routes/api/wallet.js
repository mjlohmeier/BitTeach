const express = require("express");
const { DB } = require("../../database");
const routes = express.Router();

routes.get("/user/:id/currentamount/wallet", (req, res) => {
  let id = req.params.id;
  DB.one(`SELECT current_amount FROM wallet WHERE user_id=$1`, [id])
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err);
      res.send(err);
    });
});

routes.post("/users/:bitcoinaddress/wallet", (req, res) => {
  let boughtCurrency = parseFloat(req.body.boughtCurrency);
  let bitcoinaddress = req.params.bitcoinaddress;
  let userID = req.body.userID;
  DB.one(`SELECT bit_coin_address FROM users WHERE bit_coin_address=$1`, [
    bitcoinaddress
  ])
    .then(() => {
      DB.one(
        `INSERT INTO wallet (user_id, current_amount) VALUES ($1,$2) RETURNING *;`,
        [userID, boughtCurrency]
      ).catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = routes;
