//create controller const
const ProductController = require("../controllers/product.controller");

//create product function
//function takes in app server as argument and sets up all hte routes
module.exports = (app) => {
  //get all
  app.get("/api/products", ProductController.getAll);
  //create
  app.post("/api/products", ProductController.create);
  //get one (details)
  app.get("/api/products/:id", ProductController.getOne);
  // update
  app.put("/api/products/:id/", ProductController.update);
  //delete
  app.delete("/api/products/:id", ProductController.delete);
};
