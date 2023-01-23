import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

const sneakers = [
  {
    key: 1,
    name: 'Nike Air Jordan 1 Low',
    image: '/img/sneakers/air-jordan-1-low-shoes-d0wcbL.png',
    price: 99.99,
    amount: 1,
  },
  {
    key: 2,
    name: 'Nike Dunk Low',
    image: '/img/sneakers/dunk-low-shoes-1Tbw5H.png',
    price: 109.99,
    amount: 2,
  },
  {
    key: 3,
    name: 'Nike Air Jordan 1 Low',
    image: '/img/sneakers/air-jordan-1-low-shoes-d0wcbL.png',
    price: 99.99,
    amount: 1,
  },
  {
    key: 4,
    name: 'Nike Dunk Low',
    image: '/img/sneakers/dunk-low-shoes-1Tbw5H.png',
    price: 109.99,
    amount: 2,
  },
  {
    key: 5,
    name: 'Nike Air Jordan 1 Low',
    image: '/img/sneakers/air-jordan-1-low-shoes-d0wcbL.png',
    price: 99.99,
    amount: 1,
  },
  {
    key: 6,
    name: 'Nike Dunk Low',
    image: '/img/sneakers/dunk-low-shoes-1Tbw5H.png',
    price: 109.99,
    amount: 2,
  },
]

function ShoppingCartItems() {
  return (
    <ul className="shoppingcart-items-list">
      {sneakers.map((sneaker) => {
        return <ShoppingCartItem key={sneaker.key} sneakerInfo={sneaker} />
      })}
    </ul>
  );
}

export default ShoppingCartItems;
