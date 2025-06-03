const db = require("../db/queries");

const userController = {
  getAllUsernames: async (req, res) => {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.send("Usernames: " + usernames.map((user) => user.username).join(","));
  },
  getNewUser: (req, res) => {
    res.render("index", { title: "Index page", username: null });
  },
  createNewUser: async (req, res) => {
    const { username } = req.body;
    console.log("username to be saved: ", username);
    await db.insertUsername(username);
    res.redirect("/");
  },
};

module.exports = userController;
