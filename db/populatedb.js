const { Client } = require("pg");
require("dotenv").config();
const SQL = `CREATE TABLE IF NOT EXISTS usernames ( id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY, username VARCHAR ( 255 )); INSERT INTO usernames (username) VALUES ('Bryan'), ('Odin'),('Daon'); `;

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
const HOST = process.env.HOST;
const PORT = process.env.DBPORT;
const DATABASE = process.env.DATABASE;

async function main() {
  console.log("...seeding");
  const client = new Client({
    connectionString: `postgresql://${USERNAME}:${PASSWORD}@${HOST}:${PORT}/${DATABASE}`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
