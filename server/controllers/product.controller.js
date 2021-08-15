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

//create
module.exports.create = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      console.log(newProduct);
      res.json(newProduct);
    })
    .catch((err) => {
      console.log(
        "Ran into a problem while trying to create new product...",
        err
      );
      res.status(400).json(err);
    });
};
//get one (details)
module.exports.getOne = (req, res) => {
  Product.findById(req.params.id)
    .then((oneProduct) => {
      console.log(oneProduct);
      res.json(oneProduct);
    })
    .catch((err) => {
      console.log("We cannot find that product for some reason...", err);
      res.status(400).json(err);
    });
};
// update
module.exports.update = (req, res) => {
  Product.findByIdAndUpdate({ _id: req.params.id }, req.body, {
    new: true, //returns updated obj
    runValidators: true, //uses same validation that was used for create
  })
    .then((updatedProduct) => {
      console.log(updatedProduct);
      res.json(updatedProduct);
    })
    .catch((err) => {
      console.log("We had a problem updating this product...", err);
      res.status(400).json(err);
    });
};
//delete
module.exports.delete = (req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then((deletedProduct) => {
      console.log(deletedProduct);
      res.json(deletedProduct);
    })
    .catch((err) => {
      console.log(
        "Uh oh. We couldn't delete this product for some reason...",
        err
      );
      res.status(400).json(err);
    });
};
