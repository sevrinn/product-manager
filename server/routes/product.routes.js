//create controller const
const ProductController = require("../controllers/product.controller");

//create product function
//function takes in app server as argument and sets up all hte routes
module.exports = (app) => {
  //get all
  app.get("/api/products", ProductController.getAll);
  //create
  //get one (details)
  // edit
  //delete
};
