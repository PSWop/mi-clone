import React from "react";
import "../styles/Prenavbar.css";

const Prenavbar = () => {
  return (
    <div className="preNav">
      <div>
        <a href="/store">STORE</a> <span></span>
        <a href="/phone">Phone</a>
        <span></span>
        <a href="/smart-home">Laptop & Tablet</a>
        <span></span>
        <a href="/discover">Discover</a>
        <span></span>
      </div>
      <div>
        <a href="/login">Sign In</a>
        <span></span>
        <a href="/cart">CART</a>
        <span></span>
      </div>
    </div>
  );
};

export default Prenavbar;
