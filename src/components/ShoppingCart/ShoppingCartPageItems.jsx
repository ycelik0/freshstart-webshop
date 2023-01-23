import React from "react";
import ShoppingCartPageItem from "./ShoppingCartPageItem";

function ShoppingCartItems(props) {
  return (
    <ul className="shoppingcart-items-list order">
      {props.sneakers.map((sneaker) => {
        return <ShoppingCartPageItem key={sneaker.key} sneakerInfo={sneaker} />
      })}
    </ul>
  );
}

export default ShoppingCartItems;
