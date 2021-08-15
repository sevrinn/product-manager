const express = require("express");
const app = express();
const port = 8000;

//add in cors
const cors = require("cors");

//configure express app server
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//allow localhost:3000 to talk directly to the backend
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

//configure mongoose to connect
require("./config/mongoose.config");
//add routes to listen
const productRoutes = require("./routes/product.routes");
productRoutes(app);
//start the app server listening
app.listen(port, () => {
  console.log("The express app server is eavesdropping on port " + port);
});
