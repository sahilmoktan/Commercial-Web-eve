const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    token: { type: String, default: "" },
  },
  {
    collection: "users",
  }
);
const Users = mongoose.model("UserModel", UserSchema);

module.exports = Users;
