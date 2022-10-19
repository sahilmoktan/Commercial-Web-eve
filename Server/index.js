const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
const uri = "mongodb://localhost:27017/Commercial_web_db";

const bcrypt = require("bcrypt");
const saltRounds = 10;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3000;

const connect = async () => {
  try {
    mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connected to mongodb");
  } catch (error) {
    console.error(error);
  }
};
connect();

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    collection: "users",
  }
);
const Users = mongoose.model("UserModel", UserSchema);
app.post("/register", (req, res) => {
  // Users.create(req.body);
  // res.json({
  //   message: "registered",
  // });
  try {
    bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
      console.log(hash);
      req.body["password"] = hash;

      Users.create(req.body);
      // Store hash in your password DB.
    });
    res.json({
      message: "registered",
    });
  } catch (err) {}
});

app.post("/login", async (req, res) => {
  try {
    const user = await Users.find({ name: req.body.name });
    console.log(user);
    if (user.length > 0) {
      console.log(user);
      bcrypt.compare(
        req.body.password,
        user[0].password,
        function (err, result) {
          console.log(result);
          res.json({ msg: "User found" });
        }
      );
    } else {
      res.json({
        msg: "user not found",
      });
    }
  } catch (err) {}
});

// app.get("/users", async (req, res) => {
//   const users = await Users.find({});
//   res.json({
//     users: users,
//   });
// });

// app.put("/users", async (req, res) => {
//   const filter = { name: req.body.name };
//   const update = { isWinner: true };
//   let data = await Users.findOneAndUpdate(filter, update);
//   if (data) {
//     res.json({
//       message: "updated",
//     });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
