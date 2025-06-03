const express = require("express");
const usersRoute = require("./routes/usersRouter");
const app = express();

const path = require("node:path");

app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

//routes
app.use("/", usersRoute);

const PORT = process.env.PORT || 3000;

app.use((error, req, res, next) => {
  console.log(error);

  res.status(error.statusCode || 500).send(error.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
