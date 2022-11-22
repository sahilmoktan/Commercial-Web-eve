const mongoose = require("mongoose");

const BooksSchema = new mongoose.Schema(
  {
    Bookname: { type: String, required: true },
    Author: { type: String, required: true },
    Price: { type: String, required: true },
    Currency: { type: String, default: "" },
  },
  {
    collection: "books",
  }
);
const Books = mongoose.model("BooksModel", BooksSchema);

module.exports = Books;
