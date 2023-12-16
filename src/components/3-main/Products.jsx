import React from "react";
import { useState, useEffect } from "react";
import Product from "./Product";
import { Box, Button, Stack, Typography } from "@mui/material";
import { ToggleButtonGroup } from "@mui/material";

// import { useTheme } from "@emotion/react";

const Products = () => {
  // const theme = useTheme();
  const allProducts = "http://localhost:1337/api/products?populate=*";
  const menCategory =
    "http://localhost:1337/api/products?populate=*&filters[Category][$eq]=men";
  const womenCategory =
    "http://localhost:1337/api/products?populate=*&filters[Category][$eq]=women";
  const childCategory =
    "http://localhost:1337/api/products?populate=*&filters[Category][$eq]=child";

  const [products, setProducts] = useState([]);

  const [data, setData] = useState(womenCategory);
  const fetchUserData = () => {
    fetch(data)
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
        <Button variant="contained" color="success" value={allProducts} >
          All Products
        </Button>
        <Button
          variant="contained"
          color="success"
          value={menCategory}
           onChange={() => setData(menCategory)}
        >
          Men
        </Button>
        <Button
          variant="contained"
          color="success"
          // onClick={() => setCategory(womenCategory)}
        >
          Women's
        </Button>
        <Button
          variant="contained"
          color="success"
          // onClick={() => setCategory(childCategory)}
        >
          Child
        </Button>
      </ToggleButtonGroup>

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
              <Box key={product.id}>
                <>
                  <Product product={product} />
                </>
              </Box>
            ))}
          </Stack>
        )}
        {/* <Category /> */}
      </Box>
    </>
  );
};

export default Products;
