const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const port = 3000;
const uri = "mongodb://localhost:27017/chocolatewinner";
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
    isWinner: { type: Boolean, required: true },
  },
  {
    collection: "users",
  }
);
const Users = mongoose.model("UserModel", UserSchema);
app.post("/register", (req, res) => {
  Users.create(req.body);
  res.json({
    message: "registered",
  });
});

app.get("/users", async (req, res) => {
  const users = await Users.find({});
  res.json({
    users: users,
  });
});
//{name: yak}  {isWinner: true}

app.put("/users", async (req, res) => {
  const filter = { name: req.body.name };
  const update = { isWinner: true };
  let data = await Users.findOneAndUpdate(filter, update);
  if (data) {
    res.json({
      message: "updated",
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
