import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Delete = (props) => {
  const { productId, afterDelete } = props;

  const deleteHandler = () => {
    console.log("Delete id:" + productId);

    axios
      .delete("http://localhost:8000/api/products/" + productId)
      .then((res) => {
        console.log("product deleted: ");
        console.log(res.data);
        afterDelete(productId);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <button className="delete-btn" onClick={(e) => deleteHandler()}>
      Delete Product
    </button>
  );
};

export default Delete;
