const express = require("express");
const app = express();
const port = 8000;

//configure express app server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configure mongoose to connect
require("./config/mongoose.config");
//add routes to listen
const productRoutes = require("./routes/product.routes");
productRoutes(app);
//start the app server listening
app.listen(port, () => {
  console.log("The express app server is eavesdropping on port " + port);
});
