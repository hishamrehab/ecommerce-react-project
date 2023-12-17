import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";
// import { useTheme } from "@emotion/react";

const Products = () => {
  // const theme = useTheme();
  const allProducts = "http://localhost:1337/api/products?populate=*";

  const filterUrl =
    "http://localhost:1337/api/products?populate=*&filters[Category][$eq]=";
  const [products, setProducts] = useState([]);

  const FilterProduct = (type) => {
    fetch(`${filterUrl}${type}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProducts(response.data);
      });
  };

  const fetchUserData = () => {
    fetch(allProducts)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProducts(response.data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <>
      <ToggleButtonGroup>
        <h1>ALL PRODUCTS</h1>

        <Button variant="contained" color="success" onClick={fetchUserData}>
          All Products
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => FilterProduct("men")}
        >
          Men
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => FilterProduct("women")}
        >
          Women's
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => FilterProduct("child")}
        >
          Child
        </Button>
      </ToggleButtonGroup>

      <Box sx={{ marginTop: "50px" }}>
        {products.length > 0 ? (
          <Stack
            sx={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
            }}
          >
            {products.map((product) => (
              <Box key={product.id}>
                <>
                  <Product product={product} />
              
                </>
              </Box>
            ))}
          </Stack>
        ) : (
          <h1>hello</h1>
        )}
      </Box>
    </>
  );
};

export default Products;
