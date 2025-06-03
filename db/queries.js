const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function getUsernameByUsername(username) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username LIKE ($1)",
    [`%${username}%`],
  );
  return rows;
}

async function deleteAllUsername() {
  await pool.query("DELETE FROM usernames");
}

module.exports = {
  getAllUsernames,
  insertUsername,
  getUsernameByUsername,
  deleteAllUsername,
};
