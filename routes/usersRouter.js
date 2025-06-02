const { Router } = require("express");
const usersRoute = Router();

usersRoute.get("/", (req, res) => {
  console.log("username will be logged here - wip");
  res.send("Hello World!");
});

usersRoute.get("/new", (req, res) => {
  res.send("new page here");
});

usersRoute.post("/new", (req, res) => {
  console.log("username to be saved: ", req.body.username);
});

module.exports = usersRoute;
