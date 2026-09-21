import React from "react";
import { useDispatch } from "react-redux";
import {
  addToCart,
  addToWishlist,
} from "../redux/actions";

const products = [
  {
    id: 1,
    name: "Laptop",
    price: 50000,
  },
  {
    id: 2,
    name: "Smartphone",
    price: 25000,
  },
  {
    id: 3,
    name: "Headphones",
    price: 3000,
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 5000,
  },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div className="products">
      <h2>Products</h2>

      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <h3>{product.name}</h3>

            <p>₹{product.price}</p>

            <button
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>

            <button
              onClick={() => dispatch(addToWishlist(product))}
            >
              Add to Wishlist
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;