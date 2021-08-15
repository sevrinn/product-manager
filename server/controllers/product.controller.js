//require model.js
const Product = require("../models/product.model");
//write controller for getAll projects using find() promise
module.exports.getAll = (req, res) => {
  Product.find()
    .then((allProducts) => {
      console.log(allProducts);
      res.json(allProducts);
    })
    .catch((err) => {
      console.log("Hmmm...Cannot find products", err);
      res.json(err);
    });
};
