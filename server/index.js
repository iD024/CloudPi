const express = require("express");
const connectionDB = require("./config/db");
const UserSchema = require("./models/user");

//creation of server
const app = express();
const PORT = 5000;

//middlewares :
app.use(express.json({ extended: false })); //
app.use("/api/users", require("../server/routes/userRoutes")); //

//main route aka main page
app.get("/", (req, res) => {
  res.send("Connect to CloudPi");
});

// makes the server listen
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});

connectionDB();
