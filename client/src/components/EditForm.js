import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import Delete from "./Delete";

const EditForm = (props) => {
  const { id } = props;
  console.log(id);
  //keep track of what's being typed by setting state
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products" + id)
      .then((res) => {
        console.log(res.data);
        //navigates to details page for this product
        setTitle(res.data.title);
        setPrice(res.data.price);
        setDescription(res.data.description);
      })
      .catch((err) => {
        console.log("There was a problem setting state of your edit form", err);
      });
  }, []);

  const redirectAfterDelete = () => {
    navigate("/restaurants");
  };

  const handleSubmit = (e) => {
    //prevent default submit
    e.preventDefault();

    //create newProduct obj
    const tempProduct = {
      title,
      price,
      description,
    };

    //make axios post request
    axios
      .put("http://localhost:8000/api/products" + id, tempProduct)
      .then((res) => {
        console.log(res);
        navigate("/products/" + res.data._id);
      })
      .catch((err) => {
        console.log(err.response);
        if (err.response.data.errors) {
          setErrors(err.response.data.errors);
        }
      });
  };
  return (
    <div className="container">
      <h2>Edit Product</h2>
      <form>
        <div>
          <label>Title: </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errors.title ? (
            <span className="error">{errors.title.message}</span>
          ) : null}
        </div>
        <div>
          <label>Price: </label>
          <input
            type="text"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          {errors.price ? (
            <span className="error">{errors.price.message}</span>
          ) : null}
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
          <button onClick={handleSubmit}>Update Product</button>
          <Delete productId={id} afterDelete={redirectAfterDelete} />
        </div>
      </form>
    </div>
  );
};

export default EditForm;
