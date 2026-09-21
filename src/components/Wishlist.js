import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addToCart,
  removeFromWishlist,
} from "../redux/actions";

const Wishlist = () => {
  const dispatch = useDispatch();

  const wishlist = useSelector(
    (state) => state.wishlist
  );

  return (
    <div className="wishlist">
      <h2>Wishlist</h2>

      {wishlist.length === 0 ? (
        <p>Your wishlist is empty</p>
      ) : (
        wishlist.map((item) => (
          <div className="wishlist-item" key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <button
              onClick={() =>
                dispatch(addToCart(item))
              }
            >
              Add to Cart
            </button>

            <button
              onClick={() =>
                dispatch(
                  removeFromWishlist(item.id)
                )
              }
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default Wishlist;