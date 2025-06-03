const db = require("../db/queries");

const userController = {
  getAllUsernames: async (req, res) => {
    const usernames = await db.getAllUsernames();
    console.log("Usernames: ", usernames);
    res.render("index", {
      title: "List of users: ",
      usernames: usernames,
    });
  },
  getNewUser: (req, res) => {
    res.render("createUser", { title: "Index page", username: null });
  },
  createNewUser: async (req, res) => {
    const { username } = req.body;
    console.log("username to be saved: ", username);
    await db.insertUsername(username);
    res.redirect("/");
  },
  searchUserByUsername: async (req, res) => {
    const query = req.query.username;
    console.log("Begin searching for: ", query);
    const usernames = await db.getUsernameByUsername(query);
    console.log("Found usernames: ", usernames);

    res.render("search", {
      title: "Search username",
      usernames: usernames,
    });
  },
  deleteAllUsername: async (req, res) => {
    console.log("Deleting all username...");
    await db.deleteAllUsername();
    res.redirect("/");
  },
};

module.exports = userController;
