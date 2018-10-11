const express = require("express");
const { DB } = require("../../database");
const routes = express.Router();

routes.get("/users/:id/balance", (req, res) => {
  let id = req.params.id;
  DB.one(`SELECT initial_balance FROM users WHERE id=$1;`, [id])
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

routes.get("/user/:id/coin_address", (req, res) => {
  let userID = req.params.id;
  DB.one(`SELECT bit_coin_address FROM users WHERE id=$1;`, [userID])
    .then(data => {
      res.json(data);
    })
    .catch(err => res.send(err));
});

routes.post("/users/:bitcoinaddress/wallet", (req, res) => {
  let boughtCurrency = parseFloat(req.body.boughtCurrency);
  let bitcoinaddress = req.params.bitcoinaddress;
  let userID = req.body.userID;
  DB.one(`SELECT bit_coin_address FROM users WHERE bit_coin_address=$1`, [bitcoinaddress])
    .then(() => {
      DB.one(`INSERT INTO wallet (user_id, current_amount) VALUES ($1,$2) RETURNING *;`, [
        userID,
        boughtCurrency
      ]).catch(err => console.log(err))
    })
    .catch(err => console.log(err));
});

module.exports = routes;

// .then(user => {
//   console.log(user)
//   boughtCurrency.map(currency => {
//     console.log(currency)
//     //check if its in there if that then throw err
//     DB.one(`UPDATE marketplace SET balance = balance + ${currency.balance} WHERE currency_name=${currency.currency_name}AND user_id=${user.id}`)
//     .then(data => console.log(data))
//     //check if its not in there then add it to the database
//   })
// })

// .then(user => {
//   DB.one(
//     `SELECT * FROM users INNER JOIN wallet ON users.id = wallet.user_id WHERE user_id=$1;`,
//     [user.id,bitCoinAddress]
//   )