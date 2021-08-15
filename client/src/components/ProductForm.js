import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const ProductForm = () => {
  //keep track of what's being typed by setting state
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = (e) => {
    //prevent default submit
    e.preventDefault();

    //create newProduct obj
    const newProduct = {
      title,
      price,
      description,
    };

    //make axios post request
    axios
      .post("http://localhost:8000/api/products", newProduct)
      .then((res) => {
        console.log(res);
        //navigates to details page for this product
        navigate("/products/" + res.data._id);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data.errors) {
          setErrors(err.response.data.errors);
        }
      });
  };
  return (
    <div className="container">
      <h2>Add A Product</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <label>Description: </label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Add Product</button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
