import React, { useState } from "react";
import list from "./Data";
import Card from "./Card";
import "./Ashopping_cart.css";

const ShoppingCart = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Card key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default ShoppingCart;