const express = require("express");
const usersRoute = require("./routes/usersRouter");
const app = express();

const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

//routes
app.use("/", usersRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
