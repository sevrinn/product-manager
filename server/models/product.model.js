//require mongoose
const mongoose = require("mongoose");
//create schema with timestamps
const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Product name is required"],
      minLength: [3, "Product title must be at least 3 characters."],
    },
    price: {
      type: String,
      required: [true, "Product price is required"],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

//export model. Collection name and schema are required
module.exports = mongoose.model("Product", ProductSchema);
