import * as React from "react";
import "./CartPage.css";
import { FaCartPlus } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaTrash } from "react-icons/fa";
import { deleteFromCart } from "../redux/cartReducer";
import { useDispatch } from "react-redux";
export default function Cart() {
  const products = useSelector((state) => state.cart.products);
 const dispatch = useDispatch();
  return (
    <>
      <div className="cart d-flex ">
        <p className="cart-title">Cart Page</p>
        <div className="cart-icon">
          <FaCartPlus />
        </div>
        <Link to="/">Home page</Link>
      </div>
      <div className="container">
        <ul className="cart-list">
          {products.length ? (
            products.map((item) => {
              return (
                <li className="cart-item" key={item.id}>
                  <img src={item.image} alt="" className="cart-item-image" />
                  <span className="cart item-title">{item.title}</span>
                  <span className="cart-item-price">{item.price}$</span>
                  <button
                    onClick={() =>
                      dispatch(
                        deleteFromCart({
                          id: item.id,
                        })
                      )
                    }
                  >
                    <FaTrash />
                  </button>
                </li>
              );
            })
          ) : (
            <h2>No Products In Your Cart</h2>
          )}
        </ul>
      </div>
    </>
  );
}
