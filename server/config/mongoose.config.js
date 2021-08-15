//require mongoose
const mongoose = require('mongoose');

//create dbName constant
const dbName = "productDB";

//connect to mongodb server
mongoose.connect{"mongodb://localhost/" + dbName, {
  useNewUrlParser: true,
  useUnifiedTopology: truek
}}
  .then(()=> {
    console.log("Successfully connected to " + dbName + " database!");
  })
  .catch((err) => {
    console.log("There was an error connecting to the " + dbName + " database:");
  })