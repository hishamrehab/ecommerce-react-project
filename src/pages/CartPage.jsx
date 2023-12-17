import * as React from "react";
import "./CartPage.css";
import { FaCartPlus } from "react-icons/fa6";
export default function Cart() {
  return (
    <>
      <div className="cart d-flex ">
        <p className="cart-title">Cart Page</p>
        <div className="cart-icon">
          <FaCartPlus />
        </div>
      </div>
      <div className="container">
        <ul className="cart-list">
          <li className="cart-item">
            <img
              src="http://localhost:1337/uploads/images_15_943f5ab98a.jpeg"
              alt=""
              className="cart-item-image"
            />
            <span className="cart item-title">jacket</span>
            <span className="cart-item-price">75$</span>
          </li>
          <li className="cart-item">
            <img
              src="http://localhost:1337/uploads/download_2_dd91dfc745.jpeg"
              alt=""
              className="cart-item-image"
            />
            <span className="cart item-title">shirt</span>
            <span className="cart-item-price">100$</span>
          </li>
          <li className="cart-item">
            <img
              src="http://localhost:1337/uploads/1692823291_Pima_LS_Charcoal_Heather_Front_d969b810_a1ba_45f9_addc_6ca1139fa89b_1280x_a237f52afe.png"
              alt=""
              className="cart-item-image"
            />
            <span className="cart item-title">suit</span>
            <span className="cart-item-price">250$</span>
          </li>
          <li className="cart-item">
            <img
              src="http://localhost:1337/uploads/images_2023_11_04_T161605_752_92a045a7f3.jpg"
              alt=""
              className="cart-item-image"
            />
            <span className="cart item-title">iphone</span>
            <span className="cart-item-price">150$</span>
          </li>
        </ul>
      </div>
    </>
  );
}
