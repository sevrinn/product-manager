import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";
import ProductForm from "./ProductForm";
import Delete from "./Delete";

const All = (props) => {
  const [allProducts, setAllProducts] = useState([]);

  //useEffect makes an axios get req for allProducts backend url
  //do NOT forget the dependencies array at the end []
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        console.log(res);
        setAllProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updatedAfterDelete = (deletedProductId) => {
    let filteredProductArray = allProducts.filter((productObj) => {
      return productObj._id !== deletedProductId;
    });
    setAllProducts(filteredProductArray);
  };
  return (
    <div>
      <ProductForm />

      {allProducts.map((product, index) => {
        console.log(product.title);

        return (
          <div key={index}>
            <Link to={"/products/" + product._id}>{product.title}</Link>
            <Delete productId={product._id} afterDelete={updatedAfterDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default All;
