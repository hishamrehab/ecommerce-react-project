import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Box, Stack } from "@mui/material";
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
    <Box sx={{ marginTop: "50px" }}>
      {products.length > 0 && (
        <Stack
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap:"wrap",
            
          }}
        >
          {products.map((product) => (
            <Product 
             key={product.id} product={product} />
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Products;
