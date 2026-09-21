import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  applyCoupon,
} from "../redux/actions";

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const discount = useSelector((state) => state.discount);
  const coupon = useSelector((state) => state.coupon);

  const [couponInput, setCouponInput] = useState("");

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountAmount = (subtotal * discount) / 100;

  const total = subtotal - discountAmount;

  const handleCoupon = () => {
    dispatch(applyCoupon(couponInput.toUpperCase()));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <div className="quantity">
                <button
                  onClick={() =>
                    dispatch(decreaseQuantity(item.id))
                  }
                >
                  -
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(increaseQuantity(item.id))
                  }
                >
                  +
                </button>
              </div>

              <p>
                ₹{item.price * item.quantity}
              </p>

              <button
                onClick={() =>
                  dispatch(removeFromCart(item.id))
                }
              >
                Remove
              </button>
            </div>
          ))}

          <div className="coupon">
            <input
              type="text"
              placeholder="Enter coupon"
              value={couponInput}
              onChange={(e) =>
                setCouponInput(e.target.value)
              }
            />

            <button onClick={handleCoupon}>
              Apply Coupon
            </button>

            {coupon && (
              <p>
                Coupon <strong>{coupon}</strong> applied
              </p>
            )}
          </div>

          <div className="cart-summary">
            <p>
              Subtotal: <strong>₹{subtotal}</strong>
            </p>

            <p>
              Discount: <strong>{discount}%</strong>
            </p>

            <p>
              Discount Amount:{" "}
              <strong>₹{discountAmount}</strong>
            </p>

            <h3>
              Total: ₹{total}
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;