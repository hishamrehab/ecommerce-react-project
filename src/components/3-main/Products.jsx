import React from "react";
import { useState, useEffect } from "react";
const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchUserData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data.products);
        console.log(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div>
      {products.length > 0  && (
          <ul>
            {products.map((product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default Products;
