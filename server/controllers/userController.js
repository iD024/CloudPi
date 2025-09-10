const bcrypt = require("bcrypt");
const User = require("../models/user");
const jwt = require("jsonwebtoken");

exports.registerUser = async (res, req) => {
  const { username, email, password } = req.body;
  try {
    //check if user exists
    let user = await User.findOne({ email });
    // heres the logic behind the User.findOne if used with await gives an object if not used with await sends Query object which is true for if statement
    // so if the user is not found it turns null is false value and runs the if statement -- imagine we don't use await and if it finds user it still runs the if statement
    if (user) {
      return res.status(400).json({ msg: "user alr exist" });
    }
    // point to note: if user found -- true runs the code --> if not found doesn't run the code

    //create a user instance to be save in database
    user = new User({
      username,
      email,
      password,
    });

    //we hash the password
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    // waits for it to save
    await user.save();

    // now we create a payload to send back AKA we send back a token for it to login + expires the token in 1hr
    const payload = {
      user: {
        id: user.id, //ALWAYS UNIQUE so we sign this with token
      },
    };

    // signs the token
    jwt.sign(
      payload,
      "TokenKEY",
      { expiresIn: 3600 },
      (err,
      (token) => {
        if (err) throw err;
        res.json({ token });
      })
    );
  } catch (err) {
    console.error(err.message);
  }
};
