import React from "react";
import { Row, Col } from "react-bootstrap";
import { ProductsArray } from "../ProductsStore";

const Store = () => {
  return (
    <>
      <h1> Welcome to the store!</h1>
      <Row xs={1} md={3} className="g-4">
        {ProductsArray.map((product, id) => {
          return (
            <Col align="center" key={id}>
              <h1>{product.title}</h1>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Store;
