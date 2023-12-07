import React from "react";
import { Button, Container, Navbar, Modal } from "react-bootstrap";
import { useState, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { CartContext } from "../CartContext";
import { current } from "@reduxjs/toolkit";

const NavbarComponent = () => {
  const cart = useContext(CartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  );

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/">E-commerce store</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Button onClick={handleShow}>Cart {productsCount} items</Button>
        </Navbar.Collapse>

        <Modal show={show} onHide={handleClose}>
          <div className="d-flex align-items-center justify-content-between">
            <Modal.Title
              style={{
                padding: "15px",
              }}
            >
              Hisham Rehab E-commerce Project
            </Modal.Title>
            <IoMdClose
              onClick={handleClose}
              style={{
                fontSize: "30px",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </div>

          <Modal.Body>
            {productsCount > 0 ? (
              <>
                <p>Items in your cart:</p>
                {cart.items.map((currentProduct, id) => {
                  <h1>{currentProduct.id}</h1>;
                })}
                <h1>Total:{cart.getTotalCost().toFixed(2)}</h1>
                <Button variant="success">
                  Purchase item!
                </Button>
              </>
            ) : (
              <h1>There are in the cart!</h1>


            )}
          </Modal.Body>
        </Modal>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
