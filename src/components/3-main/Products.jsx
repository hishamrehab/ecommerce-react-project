import React from "react";
import { useState, useEffect, useContext } from "react";
import Product from "./Product";
import { Box, Button, Stack, Typography } from "@mui/material";
import Category from "./Category";

import StoreContext from "./StoreContext";

const Products = () => {
  const [products, setProducts] = useState([]);

  const { filter } = useContext(StoreContext);

  const { setFilter } = useContext(StoreContext);
  const fetchUserData = () => {
    fetch("http://localhost:1337/api/products?populate=*")
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setProducts(response.data);
        // console.log(products);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  const handelFilterCategory = (e) => {
    setFilter(
      "http://localhost:1337/api/products?populate=*&filters[category]=men"
    );
  };

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
            <Box key={product.id}>
              <Button
                variant="body2"
                color="text.secondary"
                sx={{
                  width: "150px",
                  height: "100px",
                }}
                onClick={handelFilterCategory}
              >
                {product.attributes.Category}
              </Button>
              <Product product={product} />
            </Box>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default Products;
