import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProductsArray } from "../ProductsStore";
import ProductCard from "../components/productCard";
const Store = () => {
  return (
    <>
      <h1> Welcome to the store!</h1>
      <Row xs={1} md={3} className="g-4">
        {ProductsArray.map((product, id) => {
          return (
            <Col align="center" key={id}>
              <ProductCard product={product} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Store;
