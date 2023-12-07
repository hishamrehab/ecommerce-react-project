import React from "react";
import { Button, Container, Navbar } from "react-bootstrap";
const NavbarComponent = () => {
   return  <Navbar expand="sm">
    <Navbar.Brand href="/">Ecommerce store</Navbar.Brand>
   <Navbar.Toggle />
   <Navbar.Collapse className="justify-content-end">
    <Button>Cart 0 items</Button>
   </Navbar.Collapse>

   </Navbar>
   


};

export default NavbarComponent;
