const dotEnv = require("dotenv");
dotEnv.config();
const pg = require("pg-promise")();
const DBConfig = `postgres://${process.env.USERNAME}:${
  process.env.PASSWORD
}@bitTeach.teach:5432/bitTeach`;
const DB = pg(DBConfig);
const JwtPassword = "password";

module.exports = { DB, JwtPassword };
