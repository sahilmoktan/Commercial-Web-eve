const express = require("express");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const router = express.Router();

const Users = require("../Model/User");

router.post("/", (req, res) => {
  // console.log("hrllo", req.body);
  // Users.create(req.body);
  // res.json({
  //   message: "registered",
  // });
  try {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      console.log(hash);
      req.body["password"] = hash;

      Users.create(req.body);
      // console.log(req.body);
      // Store hash in your password DB.
    });
    res.json({
      message: "registered",
    });
  } catch (err) {}
});

module.exports = router;
