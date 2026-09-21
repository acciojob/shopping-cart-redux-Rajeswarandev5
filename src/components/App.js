import React from "react";
import { useSelector } from "react-redux";

import "./../styles/App.css";

import ProductList from "./ProductList";
import Cart from "./Cart";
import Wishlist from "./Wishlist";

const App = () => {
  const cart = useSelector((state) => state.cart);
  const wishlist = useSelector((state) => state.wishlist);

  return (
    <div className="app">
      <h1>Shopping Cart Application</h1>

      <div className="counts">
        <span>
          Cart Items: {cart.length}
        </span>

        <span>
          Wishlist Items: {wishlist.length}
        </span>
      </div>

      <ProductList />

      <Cart />

      <Wishlist />
    </div>
  );
};

export default App;