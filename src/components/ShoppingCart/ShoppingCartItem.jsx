import React from "react";

function ShoppingCartItems(props) {
  return (
    <li className="shoppingcart-item">
      <div>
        <img src={props.sneakerInfo.image} alt={props.sneakerInfo.name} />
        <p>
          {props.sneakerInfo.amount}x {props.sneakerInfo.name}
        </p>
      </div>
      <div>€{props.sneakerInfo.price}</div>
    </li>
  );
}

export default ShoppingCartItems;
