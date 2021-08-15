import React from "react";
import { Link } from "@reach/router";

const Header = (props) => {
  return (
    <div className="header">
      <h1>ProductMananger+</h1>
      <div className="header-links">
        <Link to="/products/new">Create Product</Link>
        <Link to="/products/">Home</Link>
      </div>
    </div>
  );
};

export default Header;
