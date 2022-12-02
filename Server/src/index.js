const express = require("express");
const app = express();

require("dotenv").config();
const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const connectdb = require("./db/mongoose.js");
connectdb();

const RegisterUser = require("./Routes/Register");
const LoginUser = require("./Routes/Login");

app.use("/register", RegisterUser);
app.use("/login", LoginUser);

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
