import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Price: {product.price} ₹</p>
      <button className="addCart">Add to Cart</button>
      <button className="buy">Buy</button>
    </div>
  );
};

export default Product;
