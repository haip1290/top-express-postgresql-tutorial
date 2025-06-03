const { Pool } = require("pg");
require("dotenv").config();
const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.DBPORT;
const DATABASE = process.env.DATABASE;

module.exports = new Pool({
  host: HOST,
  user: USERNAME,
  database: DATABASE,
  password: PASSWORD,
  port: PORT,
});
