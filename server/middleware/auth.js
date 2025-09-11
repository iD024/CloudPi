const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  //gets token from header
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "No token, ur cooked" });
  }

  try {
    const decoded = jwt.verify(token, "TokenKEY");
    req.user = decoded.user; // imp line we attack the user with a decoded to show that the user is verified
    next();
  } catch (err) {
    res.status(401).json({ msg: "token not valid" });
  }
};
