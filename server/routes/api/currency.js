const express = require("express");
const { DB } = require("../../database");
const routes = express.Router();

routes.get("/", (req, res) => {
    DB.any("SELECT * FROM marketplace;")
        .then(currency => res.json(currency))
        .catch(err => res.send(err))
});

module.exports = routes