const { Router } = require("express");
const usersRoute = Router();
const userController = require("../controllers/usersController");

usersRoute.get("/", userController.getAllUsernames);

usersRoute.get("/new", userController.getNewUser);

usersRoute.post("/new", userController.createNewUser);
usersRoute.get("/search", userController.searchUserByUsername);
usersRoute.post("/delete", userController.deleteAllUsername);
module.exports = usersRoute;
