const express = require("express");
const app = express();

require("dotenv").config();
// console.log(process.env);
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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
