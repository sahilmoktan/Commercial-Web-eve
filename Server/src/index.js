const express = require("express");
const app = express();

require("dotenv").config();
console.log(process.env);
const cors = require("cors");
app.use(cors());

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const connectdb = require("./db/mongoose.js");
connectdb();

const RegisterUser = require("./Routes/Register");
const LoginUser = require("./Routes/Login");

app.use("/register", RegisterUser);
app.use("/login", LoginUser);

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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
