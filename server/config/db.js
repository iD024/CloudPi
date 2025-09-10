const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/cloud-drive");
    console.log("connected to database");
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = connectionDB;
