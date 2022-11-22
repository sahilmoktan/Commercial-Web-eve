const express = require("express");
const bcrypt = require("bcrypt");
const router = express.Router();
require("dotenv").config();
// const key = "1234";

const jwt = require("jsonwebtoken");

const Users = require("../Model/User");

router.post("/", async (req, res) => {
  try {
    const userData = await Users.find({ name: req.body.name });
    console.log(userData);
    if (userData.length > 0) {
      console.log(userData);
      bcrypt.compare(
        req.body.password,
        userData[0].password,
        function (err, result) {
          if (err) console.warn(err);
          console.log(result);
          // res.json({ msg: "User found" });
          if (result) {
            const token = jwt.sign(
              { user: req.body.name },
              process.env.TOKEN_SECRET
            );
            console.log(token);
            res.send({ isloggedIn: true });
          } else {
            res.send({ isloggedIn: false });
          }
        }
      );
    } else {
      res.json({
        msg: "user not found",
      });
    }
  } catch (err) {}
});

module.exports = router;
