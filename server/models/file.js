const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    filename: {
      type: String,
      required: true,
    },
    pathOnPi: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },

    // this is how we link user to the file
    owner: {
      type: mongoose.Schema.Types.ObjectId, // gets the id
      ref: "User", // from user
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", FileSchema);
