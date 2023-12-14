import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Box, Stack, Typography } from "@mui/material";
import Category from './Category';

const Products = () => {
  const [products, setProducts] = useState([]);
  const fetchUserData = () => {
    

    fetch("http://localhost:1337/api/products?populate=*")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProducts(response.data);
         console.log(products);
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
              flexWrap: "wrap",
            }}
          >
        {products.map((product) => (
          <>
            <Product key={product.id} product={product} />
          </>
        ))}
      </Stack>
        )}
    </Box>
  )}

export default Products;
