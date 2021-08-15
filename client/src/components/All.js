import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

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
  return (
    <div>
      <h2>All Products</h2>
      {allProducts.map((product, index) => {
        console.log(product.title);

        return (
          <div key={index}>
            <Link to={"/products/" + product._id}>{product.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default All;
