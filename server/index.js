const express = require("express");
const connectionDB = require("./config/db");
const UserSchema = require("./models/user");

const app = express();
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

connectionDB();
