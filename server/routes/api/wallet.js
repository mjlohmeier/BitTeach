const express = require("express");
const { DB } = require("../../database");
const routes = express.Router();

routes.get("/users/:id/balance", (req, res) => {
  let id = req.params.id;
  DB.one(`SELECT initial_balance FROM wallet WHERE user_id=$1;`, [id])
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => res.send(err));
});

routes.get("/user/:id/coin_address", (req, res) => {
  let userID = req.params.id;
  DB.one(`SELECT bit_coin_address FROM wallet WHERE user_id=$1;`,[userID])
    .then(data => {
      console.log(data);
      res.json(data);
    })
    .catch(err => res.send(err));
});

module.exports = routes;
