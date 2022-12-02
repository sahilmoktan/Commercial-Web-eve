const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    foodType: { type: String, required: true },
    restaurant: { type: String, required: true },
    foodCategory: { type: String, required: true },
    foodImage: { type: String },
  },
  {
    collection: "Foods",
  }
);
const productModel = mongoose.model("productModel", productSchema);
module.exports = productModel;
