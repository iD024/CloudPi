const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");

router.get("/list", auth, (req, res) => {
  // Because of our auth middleware we have access to req.user
  res.json({
    msg: `Successfully accessed file list for user with ID: ${req.user.id}`,
  });
});

module.exports = router;
